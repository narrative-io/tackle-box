<template lang="pug">
  .nio-subscription-destinations
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

export default {
  name: 'nio-subscription-destinations',
  props: {
    destinations: { type: Array, required: true }
  },
  data() {
    return {
      loading: true,
      openPanels: []
    }
  },
  methods: {
    getSelectedProfile(destination) {
      if (destination.profiles) {
        return destination.profiles.find(profile => profile.id === destination.selectedProfile)
      } else {
        return []
      }
    }
  },
  components: { NioImageTile }
}
</script>

<style lang="sass" scoped>
@import '../../../../styles/mixins/connectors/destination/subscription-destinations/_subscription-destinations'
</style>