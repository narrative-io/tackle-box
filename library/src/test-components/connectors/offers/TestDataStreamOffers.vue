<template lang="pug">
  .test-data-stream-offers
    NioDataStreamOffers(
      v-if="TTD3P"
      :destinations="TTD3P"
      @offersChanged="offersChanged($event)"
    )
</template>

<script>

import NioDataStreamOffers from '../../../components/connectors/offers/DataStreamOffers'
import TTD3P from './mock-destinations/TTD-3P'

export default {
  components: {
    NioDataStreamOffers
  },
  data: () => ({
    TTD3P: TTD3P
  }),
  mounted() {
    console.log(TTD3P)
  },
  methods: {
    offersChanged(val) {
      console.log(val)
    }
  }
};
</script>

<style lang="sass" scoped>
</style>