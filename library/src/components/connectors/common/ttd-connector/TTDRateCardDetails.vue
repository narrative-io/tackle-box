<template lang="pug">  
  NioRadioGroup.nio-ttd-rate-card-details(
    v-if="localRateCard"
    v-model="localRateCard.type"
  )
    .rate-card.inherit(:class="{'selected': localRateCard.type === 'inherited'}")
      .rate-card-header
        NioRadioButton(
          label="Inherited from Parent"
          value="inherited"
        )
        NioTTDRateCardSummary(
          v-if="localRateCard.type === 'inherited'"
          :item="item"
          :as-pill="true"
        )
    .rate-card.system(:class="{'selected': localRateCard.type === 'system'}")
      .rate-card-header
        NioRadioButton(
          label="System Rate Card"
          value="system"
        )
        NioTTDRateCardSummary(
          v-if="localRateCard.type === 'system'"
          :item="item"
          :as-pill="true"
        )
      .rate-card-body(v-if="localRateCard.type === 'system'")
        .not-buyable-message.nio-p.text-coral-light(v-if="!buyable && !item.buyable") This element is not buyable, so this rate card will not be applied to this node, but rather to all descendant nodes. (if applicable)
        NioDivider(horizontal-solo)
        .split-row
          .nio-h4.text-primary-darker Revenue Share
          NioTextField.small-input(
            v-model="localRateCard.system.revenueShare"
            :rules="[validateRevenueShare]"
            type="number"
            percent
            validate-on-blur
          )
        NioDivider(horizontal-solo)
        .split-row
          .nio-h4.text-primary-darker CPM Cap
          NioTextField.small-input(
            v-model="localRateCard.system.cpmCap"
            :rules="[validateCpmCap]"
            type="number"
            prepend
            currency
          )      
    .rate-card.advertizer-partner(:class="{'selected': localRateCard.type === 'advertiserPartner'}")
      .rate-card-header
        NioRadioButton(
          label="Advertiser/Partner Rate Card"
          value="advertiserPartner"
        )
        NioTTDRateCardSummary(
          v-if="localRateCard.type === 'advertiserPartner'"
          :item="item"
          :as-pill="true"
        )
      .rate-card-body(v-if="localRateCard.type === 'advertiserPartner'")
        .not-buyable-message.nio-p.text-coral-light(v-if="!buyable && !item.buyable") This node is not buyable, so this rate card will not be applied to this node, but rather to all descendant nodes. (if applicable)
        NioDivider(horizontal-solo)
        NioCheckbox(
          v-model="localRateCard.advertiser.active"
          label="Advertiser Rate Card"
        ) 
        .details(v-if="localRateCard.advertiser.active")
          .textarea-heading.nio-h4.text-primary-darker Advertiser IDs (one per line)
          NioTextarea.rate-card-ids(
            v-model="localRateCard.advertiser.ids"
            :rules="[validateIds]"
            validate-on-blur
          )
          NioDivider(horizontal-solo)
          .split-row
            .nio-h4.text-primary-darker Revenue Share
            NioTextField.small-input(
              v-model="localRateCard.advertiser.revenueShare"
              :rules="[validateRevenueShare]"
              type="number"
              percent
            )
          NioDivider(horizontal-solo)
          .split-row
            .nio-h4.text-primary-darker CPM Cap
            NioTextField.small-input(
              v-model="localRateCard.advertiser.cpmCap"
              :rules="[validateCpmCap]"
              type="number"
              prepend
              currency
              validate-on-blur
            )
        NioCheckbox(
          v-model="localRateCard.partner.active"
          label="Partner Rate Card"
        ) 
        .details(v-if="localRateCard.partner.active")
          .textarea-heading.nio-h4.text-primary-darker Partner IDs (one per line)
          NioTextarea.rate-card-ids(
            v-model="localRateCard.partner.ids"
            :rules="[validateIds]"
            validate-on-blur
          )
          NioDivider(horizontal-solo)
          .split-row
            .nio-h4.text-primary-darker Revenue Share
            NioTextField.small-input(
              v-model="localRateCard.partner.revenueShare"
              :rules="[validateRevenueShare]"
              type="number"
              percent
              validate-on-blur
            )
          NioDivider(horizontal-solo)
          .split-row
            .nio-h4.text-primary-darker CPM Cap
            NioTextField.small-input(
              v-model="localRateCard.partner.cpmCap"
              :rules="[validateCpmCap]"
              type="number"
              prepend
              currency
              validate-on-blur
            )     
</template>

<script>

import NioTTDRateCardSummary from './TTDRateCardSummary'
import NioRadioGroup from '@/components/RadioGroup'
import NioRadioButton from '@/components/RadioButton'
import NioDivider from '@/components/Divider'
import NioCheckbox from '@/components/Checkbox'
import NioTextField from '@/components/TextField'
import NioTextarea from '@/components/Textarea'

 
export default {
  components: { 
    NioRadioGroup,
    NioRadioButton,
    NioDivider,
    NioCheckbox,
    NioTextField,
    NioTextarea,
    NioTTDRateCardSummary 
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    rateCard: {
      type: Object,
      required: true
    },
    buyable: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data: () => ({
    localRateCard: null
  }),
  watch: {
    item: {
      deep: true,
      handler() {
        this.initRateCard()
      }
    },
    localRateCard: {
      deep: true,
      handler() {
        this.validateRateCard()
      }
    },
    rateCard: {
      deep: true,
      handler() {
        this.localRateCard = this.rateCard
      }
    }
  },
  mounted() {
    this.initRateCard()
  },
  methods: {
    initRateCard() {
      this.localRateCard = JSON.parse(JSON.stringify(this.rateCard))
    },
    validateRateCard() {
      const keys = ['system', 'partner', 'advertiser']
      const valid = !keys.some(key => {
        const revenueShareValid = this.validateRevenueShare(this.localRateCard[key].revenueShare)
        const cpmCapValid = this.validateCpmCap(this.localRateCard[key].cpmCap)
        let idsValid = true
        if (key === 'partner' || key === 'advertiser') {
          if (this.localRateCard.type !== 'advertiserPartner' || !this.localRateCard[key].active) {
            return false
          } else {
            idsValid = this.validateIds(this.localRateCard[key].ids)
          }
        } else if (key === 'system') {
          if (this.localRateCard.type !== 'system') {
            return false
          }
        }
        if (!idsValid.length && !revenueShareValid.length && !cpmCapValid.length) {
          return false
        } else {
          return true
        }        
      })
      if (valid) {
        this.$emit('rateCardChanged', this.localRateCard)
      } else {
        this.$emit('rateCardChanged', null)
      }
      
    },
    validateIds(value) {
      if (value && value.length > 0) {
        return true
      }
      return 'Please enter at least one ID'
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
    }
  }
};
</script>

<style lang="sass" scoped>

@import '../../../../styles/mixins/connectors/common/ttd-connector/_ttd-rate-card-details'

</style>