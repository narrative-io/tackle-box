<template lang="pug">
  NioOptionsGridItem.nio-budget-option
    template(v-slot:mask)
      .nio-h3.text-primary-lightest {{ name }}
    template(v-slot:value)
      .nio-jumbo-1.text-primary-dark {{ option }}
    template(v-for="(index, name) in $scopedSlots" v-slot:[name]="data")
      slot(:name="name" v-bind="data") 	
</template>

<script>

import NioOptionsGridItem from './OptionsGridItem'

export default {
  name: 'nio-budget-option',
  props: {
    "name": { type: String, required: true },
    "amount": { type: String, required: true },
    "option": { type: Object}
  },
  mounted() {	
    this.$emit('mounted')
  },
  destroyed() {
    this.$emit('destroyed')
  },
  components: { NioOptionsGridItem }
}
</script>

<style lang="sass" scoped>
  @import '../../styles/mixins/options-grid/_budget-option'  
</style>
