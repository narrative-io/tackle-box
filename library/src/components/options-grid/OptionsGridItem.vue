<template lang="pug">
  .nio-options-grid-item
    .name(v-if="$slots.name")
      slot(name="name")
    .amount 
      slot(name="amount")
    .content
      slot(name="content")
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
