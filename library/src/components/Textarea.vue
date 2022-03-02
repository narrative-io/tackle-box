<template lang="pug">
    v-textarea.nio-textarea(
      v-model="tempModel"
      v-bind="$attrs"
      v-on="$listeners" 
      :rules="rules ? rules : parsedRules"
      solo
      @input="$emit('update', $event)"
    )
</template>

<script>

import { getParamNames } from '@/modules/helpers'

export default {
  name: 'nio-textarea',
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
    value: '',
    tempModel: null,
    parsedRules: []
  }),
  watch: {
    model(val) {
      this.tempModel = val
    },
    rules() {
      this.makeRules()
    }
  },
  mounted() {	
    this.tempModel = this.model
    this.makeRules()
    this.$emit('mounted') 
  },
  destroyed() {
    this.$emit('destroyed')
  },
  methods: {
    makeRules() {
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
  @import '../styles/mixins/_textarea'  
</style>
