<template lang="pug">
  .nio-options-grid-item
    .name(v-if="$scopedSlots.name")
      slot(name="name")
    .amount 
      slot(name="amount")
    .content(v-if="$scopedSlots.content")
      slot(name="content")
    .cta(v-if="$scopedSlots.cta")
      slot(name="cta")
</template>

<script>

export default {
  name: 'nio-options-grid-item',
  props: {
    "selectedOption": { type: Object, required: false }
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
