<template lang="pug">
  .nio-divider(

  ) DIVIDER
</template>

<script>
  export default {
    name: 'nio-divider',
    mounted() {	
      this.$emit('mounted')
    },
    destroyed() {
      this.$emit('destroyed')
    }
  }
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_divider'  
</style>

