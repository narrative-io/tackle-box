<template lang="pug">
  .nio-subscription-destinations
    .loading(v-if="!destinations")
      v-progress-circular.progress(size="24" indeterminate color="#1438F5")
    template(v-else)
      .destination(
        v-for="destination of destinations"
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
  props: {
    subscriptionId: { type: String, required: true },
    openApiToken: { type: String, required: true },
    openApiBaseUrl: { type: String, required: true }
  },
  data() {
    return {
      loading: true,
      openPanels: [],
      destinations: null
    }
  },
  mounted() {
    this.getDestinations()
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
        this.destinations = destinations
      })
    }
  },
  components: { NioImageTile }
}
</script>

<style lang="sass" scoped>
@import '../../../../styles/mixins/connectors/destination/subscription-destinations/_subscription-destinations'
</style>