<template lang="pug">
  .test-data-stream-offers
    NioDataStreamOffers(
      v-if="TTD3P && taxonomy"
      :destinations="TTD3P"
      :ttd-taxonomy="taxonomy"
      @offersChanged="offersChanged($event)"
    )
</template>

<script>

import NioDataStreamOffers from '../../../components/connectors/offers/DataStreamOffers'
import TTD3P from './mock-destinations/TTD-3P'
import { getExistingTTDTaxonomy } from '@/modules/app/ttd-taxonomy/ttdTaxonomyModule'
import { headers, baseUrl, companyId} from './auth'

export default {
  components: {
    NioDataStreamOffers
  },
  data: () => ({
    TTD3P: TTD3P,
    taxonomy: null
  }),
  async mounted() {
    try {
      this.taxonomy = await getExistingTTDTaxonomy(headers, baseUrl, companyId)
     
    } catch (error) {
      console.log("ERROR: ", error)
      this.error = error
    }
  },
  methods: {
    offersChanged(val) {
      console.log(val)
    }
  }
};
</script>

<style lang="sass" scoped>
</style>