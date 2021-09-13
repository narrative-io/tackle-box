<template lang="pug">
  .test-choose-payment-method
    NioChoosePaymentMethod
</template>

<script>

import NioChoosePaymentMethod from '../components-private/ChoosePaymentMethod'

export default {
  components: {
    NioChoosePaymentMethod
  },
  data: () => ({
    
  }),
  mounted() {
    this.$store.dispatch('nioServices/SET_PAYMENT_METHOD', {"companyId":1,"paymentMethodId":"pm_1ILwM9LLDZZYA9lEq7RqkKjM","cardBrand":"visa","cardLast4":"4242"})
  }
};
</script>

<style lang="sass" scoped>
.test-choose-payment-method
</style>