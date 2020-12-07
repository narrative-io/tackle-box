<template lang="pug">
  .nio-charge-summary(

  )
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
          .value.nio-p.nio-bold.text-primary-dark {{ totalCharge }}
</template>

<script>

import numeral from 'numeral'

export default {
  name: 'nio-charge-summary',
  props: {
    "lineItems": { type: Array, required: false },
    "total": { type: Number, required: false }
  },
  computed: {
    totalCharge() {
      return this.formatCurrency(this.total ? this.total : this.lineItems.reduce((total, lineItem) => {
        return total + lineItem.value
      }, 0))
    }
  },
  methods: {
    formatPrice(price) {
      return String(price).indexOf('.') > -1 ? this.formatCurrency(price) : this.formatCurrencyNoCents(price)
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

