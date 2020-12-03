<template lang="pug">
  NioOptionsGridItem.nio-budget-option(
    :class="{'selected': selected}"
  )
    template(v-slot:name)
      .nio-h3.text-primary-lightest {{ name }}
    template(v-slot:amount)
      .nio-jumbo-1.text-primary-dark {{ amount }}
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
    "selected": { type: Boolean, required: false, default: false }
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
