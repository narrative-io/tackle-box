<template lang="pug">
    .menu Nav menu 
</template>

<script>
  export default {
    props: {
      
    },
    data: () => ({
      parsedRules: []
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
  @import '../styles/mixins/_nav-menu'  
</style>
