<template lang="pug">
  .nio-charge-summary(

  )
</template>

<script>
  export default {
    name: 'nio-charge-summary',
    mounted() {	
      this.$emit('mounted')
    },
    destroyed() {
      this.$emit('destroyed')
    }
  }
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_charge-summary'  
</style>

