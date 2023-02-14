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
        )
   
</template>

<script>

import NioTagsField from '../../../../components/TagsField'
import NioTextField from '../../../../components/TextField'
import NioAutocomplete from '../../../../components/Autocomplete'
import TTDRateCardDetails from '../../common/ttd-connector/TTDRateCardDetails.vue'

export default {
  components: { 
    NioTagsField,
    NioTextField,
    NioAutocomplete,
    TTDRateCardDetails
  },
  props: { 
    model: { type: Object, required: true },
    taxonomy: { type: Array, required: false }
  },
  data: () => ({
    localModel: {
      selectedTaxonomyElement: null,
      rateCard: {
        active: false,
        partnerIds: [],
        revenueShare: null,
        cpmCap: null
      }  
    },
    valid: false,
    partnerIdsErrorMsg: 'At least one ID is required',
    partnerIdsBlurred: false
  }),
  watch: {
    localModel: {
      deep: true,
      handler() {
        this.validate()
        this.$emit('update', this.localModel)
      }
    },
    model: {
      deep: true,
      handler() {
        this.localModel = this.model
      }
    },
    valid() {
      this.$emit('validChanged', this.valid)
    }
  },
  mounted() {
    if (this.taxonomy && this.taxonomy.length > 0) {

    }
  },
  methods: {
    validatePartnerIds(value) {
      if (value.length > 0) {
        return true
      }
      return 'Please enter at least one partner ID'
    },
    validateRevenueShare(value) {
      if (!value || value.trim().length === 0) {
        return 'Required'
      } else if (value < 0) {
        return 'Cannot be less than zero'
      } else if (value > 100) {
        return 'Cannot be greater than 100'
      } else {
        return true
      }
    },
    validateCpmCap(value) {
      if (!value || value.trim().length === 0) {
        return 'Required'
      } else if (value < 0) {
        return 'Cannot be less than zero'
      } else {
        return true
      }
    },
    validate() {
      return Boolean(this.localModel.selectedTaxonomyElement)
      // const partnerIdsValid = this.validatePartnerIds(this.localModel.partnerIds)
      // const revenueShareValid = this.validateRevenueShare(this.localModel.revenueShare)
      // const cpmCapValid = this.validateCpmCap(this.localModel.cpmCap)
      // if (!partnerIdsValid.length && !revenueShareValid.length && !cpmCapValid.length) {
      //   this.valid = true
      // } else {
      //   this.valid = false
      // }
    },
    partnerIdsBlur() {
      this.partnerIdsBlurred = true
    }
  }
  
}

</script>

<style lang="sass" scoped>

@import '../../../../styles/mixins/connectors/offers/offer-details/_ttd-3p-detail'  

</style>

