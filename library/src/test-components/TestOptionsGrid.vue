<template lang="pug">
  .test-options-grid
    NioOptionsGrid
      NioBudgetOption(
        v-for="option of budgetOptions"
        :name="option.name"
        :amount="option.amount"
      )
        template(v-slot:annotation)
          .test test {{ option.forecast }}
</template>

<script>

import NioOptionsGrid from '../components/options-grid/OptionsGrid'
import NioBudgetOption from '../components/options-grid/BudgetOption'

export default {
  components: {
    NioOptionsGrid,
    NioBudgetOption
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