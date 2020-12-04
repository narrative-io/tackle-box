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
          small
          iconName="utility-dollar-sign"
          iconColor="#415298"
          :iconSize="12"
          placeholder="Enter budget"
          @input="requestForecast($event)"
        )
        .forecast
          .nio-p.text-primary-dark(v-if="forecast && forecast.label") {{ forecast.label }}
          .nio-h3.text-primary-dark(v-if="forecast && forecast.value") {{ forecast.value }}
          .nio-p.text-primary-dark(v-if="forecast && forecast.annotation") {{ forecast.annotation }}
</template>

<script>

import NioOptionsGrid from './OptionsGrid'
import NioDivider from '../Divider'
import NioButton from '../Button'
import NioTextField from '../TextField'

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
    },
    requestForecast(val) {
      this.$emit('forecastRequested', val)
    }
  },
  mounted() {	
    this.$emit('mounted')
  },
  destroyed() {
    this.$emit('destroyed')
  },
  components: { NioOptionsGrid, NioDivider, NioButton, NioTextField }
}
</script>

<style lang="sass" scoped>
  @import '../../styles/mixins/options-grid/_budget-options'  
</style>
