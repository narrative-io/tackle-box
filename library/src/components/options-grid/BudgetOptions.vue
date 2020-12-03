<template lang="pug">
  .nio-budget-options
    NioOptionsGrid
      template(v-slot:options)
        NioBudgetOption(
          v-for="option of options"
          :name="option.name"
          :amount="option.amount"
        )
          template(slot="annotation")
            slot(name="annotation")

</template>

<script>

import NioOptionsGrid from './OptionsGrid'
import NioBudgetOption from './BudgetOption'

export default {
  name: 'nio-budget-options',
  props: {
    "options": { type: Array, required: false, default: true }
  },
  mounted() {	
    this.$emit('mounted')
  },
  destroyed() {
    this.$emit('destroyed')
  },
  components: { NioOptionsGrid, NioBudgetOption }
}
</script>

<style lang="sass" scoped>
  @import '../../styles/mixins/options-grid/_budget-options'  
</style>
