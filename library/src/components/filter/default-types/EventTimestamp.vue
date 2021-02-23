<template lang="pug">
  .nio-filter-properties.event-timestamp
    NioFilterProperty(
      :title="dateRange.title"
      :description="dateRange.description"
      :options="defaultOptions.dateRange"
      v-bind:value.sync="filter.value.dateRange"
    )
      template(v-slot:custom-option)
        .timestamp-custom
          .nio-p.text-primary-dark Include timestamps between
          NioDateField(
            v-model="filter.customOption.dateRange.value[0]"
            :min="startMinDate"
            :max="startMaxDate"
          )
          .nio-p.text-primary-dark to
          NioDateField(
            v-model="filter.customOption.dateRange.value[1]"
            :min="stopMinDate"
            :max="stopMaxDate"
          )
        .validation-error.nio-p-small.text-error(v-if="!valid") Start date must be after stop date
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
import NioDateField from '../../DateField'

export default {
  name: 'nio-filter-properties-event-timestamp',
  props: {
    "filter": { type: Object, required: true }
  },
  data: () => ({
    valid: true,
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
    },
    startMinDate() {
      return this.filter.customOption.dateRange.config ? this.filter.customOption.dateRange.config.startMin : undefined 
    },
    startMaxDate() {
      return this.filter.customOption.dateRange.config ? this.filter.customOption.dateRange.config.startMax : undefined 
    },
    stopMinDate() {
      return this.filter.customOption.dateRange.config ? this.filter.customOption.dateRange.config.stopMin : undefined 
    },
    stopMaxDate() {
      return this.filter.customOption.dateRange.config ? this.filter.customOption.dateRange.config.stopMax : undefined 
    }
  },
  methods: {
    validate() {
      if (this.filter.value.dateRange === 'custom') {
        if (Date.parse(this.filter.customOption.dateRange.value[0]) >= Date.parse(this.filter.customOption.dateRange.value[1])) {
          this.setValid(false)
        } else {
          this.setValid(true)
        }
      } else {
        this.setValid(true)
      }
    },
    setValid(val) {
      if (val) {
        this.valid = true
        this.filter.valid = true
      } else {
        this.valid = false
        this.filter.valid = false
      }
    },
    updateValue() {
      this.$emit('valueChanged', [
        this.defaultOptions.dateRange.find(option => option.value === this.filter.value.dateRange).label,
        this.defaultOptions.rollingLookback.find(option => option.value === this.filter.value.rollingLookback).label
      ])
      this.validate()
    }
  },
  watch: {
    filter: {
      deep: true,
      handler() {
        this.updateValue()
      }
    }  
  },
  mounted() {
    this.updateValue()
  },
  components: { NioFilterProperty, NioDateField }
}
</script>

<style lang="sass" scoped>
</style>