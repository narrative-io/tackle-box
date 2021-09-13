<template lang="pug">
   .nio-choose-payment-method
    NioSlatTable(
      v-if="items && paymentMethod && paymentMethod.paymentMethodId && headers && !updatePaymentDialog"
      :items="items"
      :columns="headers"
      @selectionChanged="selectionChanged"
      single-select
      footer-actions
      :key="tableId"
    )
      template(v-slot:footer-actions)
        NioButton(normal-secondary @click="updatePaymentMethod") Update Payment Method
    .no-payment-method(v-else-if="!updatePaymentDialog")    
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
import NioButton from '../components/Button'
import NioSlatTable from '../components/table/SlatTable'
import NioDialog from '../components/Dialog'
import { makeRandomId } from '../modules/helpers'

export default {
  name: 'nio-choose-payment-method',
  data: () => ({
    headers: null,
    updatePaymentDialog: false,
    updateId: null,
    selection: null,
    tableId: makeRandomId(),
    items: null
  }),	
  computed: {
    paymentMethod() { return {...this.nioPaymentMethod, id: 1} },
    invoiceAuthorized() { return this.nioInvoiceAuthorized } 
  },
  mounted() {
   this.refreshPaymentMethod()
  },
  methods: {
    refreshPaymentMethod() {
      this.computeItems()
      this.computeHeaders()
    },
    selectionChanged() {
      this.$emit('paymentMethodChanged', {
        imageSrc: this.computeImgSrc(this.paymentMethod),
        title: this.computeTitle(this.paymentMethod)
      })
    },
    computeItems() {
      const items = [this.paymentMethod]
      if (this.invoiceAuthorized) {
        items.push({
          id: 0
        })
      }
      this.items = items
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
      this.$emit('paymentMethodChanged', this.selection)
      this.updateId = Math.random()
      window.open('https://app.narrative.io/settings/payment', '_blank')
      this.updatePaymentDialog = true
    },
    closePaymentDialog() {
      this.tableId = makeRandomId()
      this.updatePaymentDialog = false
    }
  },
  watch: {
    paymentMethod(val) {
      this.items = null
      this.refreshPaymentMethod()
    }
  },
  components: { UpdatePaymentDialog, NioButton, NioSlatTable, NioDialog}
}
</script>

<style lang="sass" scoped>

</style>

