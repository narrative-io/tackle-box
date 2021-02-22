<template lang="pug">
  .nio-filter-properties.event-timestamp
    NioFilterProperty(
      :title="dateRange.title"
      :description="dateRange.description"
      :options="options.dateRange"
      v-bind:value.sync="filter.value.dateRange"
    )
      template(v-slot:custom-option)
    NioFilterProperty(
      :title="dateRange.title"
      :description="dateRange.description"
      :options="options.rollingLookback"
      v-bind:value.sync="filter.value.rollingLookback"
    )
      template(v-slot:custom-option)  
       
</template>

<script>

import NioFilterProperty from '../FilterProperty'

export default {
  name: 'nio-filter-properties-event-timestamp',
  props: {
    "filter": { type: Object, required: true },
  },
  data: () => ({
    dateRange: {
      title: "Date Range",
      description: "Pick a start and end date of event timestamps to include."
    },
    rollingLookback: {
      title: "Rolling Lookback",
      description: "From your start date, define how far back in time you'd like to include."
    }
    
  }),	
  computed: {
    options() {
      if (!this.filter) {
        return []
      }
      return {
        dateRange: [
          {
            label: 'Start today until I stop',
            value: 'default'
          },
          {
            label: 'Custom',
            value: 'custom'
          }
        ],
        rollingLookback: [
          {
            label: 'Lookback 90 days',
            value: 'default'
          },
          {
            label: 'Custom',
            value: 'custom'
          }
        ]
      }  
    }
  },
  components: { NioFilterProperty }
}
</script>

<style lang="sass" scoped>
</style>