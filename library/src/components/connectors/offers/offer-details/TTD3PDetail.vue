<template lang="pug">
  .nio-offer-ttd-3p-detail.offer-detail
    .taxonomy-elements.detail-module
      .title-description
        .filter-title.nio-h4.text-primary-darker Taxonomy Container
        .description.nio-p.text-primary-dark Select a container from your The Trade Desk taxonomy in which a new segment will be created for this Data Stream.
      .filter-value
        NioAutocomplete(
          v-if="taxonomy && taxonomy.length > 0"
          v-model="localModel.selectedTaxonomyElement"
          :items="taxonomy"
          label="Select a container"
          item-value="id"
          item-text="displayName"
          return-object
          small
        )
          template(v-slot:item="{ item }")
            .item-container(:style="{width: '500px', display: 'flex', justifyContent: 'space-between'}")
              .item-name {{ item.displayName }}
              NioTTDRateCardSummary(
                :item="item"
                :as-pill="false"
              )
        NioTTDRateCardDetails(
          v-if="localModel.selectedTaxonomyElement && localModel.rateCard"
          :item="localModel.selectedTaxonomyElement"
          :rate-card="localModel.rateCard"
          :buyable="true"
          @rateCardChanged="rateCardChanged($event)"
        )
</template>

<script>

import NioTagsField from '../../../../components/TagsField'
import NioTextField from '../../../../components/TextField'
import NioAutocomplete from '../../../../components/Autocomplete'
import NioTTDRateCardDetails from '../../common/ttd-connector/TTDRateCardDetails.vue'
import NioTTDRateCardSummary from '../../common/ttd-connector/TTDRateCardSummary'
import { makeRateCardForItem, itemIsContainer } from '@/modules/app/ttd-taxonomy/ttdTaxonomyModule'

export default {
  components: { 
    NioTagsField,
    NioTextField,
    NioAutocomplete,
    NioTTDRateCardDetails,
    NioTTDRateCardSummary
  },
  props: { 
    model: { type: Object, required: true },
    taxonomy: { type: Array, required: false }
  },
  data: () => ({
    localModel: {
      selectedTaxonomyElement: null,
      prevSelectedTaxonomyElement: null,
      rateCard: null
    },
    partnerIdsErrorMsg: 'At least one ID is required',
    partnerIdsBlurred: false
  }),
  watch: {
    localModel: {
      deep: true,
      handler() {
        this.initRateCard()
        this.$emit('update', this.localModel)
      }
    },
    model: {
      deep: true,
      handler() {
        this.localModel = this.model
      }
    }
  },
  methods: {
    initRateCard() { 
      if (!this.localModel.prevSelectedTaxonomyElement || this.localModel.selectedTaxonomyElement.id !== this.localModel.prevSelectedTaxonomyElement.id) {
        this.localModel.prevSelectedTaxonomyElement = this.localModel.selectedTaxonomyElement
        this.localModel.rateCard = makeRateCardForItem(this.localModel.selectedTaxonomyElement)
      }
    },
    rateCardChanged(rateCard) {
      if (!rateCard) {
        this.$emit('validChanged', false)
      } else {
        this.localModel.rateCard = rateCard
        this.$emit('update', this.localModel)
        this.$emit('validChanged', true)
      }
    }
  }
  
}

</script>

<style lang="sass" scoped>

@import '../../../../styles/mixins/connectors/offers/offer-details/_ttd-3p-detail'  

</style>

