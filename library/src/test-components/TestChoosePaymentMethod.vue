<template lang="pug">
  .test-choose-payment-method
    NioChoosePaymentMethod
    NioSelectedPaymentMethod(
      :payment-method="paymentMethod"
    )
</template>

<script>

import NioChoosePaymentMethod from '../components-private/ChoosePaymentMethod'
import NioSelectedPaymentMethod from '../components-private/SelectedPaymentMethod'

export default {
  components: {
    NioChoosePaymentMethod,
    NioSelectedPaymentMethod
  },
  data: () => ({
    paymentMethod: {"companyId":1,"paymentMethodId":"pm_1ILwM9LLDZZYA9lEq7RqkKjM","cardBrand":"visa","cardLast4":"4242"}
  }),
  mounted() {
    this.$store.dispatch('nioServices/SET_PAYMENT_METHOD', {"companyId":1,"paymentMethodId":"pm_1ILwM9LLDZZYA9lEq7RqkKjM","cardBrand":"visa","cardLast4":"4242"})
  }
};
</script>

<style lang="sass" scoped>

</style>