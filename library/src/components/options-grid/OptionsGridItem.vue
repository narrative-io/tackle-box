<template lang="pug">
  .nio-options-grid-item(
    :class="{'has-cta': $scopedSlots.cta}"
    @click="handleClick"
  )
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
    option: { type: Object, required: true }
  },
  mounted() {	
    this.$emit('mounted')
  },
  destroyed() {
    this.$emit('destroyed')
  },
  methods: {
    handleClick() {
      if (!this.$scopedSlots.cta) {
        this.$emit('optionSelected', this.option)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  @import '../../styles/mixins/options-grid/_options-grid-item'  
</style>
