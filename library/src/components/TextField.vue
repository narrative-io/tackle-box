<template lang="pug">
    v-text-field.nio-text-field(
      outlined 
      flat
      @input="$emit('update', $event)"
      :model="model" 
      :rules="parsedRules"
      v-bind="$attrs"
      v-on="$listeners" 
      ref="nio-text-field-ref"
    )
      template(
        v-if="appendAttr"
        v-slot:append
      )
        NioIcon(
          :name="iconName"
          size="16"
        )
      template(v-for="(index, name) in $scopedSlots" v-slot:[name]="data")
        slot(:name="name" v-bind="data")   
      slot  
</template>

<script>
import { VTextField } from 'vuetify/lib'
import NioIcon from './icon/Icon'

export default {
  name: 'nio-text-field',
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
    appendAttr: false,
    iconName: null
  }),
  methods: {
    focus() {
      this.$refs['nio-text-field-ref'].focus()
    },
    parseRules() {
      if (this.rules) {
        this.rules.map((rule, index) => {
          let func = rule.toString()
          let funcBody = func.slice(func.indexOf("{") + 1, func.lastIndexOf("}"))
          this.parsedRules[index] = new Function("value", funcBody)
        });
      }
    },
    applyHelperAttributes() {
      const attributes = this.$el.attributes
      if (attributes.getNamedItem('append')) {
        this.appendAttr = true
        this.iconName = attributes.getNamedItem('append').value
      }	
    }
  },
  mounted() {	
    this.parseRules()
    this.applyHelperAttributes()
    this.$emit('mounted')
  },
  destroyed() {
    this.$emit('destroyed')
  },
  watch: {
    rules() {
      this.parseRules()
    }
  },
  components: { VTextField, NioIcon }
}
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_text-field'  
</style>

