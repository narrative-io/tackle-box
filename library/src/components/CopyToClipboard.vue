<template lang="pug">
  .nio-copy-to-clipboard(
    
  )
</template>

<script>
  export default {
    name: 'nio-copy-to-clipboard',
    mounted() {	
      this.$emit('mounted')
    },
    destroyed() {
      this.$emit('destroyed')
    }
  }
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_copy-to-clipboard'  
</style>

