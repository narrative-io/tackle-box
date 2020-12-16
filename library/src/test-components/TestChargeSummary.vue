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
				value: "2800"
			},
			{
				name: "Narrative Fees",
				value: 0
			}
    ]
  })
};
</script>

<style lang="sass" scoped>
.test-charge-summary
  display: flex
</style>