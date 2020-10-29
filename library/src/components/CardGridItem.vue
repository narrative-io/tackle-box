<template lang="pug">
  .nio-card-grid-item
    slot
</template>

<script>
  export default {
    name: 'nio-card-grid-item',
    mounted() {	
      this.$emit('mounted')
    },
    destroyed() {
      this.$emit('destroyed')
    }
  }
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_card-grid-item'  
</style>

