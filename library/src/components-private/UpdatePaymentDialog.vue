<template lang="pug">
  .nio-update-payment-dialog(ref="dialog")
    NioIconFramer(
      icon-name="display-warning"
    )
    h3.nio-h3.text-primary-darker Waiting for updated payment method
    p.nio-p.text-primary-dark Update your payment method in the new window. Click cancel to go back.
    .actions
      NioButton(
        normal-secondary
        @click="cancel"
      ) Cancel
</template>

<script>

import NioButton from '../components/Button'
import NioIconFramer from '../components/icon/IconFramer'

export default {
  components: { NioButton, NioIconFramer },
  mounted() {
    this.prevPaymentMethod = this.paymentMethod
    parent.postMessage({
      name: 'updatingPaymentMethod',
      payload: null
    },"*")
    setTimeout(() => {
      this.$emit('cancel')
    }, 300000); // allow 5 minutes before closing dialog
  },
  data: () => ({
    prevPaymentMethod: null
  }),
  computed: {
    paymentMethod() { 
      return this.nioPaymentMethod
    }
  },
  watch: {
    paymentMethod(val) {
      if (val && val.paymentMethodId && (!this.prevPaymentMethod || !this.prevPaymentMethod.paymentMethodId || this.prevPaymentMethod.paymentMethodId !== val.paymentMethodId)) {
        this.cancel()
      }
    }
  },	
  methods: {
    cancel() {
      this.$emit('cancel')
    }
  }  
};
</script>

<style lang="sass" scoped>

  @import "../styles-private/_update-payment-dialog"

</style>