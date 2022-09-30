<template lang="pug">
  .nio-offer-ttd-3p-detail.offer-detail
    .partner-ids.detail-module
      .title-description
        .filter-title.nio-h4.text-primary-darker Partner IDs
        .description.nio-p.text-primary-dark Define The TradeDesk Partner IDs that are eligible to purchase this 3rd Party audience in The TradeDesk marketplace.
      .filter-value
        NioTagsField(
          v-model="localModel.partnerIds"
          :rules="[validatePartnerIds]"
          label="Partner IDs"
          placeholder="Enter IDs"
          validate-on-blur
        )
    .revenue-cap.detail-module
      .title-description
        .filter-title.nio-h4.text-primary-darker Revenue Share
        .description.nio-p.text-primary-dark Percent of media cost to be charged to the buyer in The TradeDesk marketplace.
      .filter-value
        NioTextField(
          v-model="localModel.revenueShare"
          :rules="[validateRevenueShare]"
          placeholder="Revenue Share"
          type="number"
          percent
          validate-on-blur
        )
    .cpm.detail-module
      .title-description
        .filter-title.nio-h4.text-primary-darker CPM Cap
        .description.nio-p.text-primary-dark CPM cap on media cost. Note that all audiences in The TradeDesk marketplace are hybrid-priced (percent of media with a CPM cost).
      .filter-value
        NioTextField(
          v-model="localModel.cpmCap"
          :rules="[validateCpmCap]"
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
  props: { 
    model: { type: Object, required: true }
  },
  data: () => ({
    localModel: {
      partnerIds: [],
      revenueShare: 0,
      cpmCap: 0.00
    },
    valid: false
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
  methods: {
    validatePartnerIds(value) {
      if (value.length > 0) {
        return true
      }
      return 'Please enter at least one partner ID'
    },
    validateRevenueShare(value) {
      if (!value || value.trim().length === 0) {
        return ' '
      } else if (value < 0) {
        return 'cannot be less than zero'
      } else if (value > 100) {
        return 'cannot be greater than 100'
      } else {
        return true
      }
    },
    validateCpmCap(value) {
      if (!value || value.trim().length === 0) {
        return ' '
      } else if (value < 0) {
        return 'cannot be less than zero'
      } else {
        return true
      }
    },
    validate() {
      const partnerIdsValid = this.validatePartnerIds(this.localModel.partnerIds)
      const revenueShareValid = this.validateRevenueShare(this.localModel.revenueShare)
      const cpmCapValid = this.validateCpmCap(this.localModel.cpmCap)
      if (!partnerIdsValid.length && !revenueShareValid.length && !cpmCapValid.length) {
        this.valid = true
      } else {
        this.valid = false
      }
    }
  }
  
}

</script>

<style lang="sass" scoped>

@import '../../../../styles/mixins/connectors/offers/offer-details/_ttd-3p-detail'  

</style>

