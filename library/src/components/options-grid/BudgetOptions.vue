<template lang="pug">
  .nio-budget-options
    NioOptionsGrid
</template>

<script>

import NioOptionsGrid from './OptionsGrid'

export default {
  name: 'nio-budget-options',
  mounted() {	
    this.$emit('mounted')
  },
  destroyed() {
    this.$emit('destroyed')
  },
  components: { NioOptionsGrid }
}
</script>

<style lang="sass" scoped>
  @import '../../styles/mixins/options-grid/_budget-options'  
</style>
