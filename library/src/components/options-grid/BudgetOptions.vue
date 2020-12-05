<template lang="pug">
  .nio-budget-options
    NioOptionsGrid.nio-budget-options-grid
      slot
    .nio-custom-budget
      NioDivider(horizontal-or)
      NioButton(
        v-if="!customBudgetVisible"
        normal-secondary 
        @click="showCustomBudget"
      ) Set a custom budget
      .custom-budget-form(v-if="customBudgetVisible")
        nio-text-field(
          prepend
          solo
          iconName="utility-dollar-sign"
          iconColor="#415298"
          :iconSize="12"
          placeholder="Enter budget"
          @input="customBudgetChanged($event)"
        )
        .forecast
          .nio-p.text-primary-dark(v-if="forecast && forecast.label") {{ forecast.label }}
          .nio-h3.text-primary-dark(v-if="forecast && forecast.value") {{ forecast.value }}
          .nio-p.text-primary-dark(v-if="forecast && forecast.annotation") {{ forecast.annotation }}
        NioButton.close-button(
          container
          @click="closeCustomBudget"
        )
          NioIcon(
            name="utility-times"
            color="#415298"
            size="14"
          )
            
</template>

<script>

import NioOptionsGrid from './OptionsGrid'
import NioDivider from '../Divider'
import NioButton from '../Button'
import NioTextField from '../TextField'
import NioIcon from '../icon/Icon'

export default {
  name: 'nio-budget-options',
  props: {
    "forecast": { type: Object, required: false }
  },
  data: () => ({
    customBudgetVisible: false,
    customBudget: null
    
  }),  
  methods: {
    showCustomBudget() {
      this.customBudgetVisible = true
      this.$emit('customBudgetOpened')
    },
    customBudgetChanged(val) {
      this.$emit('customBudgetChanged', val)
    },
    closeCustomBudget() {
      this.customBudgetVisible = false
      this.$emit('customBudgetClosed')
    }
  },
  mounted() {	
    this.$emit('mounted')
  },
  destroyed() {
    this.$emit('destroyed')
  },
  components: { NioOptionsGrid, NioDivider, NioButton, NioTextField, NioIcon }
}
</script>

<style lang="sass" scoped>
  @import '../../styles/mixins/options-grid/_budget-options'  
</style>
