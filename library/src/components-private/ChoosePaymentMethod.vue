<template lang="pug">
   .nio-choose-payment-method
    NioSlatTable(
      v-if="items && paymentMethod && paymentMethod.paymentMethodId && headers && !updatePaymentDialog"
      :key="tableId"
      :items="items"
      :columns="headers"
      single-select
      footer-actions
      @selectionChanged="selectionChanged"
    )
      template(v-slot:footer-actions)
        NioButton(
          normal-secondary 
          @click="updatePaymentMethod"
        ) Update Payment Method
    .no-payment-method(v-else-if="!updatePaymentDialog")    
      p.nio-p-large.text-primary-dark You have not added a payment method yet
      NioButton(
        normal-secondary
        @click="updatePaymentMethod"
      ) Add one now
    NioDialog(
      :key="updateId"
      v-model="updatePaymentDialog"
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
import { paymentMethodImageSrc } from '../modules/app/payment-method/paymentMethod'
import { makeRandomId } from '@/modules/helpers'

export default {
  name: 'nio-choose-payment-method',
  components: { UpdatePaymentDialog, NioButton, NioSlatTable, NioDialog },
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
  watch: {
    paymentMethod(val) {
      this.items = null
      this.refreshPaymentMethod()
    }
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
			console.log(this.paymentMethod)
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
      return paymentMethodImageSrc(item)
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
  }
}
</script>

<style lang="sass" scoped>

</style>

