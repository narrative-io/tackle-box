<template lang="pug">
    v-checkbox.nio-checkbox(
      @input="$emit('update', $event)"
      :model="model" 
      :rules="parsedRules"
      v-bind="$attrs"
      v-on="$listeners" 
      ref="nio-checkbox-ref"
    )
</template>

<script>
  export default {
    name: 'nio-checkbox',
    props: {
      "model": { required: false }
    },
    model: {
      prop: "model",
      event: "update"
    },
    data: () => ({
    }),
    methods: {
     
    },
    mounted() {	
      this.$emit('mounted')
    },
    destroyed() {
      this.$emit('destroyed')
    },
    watch: {
      
    }
  }
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_checkbox'  
</style>
