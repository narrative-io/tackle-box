<template lang="pug">
   .nio-choose-payment-method
    NioSlatTable(
      v-if="paymentMethod && paymentMethod.paymentMethodId && headers"
      :items="items"
      :columns="headers"
      @selectionChanged="selectionChanged"
      single-select
      footer-actions
      :key="tableId"
    )
      template(v-slot:footer-actions)
        NioButton(normal-secondary @click="updatePaymentMethod") Update Payment Method
    .no-payment-method(v-else)    
      p.nio-p-large.text-primary-dark You have not added a payment method yet
      NioButton(
        normal-secondary
        @click="updatePaymentMethod"
      ) Add one now
    NioDialog(
      v-model="updatePaymentDialog"
      :key="updateId"
    )
      UpdatePaymentDialog(
        @cancel="closePaymentDialog"
      )  	   
</template>

<script>

import UpdatePaymentDialog from './UpdatePaymentDialog'

export default {
  name: 'nio-choose-payment-method',
  data: () => ({
    headers: null,
    updatePaymentDialog: false,
    updateId: null,
    selection: null,
    tableId: Math.random()
  }),	
  computed: {
    items() {
      const items = [this.paymentMethod]
      if (this.invoiceAuthorized) {
        items.push({
          id: 0
        })
      }
      return items
    },
    paymentMethod() { return {...this.nioPaymentMethod, id: 1} },
    invoiceAuthorized() { return this.nioInvoiceAuthorized } 
  },
  mounted() {
   this.refreshPaymentMethod()
  },
  methods: {
    refreshPaymentMethod() {
      this.computeHeaders()
    },
    selectionChanged() {
      this.$emit('stepPayloadChanged', {
        imageSrc: this.computeImgSrc(this.paymentMethod),
        title: this.computeTitle(this.paymentMethod)
      })
    },
    computeHeaders() {
      this.headers = [
        {
          name: "slat",
          props: {
            image: this.computeImgSrc,
            title: this.computeTitle,
          }
        }
      ]
    },
    computeImgSrc(item) {
      if (item.id === '0') {
        return 'https://cdn.narrative.io/images/data-stream/images/narrative-placeholder-normal.svg'
      } else {
        switch (item.cardBrand) {
          case 'visa':
            return "https://cdn.narrative.io/images/data-stream/images/visaTile.svg"
          case 'mastercard':
            return "https://cdn.narrative.io/images/data-stream/images/mastercardTile.svg"  
          case 'discover':
            return "https://cdn.narrative.io/images/data-stream/images/discoverTile.svg"   
          case 'amex':
            return "https://cdn.narrative.io/images/data-stream/images/americanExpressTile.svg"
          case 'unionpay':
            return "https://cdn.narrative.io/images/data-stream/images/unionpay.svg"	
          case 'diners':
            return "https://cdn.narrative.io/images/data-stream/images/dinersclub.svg"
          case 'jcb':
            return "https://cdn.narrative.io/images/data-stream/images/jcb.svg"		     
          default:
            break;
        }
      }
    },
    computeTitle(item) {
      return item.id === 0 ? 'Invoice me' : `${item.cardBrand.toUpperCase()} ending in ${item.cardLast4}`
    },
    updatePaymentMethod() {
      this.selection = null
      this.$emit('stepPayloadChanged', this.selection)
      this.updateId = Math.random()
      window.open('https://app.narrative.io/settings/payment', '_blank')
      this.updatePaymentDialog = true
    },
    closePaymentDialog() {
      this.tableId = Math.random()
      this.updatePaymentDialog = false
    }
  },
  watch: {
    paymentMethod() {
      this.refreshPaymentMethod()
    }
  },
  components: { UpdatePaymentDialog }
}
</script>

<style lang="sass" scoped>
  @import '../styles-private/_choose-payment-method'  
</style>

