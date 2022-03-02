<template lang="pug">
    v-radio-group.nio-radio-group(
      ref="nio-radio-group-ref"
      v-bind="$attrs"
      v-on="$listeners" 
      :class="{'display-slat': slatAttr}"
      :model="model" 
      :rules="parsedRules"
      :value="model"
      :ripple="false" 
      @change="$emit('update', $event)"
    )
      template(
        v-for="(index, name) in $scopedSlots" 
        v-slot:[name]="data"
      )
        slot(
          v-bind="data"
          :name="name" 
        )
      slot  
</template>

<script>

import { getParamNames } from '../modules/helpers'

export default {
  name: 'nio-radio-group',
  props: {
    "model": { required: false },
    "rules": { required: false }
  },
  model: {
    prop: "model",
    event: "update"
  },
  data: () => ({
    parsedRules: [],
    slatAttr: false
  }),
  mounted() {	
    this.applyHelperAttributes()
    this.$emit('mounted')
  },
  destroyed() {
    this.$emit('destroyed')
  },
  methods: {
    parseRules() {
      if (this.rules) {
        this.rules.map((rule, index) => {
          const paramNames = getParamNames(rule)
          let func = rule.toString()
          let funcBody = func.slice(func.indexOf("{") + 1, func.lastIndexOf("}"))
          this.parsedRules[index] = new Function(paramNames[0], funcBody)
        });
      }
    },
    applyHelperAttributes() {
      const attributes = this.$el.attributes
      if (attributes.getNamedItem('slat')) {
        this.slatAttr = true
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_radio-group'  
</style>

