<template lang="pug">
  .test-data-stream-offers
    .valid Valid:  {{ valid }}
    NioDataStreamOffers(
      v-if="TTD3P && taxonomy"
      :destinations="TTD3P"
      :ttd-taxonomy="taxonomy"
      @offersChanged="offersChanged($event)"
    )
    NioTTDRateCardSummary(
      :item="{buyable: true, fullPath: 'OnenioNextChild>Two', effectivePrice: '10% / $2.00'}"
    )
    NioTTDRateCardSummary(
      :item="{buyable: false, fullPath: 'OnenioNextChild>Two', effectivePrice: '10% / $2.00'}"
    )
    NioTTDRateCardSummary(
      :item="{buyable: true, fullPath: 'OnenioNextChild>Two', effectivePrice: '10% / $2.00'}"
      asPill
    )
    NioTTDRateCardSummary(
      :item="{buyable: false, fullPath: 'OnenioNextChild>Two', effectivePrice: '10% / $2.00'}"
      asPill
    )
    NioTTDRateCardSummary(
      :item="{buyable: false, fullPath: 'One'}"
    )
    NioTTDRateCardSummary(
      :item="{buyable: false, fullPath: 'One'}"
      asPill
    )
</template>

<script>

import NioDataStreamOffers from '../../../components/connectors/offers/DataStreamOffers'
import NioTTDRateCardSummary from '../../../components/connectors/common/ttd-connector/TTDRateCardSummary'
import TTD3P from './mock-destinations/TTD-3P'
import { getExistingTTDTaxonomy } from '@/modules/app/ttd-taxonomy/ttdTaxonomyModule'
import { headers, baseUrl, companyId} from './auth'

export default {
  components: {
    NioDataStreamOffers,
    NioTTDRateCardSummary
  },
  data: () => ({
    TTD3P: TTD3P,
    taxonomy: null,
    offers: null
  }),
  computed: {
    valid() {
      return !this.offers.find(offer => offer.active && !offer.valid)
    },
    noneSelected() {
      return !this.offers.find(offer => offer.active)
    },
    valid() {
      return this.offers && !this.offers.find(offer => offer.active && !offer.valid)
    }
  },
  async mounted() {
    try {
      const ttdTaxonomyResp = await getExistingTTDTaxonomy(headers, baseUrl, companyId)
      if (ttdTaxonomyResp && ttdTaxonomyResp.length > 0) {
        this.taxonomy = ttdTaxonomyResp.filter(item => !item.buyable)
      }
    } catch (error) {
      console.log("ERROR: ", error)
      this.error = error
    }
  },
  methods: {
    offersChanged(offers) {
      console.log(offers)
      this.offers = offers
    },
    
  }
};
</script>

<style lang="sass" scoped>
</style>