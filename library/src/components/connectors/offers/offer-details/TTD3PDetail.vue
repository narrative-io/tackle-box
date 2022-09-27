<template lang="pug">
  .nio-offer-ttd-3p-detail.offer-detail
    .partner-ids.detail-module
      .title-description
        .filter-title.nio-h4.text-primary-darker Partner IDs
        .description.nio-p.text-primary-dark Define the partner IDs that this Data Stream will be shared with.
      .filter-value
        NioTagsField(
          v-model="partnerIds"
          :rules="[validatePartnerIds]"
          label="Partner IDs"
          placeholder="Enter IDs"
          validate-on-blur
        )
    .revenue-cap.detail-module
      .title-description
        .filter-title.nio-h4.text-primary-darker Revenue Share
        .description.nio-p.text-primary-dark Cras justo odio, dapibus ac facilisis in.
      .filter-value
        NioTextField(
          v-model="revenueCap"
          :rules="[validateRevenueCap]"
          placeholder="Revenue Share"
          type="number"
          percent
          validate-on-blur
        )
    .cpm.detail-module
      .title-description
        .filter-title.nio-h4.text-primary-darker CPM Cap
        .description.nio-p.text-primary-dark Cras justo odio, dapibus ac facilisis in.
      .filter-value
        NioTextField(
          v-model="cpm"
          :rules="[validateCPM]"
          placeholder="Cost Per Thousand Records"
          type="number"
          currency
          validate-on-blur
        )
</template>

<script>

import NioTagsField from '../../../../components/TagsField'
import NioTextField from '../../../../components/TextField'

export default {
  components: { 
    NioTagsField,
    NioTextField
  },
  data: () => ({
    partnerIds: [],
    revenueCap: 0,
    cpm: 0.00
  }),
  methods: {
    validatePartnerIds(value) {
      if (value.length > 0) {
        return true
      }
      return 'Please enter at least one partner ID'
    },
    validateRevenueCap(value) {
      if (!value || value.trim().length === 0) {
        return ' '
      } else if (value < 0) {
        return 'cannot be less than 0'
      } else if (value > 100) {
        return 'cannot be greater than 100'
      } else {
        return true
      }
    },
    validateCPM(value) {
      if (!value || value.trim().length === 0) {
        return ' '
      } else if (value < 0) {
        return 'cannot be less than 0'
      } else {
        return true
      }
    }
  }
  
}

</script>

<style lang="sass" scoped>

@import '../../../../styles/mixins/connectors/offers/offer-details/_ttd-3p-detail'  

</style>

