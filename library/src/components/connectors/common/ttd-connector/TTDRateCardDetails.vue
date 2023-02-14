<template lang="pug">  
  NioRadioGroup.nio-ttd-rate-card-details(
    v-if="rateCard"
    v-model="rateCard.type"
  )
    .rate-card.inherit(:class="{'selected': rateCard.type === 'inherited'}")
      .rate-card-header
        NioRadioButton(
          label="Inherited from Parent"
          value="inherited"
        )
        NioTTDRateCardSummary(
          v-if="rateCard.type === 'inherited'"
          :item="item"
          :as-pill="true"
        )
    .rate-card.system(:class="{'selected': rateCard.type === 'system'}")
      .rate-card-header
        NioRadioButton(
          label="System Rate Card"
          value="system"
        )
        NioTTDRateCardSummary(
          v-if="rateCard.type === 'system'"
          :item="item"
          :as-pill="true"
        )
      .rate-card-body(v-if="rateCard.type === 'system'")
        .not-buyable-message.nio-p.text-coral-light(v-if="!item.buyable") This node is not buyable, so this rate card will not be applied to this node, but rather to all descendant nodes. (if applicable)
        NioDivider(horizontal-solo)
        .split-row
          .nio-h4.text-primary-darker Revenue Share
          NioTextField.small-input(
            v-model="rateCard.system.revenueShare"
            type="number"
            percent
          )
        NioDivider(horizontal-solo)
        .split-row
          .nio-h4.text-primary-darker CPM Cap
          NioTextField.small-input(
            v-model="rateCard.system.cpmCap"
            type="number"
            prepend
            currency
          )      
    .rate-card.advertizer-partner(:class="{'selected': rateCard.type === 'advertiserPartner'}")
      .rate-card-header
        NioRadioButton(
          label="Advertiser/Partner Rate Card"
          value="advertiserPartner"
        )
        NioTTDRateCardSummary(
          v-if="rateCard.type === 'advertiserPartner'"
          :item="item"
          :as-pill="true"
        )
      .rate-card-body(v-if="rateCard.type === 'advertiserPartner'")
        .not-buyable-message.nio-p.text-coral-light(v-if="!item.buyable") This node is not buyable, so this rate card will not be applied to this node, but rather to all descendant nodes. (if applicable)
        NioDivider(horizontal-solo)
        NioCheckbox(
          v-model="rateCard.advertiser.enabled"
          label="Advertiser Rate Card"
        ) 
        .details(v-if="rateCard.advertiser.enabled")
          .textarea-heading.nio-h4.text-primary-darker Advertiser IDs (one per line)
          NioTextarea.rate-card-ids(
            v-model="rateCard.advertiser.ids"
            disabled
          )
          NioDivider(horizontal-solo)
          .split-row
            .nio-h4.text-primary-darker Revenue Share
            NioTextField.small-input(
              v-model="rateCard.advertiser.revenueShare"
              type="number"
              percent
            )
          NioDivider(horizontal-solo)
          .split-row
            .nio-h4.text-primary-darker CPM Cap
            NioTextField.small-input(
              v-model="rateCard.advertiser.cpmCap"
              type="number"
              prepend
              currency
            )
        NioCheckbox(
          v-model="rateCard.partner.enabled"
          label="Partner Rate Card"
        ) 
        .details(v-if="rateCard.partner.enabled")
          .textarea-heading.nio-h4.text-primary-darker Partner IDs (one per line)
          NioTextarea.rate-card-ids(
            v-model="rateCard.partner.ids"
            disabled
          )
          NioDivider(horizontal-solo)
          .split-row
            .nio-h4.text-primary-darker Revenue Share
            NioTextField.small-input(
              v-model="rateCard.partner.revenueShare"
              type="number"
              percent
            )
          NioDivider(horizontal-solo)
          .split-row
            .nio-h4.text-primary-darker CPM Cap
            NioTextField.small-input(
              v-model="rateCard.partner.cpmCap"
              type="number"
              prepend
              currency
            )     
</template>

<script>

import NioTTDRateCardSummary from './TTDRateCardSummary'
 
export default {
  components: { NioTTDRateCardSummary },
  props: {
    rateCard: {
      type: Object,
      required: true
    },
    buyable: {
      type: Boolean,
      required: false
    }
  },
  data: () => ({
    
  }),
  computed: {
    
  },
  watch: {
   
  },
  mounted() {
  },
  methods: {
  
  }
};
</script>

<style lang="sass" scoped>

@import '../../../../styles/mixins/connectors/common/ttd-connector/_ttd-rate-card-details'

</style>