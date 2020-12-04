<template lang="pug">
  .test-options-grid
    NioBudgetOptions(
      :forecast="forecast"
      @forecastRequested="forecastRequested"
    )
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
    NioBudgetOptions
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
        template(v-slot:cta)
          NioButton(normal-primary @click="cta(option)") Test  
    NioOptionsGrid
      NioSourceOption(
        v-for="option of sourceOptions"
        :option="option"
        :selected="selectedSourceOption && selectedSourceOption.name === option.name"
        @selected="sourceSelectionChanged($event)"
      )

</template>

<script>

import NioButton from '../components/Button'
import NioOptionsGrid from '../components/options-grid/OptionsGrid'
import NioBudgetOption from '../components/options-grid/BudgetOption'
import NioSourceOption from '../components/options-grid/SourceOption'
import NioBudgetOptions from '../components/options-grid/BudgetOptions'

export default {
  components: {
    NioButton,
    NioSourceOption,
    NioOptionsGrid,
    NioBudgetOption,
    NioBudgetOptions
  },
  data: () => ({
    forecast: {
      label: "Get up to",
      value: "100,000",
      annotation: "delierable IDs"
    },
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
    sourceOptions: [
      {
        name: 'upload',
        title: 'Upload a File',
        description: 'Select a .CSV or .TXT file with hashed or raw emails.',
        iconName: 'display-new'
      },
      {
        name: 'existing',
        title: 'pick an existing list',
        description: 'Choose a list of users to onboard.',
        iconName: 'display-new'
      },
      {
        name: 'new',
        title: 'setup a new source',
        description: 'Log in to your source or platform to import data.',
        iconName: 'display-new',
        status: 'coming'
      },
    ],  
    selectedOption: null,
    selectedSourceOption: null
  }),
  methods: {
    selectionChanged(val) {
      this.selectedOption = val
      console.log(val)
    },
    sourceSelectionChanged(val) {
      this.selectedSourceOption = val
      console.log(val)
    },
    cta(option) {
      console.log(`cta - option: ${option}`)
    },
    forecastRequested(val) {
      console.log(val)
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