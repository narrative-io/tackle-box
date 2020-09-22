<template lang="pug">
    v-switch.nio-switch(
      @change="$emit('update', $event)"
      :rules="parsedRules"
      v-bind="$attrs"
      v-on="$listeners" 
      ref="nio-switch-ref"
      :ripple="false"
    )
</template>

<script>
  export default {
    name: 'nio-switch',
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
  @import '../styles/mixins/_switch'  
</style>
