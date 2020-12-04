<template lang="pug">
  .nio-budget-options
    NioOptionsGrid.nio-budget-options-grid
      slot
    .nio-custom-budget
      NioDivider(horizontal-or)
      NioButton(normal-secondary) Set a custom budget
</template>

<script>

import NioOptionsGrid from './OptionsGrid'
import NioDivider from '../Divider'
import NioButton from '../Button'

export default {
  name: 'nio-budget-options',
  props: {
  },
  mounted() {	
    this.$emit('mounted')
  },
  destroyed() {
    this.$emit('destroyed')
  },
  components: { NioOptionsGrid, NioDivider, NioButton }
}
</script>

<style lang="sass" scoped>
  @import '../../styles/mixins/options-grid/_budget-options'  
</style>
