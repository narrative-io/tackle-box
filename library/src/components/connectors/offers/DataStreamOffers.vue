<template lang="pug">
  NioExpansionPanels.nio-data-stream-offers
    NioExpansionPanel(
      v-for="offer of offers"
    )
      template(v-slot:header) 
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
      template(v-slot:content)
        .offer-detail
          template(v-if="offer.detailType === 'PriceDetail'")
            NioOfferPriceDetail 
          template(v-if="offer.detailType === 'TTD-3P-Detail'")
            NioOfferTTD3PDetail
</template>

<script>

import NioExpansionPanels from '../../ExpansionPanels'
import NioExpansionPanel from '../../ExpansionPanel'
import NioImageTile from '../../ImageTile'
import LocalApps from '../../../modules/app/destinations/localApps'
import NioOfferPriceDetail from './offer-details/PriceDetail'
import NioOfferTTD3PDetail from './offer-details/TTD3PDetail'

export default {
  name: 'nio-data-stream-offers',
  components: { 
    NioExpansionPanels,
    NioExpansionPanel,
    NioImageTile,
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
      console.log(ttdApp)
      return [{
        name: 'The TradeDesk - 3rd Party Data',
        description: 'Post data stream to The TradeDesk as 3rd party data.',
        detailType: 'TTD-3P-Detail',
        icon: {
          imageType: ttdApp.icons[0].imageType,
          image: ttdApp.icons[0].image,
          alt: ttdApp.icons[0].altText
        }
      }]
    }
  }
}

</script>

<style lang="sass" scoped>

@import '../../../styles/mixins/connectors/offers/_data-stream-offers'  

</style>

