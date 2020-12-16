<template lang="pug">
  .nio-charge-summary
    .summary-container
      .line-items
        .line-item(
          v-for="lineItem of lineItems"
        )
          .line-item-content
            .item-name.nio-p.text-primary-dark {{ lineItem.name }}
            .value.nio-p.nio-bold.text-primary-dark {{ formatPrice(lineItem.value) }}
        .line-item.total
          .line-item-content
            .item-name.nio-p.text-primary-dark TOTAL CHARGE
            .value.nio-p.nio-bold.text-primary-dark {{ formatPrice(totalCharge) }}
      .cadence-message.nio-p.text-primary-dark(v-if="!$slots['append-content']") {{ rebillingMessage }}      
      .help-message(v-if="!$slots['append-content']")
        span.nio-p.text-primary-dark {{ ` Questions about your order? ` }}
        a(href="https://kb.narrative.io" target="_blank") Visit the help center
      slot(name="append-content")  
</template>

<script>

import numeral from 'numeral'

export default {
  name: 'nio-charge-summary',
  props: {
    "lineItems": { type: Array, required: false },
    "total": { type: Number, required: false },
    "rebillingMessage": { type: String, required: false, default: 'You will be rebilled for your subscription after 30 days' }
  },
  computed: {
    totalCharge() {
      return this.total ? this.total : this.lineItems.reduce((total, lineItem) => {
        return total + parseInt(lineItem.value)
      }, 0)
    }
  },
  methods: {
    formatPrice(price) {
      return this.formatCurrencyNoCents(price)
    }, 
    formatCurrency(number) {
      if (Math.abs(number) > 1000)
        return numeral(number).format('$0,0.00a')
      else
        return numeral(number).format('$0.00')
    },
    formatCurrencyNoCents(number) {
      if (Math.abs(number) > 1000)
        return numeral(number).format('$0,0')
      else
        return numeral(number).format('$0')
    }
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
  @import '../styles/mixins/_charge-summary'  

</style>

