<template lang="pug">
  .test-connectors
    h2 Select Destination
    TestSelectDestination
    h2 Subscription Destinations
    TestSubscriptionDestinations
    h2 Destination Connector Settings
    TestDestinationConnectorSettings
</template>

<script>

import TestSelectDestination from './connectors/destination/select-destination/TestSelectDestination'
import TestDestinationConnectorSettings from './connectors/destination/connector-settings/TestDestinationConnectorSettings'
import TestSubscriptionDestinations from './connectors/destination/subscription-destinations/TestSubscriptionDestinations'

export default {
  components: {
    TestSelectDestination,
    TestDestinationConnectorSettings,
    TestSubscriptionDestinations
  },
  data: () => ({
 
  })
};
</script>

<style lang="sass" scoped>
h2
  margin-bottom: 24px
  margin-top: 48px
</style>