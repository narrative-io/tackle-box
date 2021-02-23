<template lang="pug">
  .nio-filter-properties.event-timestamp
    NioFilterProperty(
      :title="dateRange.title"
      :description="dateRange.description"
      :options="defaultOptions.dateRange"
      v-bind:value.sync="filter.value.dateRange"
    )
      template(v-slot:custom-option)
    NioFilterProperty(
      :title="dateRange.title"
      :description="dateRange.description"
      :options="defaultOptions.rollingLookback"
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
    defaultOptions() {
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
  watch: {
    filter: {
      deep: true,
      handler() {
        this.$emit('valueChanged', [
          this.defaultOptions.dateRange.find(option => option.value === this.filter.value.dateRange).label,
          this.defaultOptions.rollingLookback.find(option => option.value === this.filter.value.rollingLookback).label
        ])
      }
    }  
  },
  components: { NioFilterProperty }
}
</script>

<style lang="sass" scoped>
</style>