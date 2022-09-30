<template lang="pug">
  NioExpansionPanels.nio-data-stream-offers(
    v-model="openPanels"
    v-if="offers && offers.length > 0"
  )
    NioExpansionPanel(
      v-for="offer of offers"
    )
      template(v-slot:header) 
        .header-content
          .offer-header-details
            NioImageTile(
              v-if="offer.icon.src"
              :src="offer.icon.src"
              :alt="offer.icon.alt"
              :imgBackground="offer.icon.background"
            )
            NioImageTile(
              v-else-if="offer.icon.imageType && offer.icon.image"
              :src="`data:${offer.icon.imageType};base64, ${offer.icon.image}`"
              :alt="offer.icon.alt"
            )
            .offer-content
              h4.nio-h4.text-primary-darker.name {{ offer.displayName }}
              p.nio-p.text-primary-dark(v-if="offer.description") {{ offer.description }}
          .offer-header-controls
            NioSwitch(
              v-model="offer.active"
              @click.stop
              @change="toggleOffer(offer, $event)"
            )
        NioDivider(horizontal-solo)
      template(v-slot:content)
        template(v-if="offer.detailType === 'PriceDetail'")
          NioOfferPriceDetail(
            :price="offer.value"
            @update="modelChanged(offer, $event)"
          )
        template(v-if="offer.detailType === 'TTD-3P-Detail'")
          NioOfferTTD3PDetail(
            :model="offer.value"
            @validChanged="validChanged(offer, $event)"
            @update="modelChanged(offer, $event)"
          )
        NioDivider(horizontal-solo)
</template>

<script>

import NioExpansionPanels from '../../ExpansionPanels'
import NioExpansionPanel from '../../ExpansionPanel'
import NioImageTile from '../../ImageTile'
import NioSwitch from '../../Switch'
import NioDivider from '../../Divider'
import LocalApps from '../../../modules/app/destinations/localApps'
import NioOfferPriceDetail from './offer-details/PriceDetail'
import NioOfferTTD3PDetail from './offer-details/TTD3PDetail'

export default {
  name: 'nio-data-stream-offers',
  components: { 
    NioExpansionPanels,
    NioExpansionPanel,
    NioImageTile,
    NioSwitch,
    NioDivider,
    NioOfferPriceDetail,
    NioOfferTTD3PDetail
  },
  props: {
    destinations: { type: Array, required: false } 
  },
  data: () => ({
    offers: null,
    openPanels: [0]
  }),
  watch: {
    offers: {
      deep: true,
      handler(val) {
        this.$emit('offersChanged', this.offers)
      }
    }
  },
  mounted() {	
    this.makeOffers()
  },
  methods: {
    makeOffers() {
      this.offers = [
        {
          name: 'data_streams_market',
          displayName: 'Data Stream Marketplace',
          active: true,
          description: 'Sell this dataset on app.narrative.io.',
          detailType: 'PriceDetail',
          icon: {
            src: 'https://cdn.narrative.io/data-studio/images/narrative-placeholder-primary.svg',
            alt: 'Data Stream Marketplace icon'
          },
          value: 1,
          valid: true
        },
        {
          name: 'data_shop',
          displayName: 'Data Shops',
          active: false,
          description: 'Sell this dataset on your Data Shop',
          detailType: 'PriceDetail',
          icon: {
            src: 'https://cdn.narrative.io/data-studio/images/narrative-placeholder-primary.svg',
            alt: 'Data Stream Marketplace icon'
          },
          value: 1,
          valid: true
        },
        ...this.makeTTDOffers()
      ]
    },
    makeTTDOffers() {
      const ttdDestination = this.destinations ? this.destinations.find(destination => destination.app_id === 11) : null
      if (ttdDestination && ttdDestination.eligibility && ttdDestination.eligibility.type === 'eligible') {
        const ttdApp = LocalApps.find(app => app.id === 11)
        const ttdProfile = ttdDestination.profiles.find(profile => profile.name === 'Narrative TTD 3p Custom Connector')
        if (ttdProfile) {
          return [{
            name: 'Narrative TTD 3p Custom Connector',
            displayName: 'The TradeDesk - 3rd Party Data',
            profileId: ttdProfile.id,
            active: false,
            description: 'Share this Data Stream with The TradeDesk as a 3rd Party audience.',
            detailType: 'TTD-3P-Detail',
            icon: {
              imageType: ttdApp.icons[0].imageType,
              image: ttdApp.icons[0].image,
              alt: ttdApp.icons[0].altText
            },
            value: {
              partnerIds: [],
              revenueShare: 0,
              cpmCap: 0.00
            },
            valid: false
          }]
        }
      }
      return []
    },
    modelChanged(offer, value) {
      const targetOffer = this.offers.find(currOffer => currOffer.name === offer.name)
      targetOffer.value = value
    },
    validChanged(offer, value) {
      const targetOffer = this.offers.find(currOffer => currOffer.name === offer.name)
      targetOffer.valid = value
    },
    toggleOffer(offer, value) {
      const offerIndex = this.offers.findIndex(currOffer => currOffer.name === offer.name)
      if (value && !this.openPanels.includes(offerIndex)) {
        this.openPanels.push(offerIndex)
      } else if (!value && this.openPanels.includes(offerIndex)) {
        this.openPanels = this.openPanels.filter(panel => panel !== offerIndex)
      }
    }
  }
}

</script>

<style lang="sass" scoped>

@import '../../../styles/mixins/connectors/offers/_data-stream-offers'  

</style>

