<template lang="pug">
  .nio-offer-price-detail.offer-detail
    .offer-price.filter
      .title-description
        .filter-title.nio-h4.text-primary-darker Cost Per Thousand
        .description.nio-p.text-primary-dark Set a price for every 1000 records of raw data.
      .filter-value
        NioSlider(
          v-model="localPrice"
          :min="0"
          :max="100"
          :step="0.05"
          currency
          prepend
        )
    .offer-license.filter(v-if="license")
      .title-description
        .filter-title.nio-h4.text-primary-darker License
          NioTooltip(
            :data="tooltips.license"
          )
        .description.nio-p.text-primary-dark Under the Narrative Marketplace Data Purchase Agreement, buyers are given unlimited use of the licensed data within the specified license expiration period.
      .filter-value
        NioSelect(
          v-model="license.licenses"
          :value="license.licenses"
          :items="licenses"
          key="1"
          label="Add license"
          multiple 
          selection-pills
          disabled
        )
        NioSelect(
          v-model="license.period"
          :items="licensePeriods"
          item-text="label"
          item-value="value" 
          label="Expiration"
          key="2"
          selection-pills
          disabled
        )
</template>

<script>

import NioSlider from '../../../Slider'
import NioTooltip from '../../../Tooltip.vue'
import NioSelect from '../../../Select'

export default {
  components: { 
    NioSlider,
    NioTooltip,
    NioSelect 
  },
  props: { 
    price: { type: Number, required: true },
    license: { type: Object, required: false },
    offerName: { type: String, required: true } 
  },
  data: () => ({
    localPrice: 1,
    licensePeriods: [
      {
        label: '30 Days', 
        value: 30
      }
    ],
    licenses: ['Narrative Marketplace Data Purchase Agreement'],
    tooltips:{
      license: {
        message: "Access the Narrative Marketplace Data Purchase Agreement here:",
        linkText: "View Agreement",
        linkHref: "https://app.narrative.io/legal/data-purchase-agreement"
      }
    }
  }),
  watch: {
    localPrice() {
      this.$emit('update', parseFloat(this.localPrice))
    },
    price() {
      this.localPrice = parseFloat(this.price)
    }
  }
}

</script>

<style lang="sass" scoped>

@import '../../../../styles/mixins/connectors/offers/offer-details/_price-detail'  

</style>

