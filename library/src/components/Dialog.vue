<template lang="pug">
  .nio-dialog dialog
</template>

<script>
  export default {
    name: 'nio-dialog',
    props: {
     
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
    }
  }
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_dialog'  
</style>
