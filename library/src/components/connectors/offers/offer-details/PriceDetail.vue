<template lang="pug">
  .nio-offer-price-detail.offer-detail
    .title-description
      .filter-title.nio-h4.text-primary-darker Cost Per Thousand
        //- NioTooltip(
        //-   :data="tooltips.cost"
        //- )
      .description.nio-p.text-primary-dark Set a price for every 1000 records of raw data.
    .filter-value
      NioSlider(
        v-model="price"
        :min="0.00"
        :max="100"
        :step="0.05"
        currency
        prepend
      )
</template>

<script>

import NioSlider from '../../../Slider'

export default {
  components: { NioSlider },
  data: () => ({
    price: 1
  }),
  watch: {
    price() {
      this.$emit('update', this.price)
    }
  },
  methods: {

  }
}

</script>

<style lang="sass" scoped>

@import '../../../../styles/mixins/connectors/offers/offer-details/_price-detail'  

</style>

