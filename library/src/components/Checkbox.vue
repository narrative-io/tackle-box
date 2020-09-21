<template lang="pug">
    v-checkbox.nio-checkbox(
      :rules="parsedRules"
      v-bind="$attrs"
      v-on="$listeners" 
      ref="nio-checkbox-ref"
    )
      template(v-for="(index, name) in $scopedSlots" v-slot:[name]="data")
        slot(:name="name" v-bind="data")    
</template>

<script>
  export default {
    name: 'nio-checkbox',
    data: () => ({
      parsedRules: []
    }),
    methods: {
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
      this.$emit('mounted')
    },
    destroyed() {
      this.$emit('destroyed')
    }
  }
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_checkbox'  
</style>
