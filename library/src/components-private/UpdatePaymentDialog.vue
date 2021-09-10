<template lang="pug">
  .update-payment-dialog(ref="dialog")
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
  components: { }
};
</script>

<style lang="sass" scoped>

@import "@narrative.io/tackle-box/src/styles/global/_colors"

.update-payment-dialog
  padding: 100px 24px 78px 24px
  background-color: $c-white
  border: 1px solid $c-primary-lighter
  border-radius: 12px
  display: flex
  flex-direction: column
  align-items: center
  .nio-icon-framer
    margin-bottom: 16px
  h3
    margin-bottom: 8px
  p    
    margin-bottom: 40px
  .actions
    display: flex
    justify-content: center
    align-items: center
    & > * + * 
      margin-left: 16px  
</style>