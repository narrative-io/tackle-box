<template lang="pug">
  .nio-offer-ttd-3p-detail.offer-detail
    .partner-ids.detail-module
      .title-description
        .filter-title.nio-h4.text-primary-darker Partner IDs
        .description.nio-p.text-primary-dark Define the partner IDs that this Data Stream will be shared with.
      .filter-value
        NioTagsField(
          v-model="partnerIds"
          placeholder="Partner IDs"
        )
    .revenue-cap.detail-module
      .title-description
        .filter-title.nio-h4.text-primary-darker Revenue Share
        .description.nio-p.text-primary-dark Cras justo odio, dapibus ac facilisis in.
      .filter-value
        NioTextField(
          v-model="revenueCap"
          placeholder="Revenue Share"
          percent
        )
    .cpm.detail-module
      .title-description
        .filter-title.nio-h4.text-primary-darker CPM Cap
        .description.nio-p.text-primary-dark Cras justo odio, dapibus ac facilisis in.
      .filter-value
        NioTextField(
          v-model="cpm"
          currency
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

  }
  
}

</script>

<style lang="sass" scoped>

@import '../../../../styles/mixins/connectors/offers/offer-details/_ttd-3p-detail'  

</style>

