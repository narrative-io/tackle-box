<template lang="pug">
  .nio-subscription-destinations
    .loading(v-if="!subscriptionDestinations")
      v-progress-circular.progress(
        size="24" 
        color="#1438F5"
        indeterminate 
      )
    template(v-else)
      .destination(
        v-for="destination of subscriptionDestinations"
      )
        NioImageTile(
          v-if="destination.name === 'Narrative Download'"
          :src="destination.icon"
          alt="Narrative Download Icon"
        ) 
        NioImageTile(
          v-else
          :src="`data:${destination.icon.imageType};base64, ${destination.icon.image}`"
          :alt="destination.icon.altText"
        )
        .destination-content
          h4.nio-h4.text-primary-darker.name {{ destination.name }}
          p.nio-p.text-primary-dark(v-if="destination.selectedProfile") <span class="nio-bold">Profile:</span> {{ getSelectedProfile(destination).name}}
</template>	  

<script>

import NioImageTile from '../../../ImageTile'
import { getSubscriptionDestinations } from '../../../../modules/app/destinations/destinationsModule'

export default {
  name: 'nio-subscription-destinations',
  components: { NioImageTile },
  props: {
    destinations: { type: Array, required: false },
    subscriptionId: { type: String, required: false },
    openApiToken: { type: String, required: false },
    openApiBaseUrl: { type: String, required: false }
  },
  data() {
    return {
      loading: true,
      openPanels: [],
      subscriptionDestinations: null
    }
  },
  mounted() {
    if (this.destinations) {
      this.subscriptionDestinations = this.destinations
    } else {
      this.getDestinations()
    }
  },
  methods: {
    getSelectedProfile(destination) {
      if (destination.profiles) {
        return destination.profiles.find(profile => profile.id === destination.selectedProfile)
      } else {
        return []
      }
    },
    getDestinations() {
      let reqHeaders = {
        headers: {
          'Authorization': `Bearer ${this.openApiToken}`
        }
      }
      getSubscriptionDestinations(this.subscriptionId, this.openApiBaseUrl, reqHeaders).then(destinations => {
        this.subscriptionDestinations = destinations
      })
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../../../../styles/mixins/connectors/destination/subscription-destinations/_subscription-destinations'
</style>