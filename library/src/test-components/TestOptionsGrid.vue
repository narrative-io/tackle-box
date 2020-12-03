<template lang="pug">
  .test-options-grid
    NioBudgetOptions(
      :options="budgetOptions"
    )
      template(slot="annotation")
        .test test
    
</template>

<script>

import NioBudgetOptions from '../components/options-grid/BudgetOptions'

export default {
  components: {
    NioBudgetOptions
  },
  data: () => ({
    budgetOptions: [
      {
        name: "small",
        amount: "$2,500",
        forecast: '10,000'
      },
      {
        name: "medium",
        amount: "$5,000",
        forecast: '200,000'
      },
      {
        name: "large",
        amount: "$10,000",
        forecast: '800,000'
      }
    ]
  })
};
</script>

<style lang="sass" scoped>
.test-options-grid 
</style>