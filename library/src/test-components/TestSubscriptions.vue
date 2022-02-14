<template lang="pug">
  .test-subscriptions
    NioBuyerStudioSubscription(
      :subscription="{}"
    )
   
</template>

<script>

import NioBuyerStudioSubscription from '../components-private/subscription/BuyerStudioSubscription'

export default {
  components: {
    NioBuyerStudioSubscription
  },
  data: () => ({
   
  }),
  methods: {
  
  }
};
</script>

<style lang="sass" scoped>
  
</style>