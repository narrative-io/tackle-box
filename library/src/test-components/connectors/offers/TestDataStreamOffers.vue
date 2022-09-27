<template lang="pug">
  .test-data-stream-offers
    NioDataStreamOffers(
      @offersChanged="offersChanged($event)"
    )
</template>

<script>

import NioDataStreamOffers from '../../../components/connectors/offers/DataStreamOffers'

export default {
  components: {
    NioDataStreamOffers
  },
  data: () => ({
  }),
  methods: {
    offersChanged(val) {
      console.log(val)
    }
  }
};
</script>

<style lang="sass" scoped>
</style>