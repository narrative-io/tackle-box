<template lang="pug">
  .nio-offer-ttd-3p-detail.offer-detail
    .partner-ids.detail-module
      .title-description
        .filter-title.nio-h4.text-primary-darker Partner IDs
        .description.nio-p.text-primary-dark Define The Trade Desk Partner IDs that are eligible to purchase this 3rd Party audience in The Trade Desk marketplace.
      .filter-value
        NioTagsField(
          v-model="localModel.partnerIds"
          :rules="[validatePartnerIds]"
          label="Partner IDs"
          placeholder="Enter IDs"
          @blur="partnerIdsBlur"
          @focus="partnerIdsBlurred = false"
          validate-on-blur
        )
        .error-msg(v-if="(!localModel.partnerIds || localModel.partnerIds.length < 1) && partnerIdsBlurred")
          p.nio-p.text-error {{ partnerIdsErrorMsg }}
    .revenue-cap.detail-module
      .title-description
        .filter-title.nio-h4.text-primary-darker Revenue Share
        .description.nio-p.text-primary-dark Percent of media cost to be charged to the buyer when this data is utilized within The TradeDesk marketplace.
      .filter-value
        NioTextField(
          v-model="localModel.revenueShare"
          :rules="[validateRevenueShare]"
          placeholder="Enter value"
          type="number"
          percent
          validate-on-blur
        )
    .cpm.detail-module
      .title-description
        .filter-title.nio-h4.text-primary-darker CPM Cap
        .description.nio-p.text-primary-dark CPM cap on media cost. Note that all audiences in The Trade Desk marketplace are hybrid-priced (percent of media with a CPM cost).
      .filter-value
        NioTextField(
          v-model="localModel.cpmCap"
          :rules="[validateCpmCap]"
          placeholder="Enter value"
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
      revenueShare: null,
      cpmCap: null
    },
    valid: false,
    partnerIdsErrorMsg: 'At least one Partner ID is required',
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
      const partnerIdsValid = this.validatePartnerIds(this.localModel.partnerIds)
      const revenueShareValid = this.validateRevenueShare(this.localModel.revenueShare)
      const cpmCapValid = this.validateCpmCap(this.localModel.cpmCap)
      if (!partnerIdsValid.length && !revenueShareValid.length && !cpmCapValid.length) {
        this.valid = true
      } else {
        this.valid = false
      }
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

