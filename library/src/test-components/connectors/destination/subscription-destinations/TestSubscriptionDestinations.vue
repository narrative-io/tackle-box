<template lang="pug">
  .test-select-destination
    NioSubscriptionDestinations(
      :destinations="destinations"
      @validChanged="validChanged($event)"
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