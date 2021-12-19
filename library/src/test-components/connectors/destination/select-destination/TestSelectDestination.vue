<template lang="pug">
  .test-select-destination
    NioSelectDestination(
      :destinations="destinations"
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
  })
};
</script>

<style lang="sass" scoped>
</style>