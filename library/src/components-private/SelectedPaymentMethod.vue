<template lang="pug">
   .nio-selected-payment-method
      NioImageTile(
        :src="imgSrc"
        size="small"
      )
      p.nio-p.text-primary-dark <strong>{{ cardBrand }}</strong> {{ cardNumber }}
</template>

<script>

import { paymentMethodImageSrc } from '../modules/app/payment-method/paymentMethod'
import NioImageTile from '../components/ImageTile'

export default {
  name: 'nio-selected-payment-method',
  components: { NioImageTile },
  props: {
    paymentMethod: { type: Object, required: true }
  },
  computed: {
    imgSrc() {
      return paymentMethodImageSrc(this.paymentMethod)
    },
    cardBrand() {
      return this.paymentMethod.cardBrand.toUpperCase()
    },
    cardNumber() {
      return `****${this.paymentMethod.cardLast4}`
    }
  }
}
</script>

<style lang="sass" scoped>

@import '../styles-private/_selected-payment-method'

</style>

