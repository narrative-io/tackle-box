<template lang="pug">
  .test-select-destination
    NioDataStreamOffers
</template>

<script>

import NioDataStreamOffers from '../../../components/connectors/offers/DataStreamOffers'

export default {
  components: {
    NioSelectDestination
  },
  data: () => ({
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