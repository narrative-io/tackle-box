<template lang="pug">
  .test-connectors
    h2 Select Destination
    TestSelectDestination
    h2 Destination Connector Settings
    TestDestinationConnectorSettings
</template>

<script>

import TestSelectDestination from './connectors/destination/select-destination/TestSelectDestination'
import TestDestinationConnectorSettings from './connectors/destination/connector-settings/TestDestinationConnectorSettings'

export default {
  components: {
    TestSelectDestination,
    TestDestinationConnectorSettings
  },
  data: () => ({
 
  })
};
</script>

<style lang="sass" scoped>
</style>