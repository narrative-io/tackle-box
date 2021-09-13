<template lang="pug">
  .nio-update-payment-dialog(ref="dialog")
    NioIconFramer(
      iconName="display-warning"
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
  computed: {
    paymentMethod() { 
      return this.nioPaymentMethod
    },
  },
  data: () => ({
    prevPaymentMethod: null
  }),	
  methods: {
    cancel() {
      this.$emit('cancel')
    }
  },
  watch: {
    paymentMethod(val) {
      if (val && val.paymentMethodId && (!this.prevPaymentMethod || !this.prevPaymentMethod.paymentMethodId || this.prevPaymentMethod.paymentMethodId !== val.paymentMethodId)) {
        this.cancel()
      }
    }
  },
  components: { NioButton, NioIconFramer }
};
</script>

<style lang="sass" scoped>

	@import "../styles-private/_update-payment-dialog"

</style>