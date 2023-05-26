<template lang="pug">
  .test-select-destination
    h2 With destinations
    NioSubscriptionDestinations(
      :destinations="destinations"
      @validChanged="validChanged($event)"
    )
    h2 With Subscription ID
    NioSubscriptionDestinations(
      subscriptionId="b76438ca-177a-48c1-972f-5fa5fb69d578"
      openApiToken="XXX"
      openApiBaseUrl="https://api.narrative.io"
    )
    h2 With Output DatasetID
    NioSubscriptionDestinations(
      :outputDatasetId="1742"
      openApiToken="XXX"
      openApiBaseUrl="https://api.narrative.io"
    )
</template>

<script>

import NioSubscriptionDestinations from '../../../../components/connectors/destination/subscription-destinations/SubscriptionDestinations'
import mockDestinations from '../select-destination/mockDestinations'

export default {
  components: {
    NioSubscriptionDestinations
  },
  data: () => ({
    destinations: mockDestinations
  }),
  methods: {
    validChanged(val) {
      console.log(val)
    }
  }
};
</script>

<style lang="sass" scoped>
</style>