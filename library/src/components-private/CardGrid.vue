<template lang="pug">
  .nio-card-grid
    slot
</template>

<script>
  export default {
    name: 'nio-card-grid',
    mounted() {	
      this.$emit('mounted')
    },
    destroyed() {
      this.$emit('destroyed')
    }
  }
</script>

<style lang="sass" scoped>
  @import '../styles-private/_card-grid'  
</style>

