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
</template>

<script>
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
      parsedRules: []
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
      }
    },
    mounted() {	
      this.parseRules()
      this.$emit('mounted')
    },
    destroyed() {
      this.$emit('destroyed')
    },
    watch: {
      rules() {
        this.parseRules()
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_text-field'  
</style>

