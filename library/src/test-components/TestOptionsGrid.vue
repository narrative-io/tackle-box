<template lang="pug">
  .test-options-grid
    NioOptionsGrid
      NioBudgetOption(
        v-for="option of budgetOptions"
        :option="option"
        :selected="selectedOption && selectedOption.name === option.name"
        @selected="selectionChanged($event)"
      )
        template(v-slot:content)
          .nio-p.text-primary-dark Get up to
          .h3.text-primary-dark {{ option.forecast }}
          .nio-p.text-primary-dark Deliverable IDs
    NioOptionsGrid
      NioBudgetOption(
        v-for="option of budgetOptions"
        :option="option"
        :selected="selectedOption && selectedOption.name === option.name"
        @selection="selectionChanged($event)"
      )
        template(v-slot:content)
          .nio-p.text-primary-dark Get up to
          .h3.text-primary-dark {{ option.forecast }}
          .nio-p.text-primary-dark Deliverable IDs
        template(v-slot:cta)
          NioButton(normal-primary @click="cta(option)") Test  
     

</template>

<script>

import NioButton from '../components/Button'
import NioOptionsGrid from '../components/options-grid/OptionsGrid'
import NioBudgetOption from '../components/options-grid/BudgetOption'

export default {
  components: {
    NioButton,
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
    ],
    selectedOption: null
  }),
  methods: {
    selectionChanged(val) {
      this.selectedOption = val
      console.log(val)
    },
    cta(option) {
      console.log(`cta - option: ${option}`)
    }
  },  
  mounted() {
    this.selectedOption = this.budgetOptions[1]
  }
};
</script>

<style lang="sass" scoped>
.test-options-grid 
  .nio-options-grid
    margin-bottom: 50px
  ::v-deep .content > * + *
    margin-top: 2px
</style>