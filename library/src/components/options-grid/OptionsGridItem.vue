<template lang="pug">
  .nio-options-grid-item
    .mask
      slot(name="mask")
    .value  
      slot(name="value")
    .annotation  
      slot(name="annotation")
</template>

<script>

export default {
  name: 'nio-options-grid-item',
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
  @import '../../styles/mixins/options-grid/_options-grid-item'  
</style>
