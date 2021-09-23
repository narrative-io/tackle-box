<template lang="pug">
  .nio-overflow-menu Overflow Menu
</template>

<script>
 
  export default {
    name: 'nio-overflow-menu',
    data: () => ({
    
    }),
    props: {
     
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
  @import '../styles/mixins/_overflow-menu'  
</style>
