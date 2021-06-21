<template lang="pug">
    v-textarea.nio-textarea(
      solo
      v-model="tempModel"
      :rules="parsedRules"
      @input="$emit('update', $event)"
      v-bind="$attrs"
      v-on="$listeners" 
    )
</template>

<script>
  export default {
    name: 'nio-textarea',
    props: {
      "model": { required: false },
      "rules": { required: false }
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
    mounted() {	
      this.tempModel = this.model
      this.makeRules()
      this.$emit('mounted') 
    },
    methods: {
      makeRules() {
        if (this.rules) {
          this.rules.map((rule, index) => {
            let func = rule.toString()
            let funcBody = func.slice(func.indexOf("{") + 1, func.lastIndexOf("}"))
            this.parsedRules[index] = new Function("value", funcBody)
          });
        }
      }
    },
    watch: {
      model(val) {
        this.tempModel = val
      },
      rules() {
        this.makeRules()
      }
    },
    destroyed() {
      this.$emit('destroyed')
    },
  }
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_textarea'  
</style>
