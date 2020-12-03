<template lang="pug">
  .nio-options-grid
    slot
</template>

<script>
  export default {
    name: 'nio-options-grid',
    mounted() {	
      this.$emit('mounted')
    },
    destroyed() {
      this.$emit('destroyed')
    }
  }
</script>

<style lang="sass" scoped>
  @import '../../styles/mixins/options-grid/_options-grid'  
</style>
