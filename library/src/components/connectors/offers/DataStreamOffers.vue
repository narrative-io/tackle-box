<template lang="pug">
  NioExpansionPanels.nio-data-stream-offers
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
              h4.nio-h4.text-primary-darker.name {{ offer.name }}
              p.nio-p.text-primary-dark(v-if="offer.description") {{ offer.description }}
          .offer-header-controls
            NioSwitch()
        NioDivider(horizontal-solo)
      template(v-slot:content)
        template(v-if="offer.detailType === 'PriceDetail'")
          NioOfferPriceDetail(
            @update="modelChanged(offer, $event)"
          )
        template(v-if="offer.detailType === 'TTD-3P-Detail'")
          NioOfferTTD3PDetail(
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
  data: () => ({
    offers: null
  }),
  mounted() {	
    this.makeOffers()
  },
  methods: {
    makeOffers() {
      this.offers = [
        {
          name: 'Data Stream Marketplace',
          description: 'Sell this dataset on app.narrative.io.',
          detailType: 'PriceDetail',
          icon: {
            src: 'https://cdn.narrative.io/data-studio/images/narrative-placeholder-primary.svg',
            alt: 'Data Stream Marketplace icon'
          }
        },
        {
          name: 'Data Shops',
          description: 'Sell this dataset on your Data Shop',
          detailType: 'PriceDetail',
          icon: {
            src: 'https://cdn.narrative.io/data-studio/images/narrative-placeholder-primary.svg',
            alt: 'Data Stream Marketplace icon'
          }
        },
        ...this.makeTTDOffers()
      ]
    },
    updatePayload() {
      this.$emit('stepPayloadChanged', {
        visibility: {
          marketplace: this.visibility.marketplace,
          dataShop: this.visibility.dataShop
        },
        price: {
          marketplace: this.price.marketplace,
          dataShop: this.price.dataShop
        },
        license: {
          licenses: this.license.licenses,
          period: this.license.period
        }
      })
    },
    makeTTDOffers() {
      const ttdApp = LocalApps.find(app => app.id === 11)
      return [{
        name: 'The TradeDesk - 3rd Party Data',
        description: 'Post data stream to The TradeDesk as 3rd party data.',
        detailType: 'TTD-3P-Detail',
        icon: {
          imageType: ttdApp.icons[0].imageType,
          image: ttdApp.icons[0].image,
          alt: ttdApp.icons[0].altText
        },
        value: {
          partnerIds: [],
          revenueCap: 0,
          cpm: 0.00
        }
      }]
    },
    modelChanged(offer, value) {
      console.log("offer changed")
      console.log("offer", offer)
      console.log("value", value)
      const targetOffer = this.offers.find(currOffer => currOffer.name === offer.name)
      targetOffer.value = value
    }
  }
}

</script>

<style lang="sass" scoped>

@import '../../../styles/mixins/connectors/offers/_data-stream-offers'  

</style>

