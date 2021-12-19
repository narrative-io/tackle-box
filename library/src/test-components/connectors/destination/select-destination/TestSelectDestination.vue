<template lang="pug">
  .test-select-destination
    NioSelectDestination(
      :destinations="destinations"
      @validChanged="validChanged($event)"
    )
</template>

<script>

import NioSelectDestination from '../../../../components/connectors/destination/select-destination/SelectDestination'
import mockDestinations from './mockDestinations'

export default {
  components: {
    NioSelectDestination
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