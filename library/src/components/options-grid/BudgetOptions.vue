<template lang="pug">
  .nio-budget-options
    NioOptionsGrid.nio-budget-options-grid(:class="{'disabled': hasCustomBudget && customBudgetVisible}")
      slot
    .nio-custom-budget
      NioDivider(
				horizontal-or 
				v-if="hasCustomBudget"
			)
      NioButton(
        v-if="hasCustomBudget && !customBudgetVisible"
        normal-secondary 
        @click="showCustomBudget"
      ) Set a custom budget
      .custom-budget-form(v-if="hasCustomBudget && customBudgetVisible")
        .custom-budget-entry
          nio-text-field(
            prepend
            solo
            iconName="utility-dollar-sign"
            iconColor="#415298"
            :iconSize="12"
            type="number"
            placeholder="Enter budget"
            v-model="customBudget"
          )
          .custom-budget-error.text-error.nio-p-small
            span(v-if="customBudget !== null && minBudgetError") Minimum ${{ formatNumber(customBudgetMin) }} budget required
            span(v-if="customBudget !== null && maxBudgetError") Maximum ${{ formatNumber(customBudgetMax) }} budget allowed
        .forecast
          .nio-p.text-primary-dark(v-if="forecast && forecast.label") {{ forecast.label }}
          .forecast-value
            .nio-h3.text-primary-dark(v-if="!forecastLoading && forecast && forecast.value") {{ forecast.value ? forecast.value : '' }}
            .nio-h4.text-primary-dark(v-if="forecastLoading") {{ forecastLoadingMsg }}
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
import numeral from 'numeral'

export default {
  name: 'nio-budget-options',
  props: {
    "forecast": { type: Object, required: false },
    "customBudgetMin": { type: Number, required: false },
    "customBudgetMax": { type: Number, required: false },
    "forecastLoadingMsg": { type: String, required: false, default: "working..." },
    "forecastLoading": { type: Boolean, required: false, default: false }
  },
  data: () => ({
    hasCustomBudget: false,
    customBudgetVisible: false,
    customBudget: null,
    customBudgetValid: false,
    minBudgetError: false,
    maxBudgetError: false
  }),  
  methods: {
    formatNumber(number) {
      return numeral(number).format('0,0')
    },
    showCustomBudget() {
      this.customBudgetVisible = true
      this.$emit('customBudgetOpened')
    },
    closeCustomBudget() {
      this.customBudgetVisible = false
      this.$emit('customBudgetValidChanged', false)
      this.$emit('customBudgetClosed')
    },
    applyHelperAttributes() {
      const attributes = this.$el.attributes
      if (attributes.getNamedItem('custom-budget')) {
        this.hasCustomBudget = true
      }
    }  
  },
  mounted() {	
    this.applyHelperAttributes()
    this.$emit('customBudgetValidChanged', false)
    this.$emit('mounted')
  },
  destroyed() {
    this.$emit('destroyed')
  },
  watch: {
    customBudget(val) {
      this.minBudgetError = this.customBudgetMin && this.customBudget < this.customBudgetMin ? true : false
      this.maxBudgetError = !this.minBudgetError && this.customBudgetMax && this.customBudget > this.customBudgetMax ? true : false
      if (this.minBudgetError || this.maxBudgetError) {
        this.customBudgetValid = false
        this.$emit('customBudgetValidChanged', false)
      } else {
        this.customBudgetValid = true
        this.$emit('customBudgetValidChanged', true)
      }
      this.$emit('customBudgetChanged', val)
    }
  },
  components: { NioOptionsGrid, NioDivider, NioButton, NioTextField, NioIcon }
}
</script>

<style lang="sass" scoped>
  @import '../../styles/mixins/options-grid/_budget-options'  
</style>
