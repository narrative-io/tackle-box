<template lang="pug">
    v-text-field.nio-text-field(
      outlined 
      flat
      :rules="parsedRules"
      v-bind="$attrs"
      v-on="$listeners" 
      ref="nio-text-field-ref"
    )
      template(v-for="(index, name) in $scopedSlots" v-slot:[name]="data")
        slot(:name="name" v-bind="data") 
</template>

<script>
  export default {
    name: 'nio-text-field',
    props: {
      "rules": { required: false }
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

