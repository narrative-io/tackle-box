<template lang="pug">
    v-switch.nio-switch(
      ref="nio-switch-ref"
      v-model="tempModel"
      v-bind="$attrs"
      v-on="$listeners" 
      :rules="rules ? rules : parsedRules"
      :ripple="false"
      @change="update($event)"
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

import { getParamNames } from '@/modules/helpers'

export default {
  name: 'nio-switch',
  props: {
    "model": { required: false },
    "rules": { required: false },
    "rulesWithContext": { required: false }
  },
  model: {
    prop: "model",
    event: "update"
  },
  data: () => ({
    parsedRules: [],
    tempModel: null
  }),
  watch: {
    rules() {
      this.parseRules()
    },
    model(val) {
      this.tempModel = val
    }
  },
  mounted() {	
    this.tempModel = this.model
    this.$emit('mounted')
  },
  destroyed() {
    this.$emit('destroyed')
  },
  methods: {
    update(val) {
      this.$emit('update', val)
    },
    parseRules() {
      if (this.rulesWithContext) {
        this.rulesWithContext.map((rule, index) => {
          const paramNames = getParamNames(rule)
          let func = rule.toString()
          let funcBody = func.slice(func.indexOf("{") + 1, func.lastIndexOf("}"))
          this.parsedRules[index] = new Function(paramNames[0], funcBody)
        });
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_switch'  
</style>
