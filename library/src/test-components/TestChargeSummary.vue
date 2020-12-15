<template lang="pug">
  .test-charge-summary
    NioChargeSummary(
      :lineItems="lineItems"
    )
</template>

<script>

import NioChargeSummary from '../components/ChargeSummary'

export default {
  components: {
    NioChargeSummary
  },
  data: () => ({
    lineItems: [
      {
        name: "Monthly Budget",
        value: 115
      },
      {
        name: "Narrative Fees",
        value: 1500
      },
      {
        name: "Applicable Taxes",
        value: 1250
      }
    ]
  })
};
</script>

<style lang="sass" scoped>
.test-charge-summary
  display: flex
</style>