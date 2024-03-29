<template lang="pug">
  .nio-filter-properties.event-timestamp
    NioFilterProperty(
      v-bind:value.sync="filter.value.dateRange"
      :title="filter.text.dateRange.title ? filter.text.dateRange.title : '' "
      :description="filter.text.dateRange.description ? filter.text.dateRange.description : ''"
      :options="defaultOptions.dateRange"
      :custom-option-loading="customOptionLoading"
      :join-option="filter.joinOption"
      :summary="summary"
    )
      template(v-slot:custom-option)
        .date-range-custom
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
        .validation-error.nio-p-small.text-error(v-if="!valid") Start date must be later than stop date
    NioFilterProperty(
      v-bind:value.sync="filter.value.rollingLookback"
      :title="filter.text.rollingLookback.title ? filter.text.rollingLookback.title : ''"
      :description="filter.text.rollingLookback.description ? filter.text.rollingLookback.description : ''"
      :options="defaultOptions.rollingLookback"
    )
      template(v-slot:custom-option)
        .rolling-lookback-custom
          .nio-p.text-primary-dark Include timestamps from 
          .selection
            NioTextField(
              v-model="filter.customOption.rollingLookback.value[0]"
              :value="filter.customOption.rollingLookback.value[0]"
              :min="1"
              type="number"
              solo
            )
            NioSelect(
              v-if="filter.customOption.rollingLookback.config.periodOptions.length > 0"
              v-model="filter.customOption.rollingLookback.value[1]"
              :items="filter.customOption.rollingLookback.config.periodOptions"
              :value="filter.customOption.rollingLookback.value[1]"
              item-text="label"
              item-value="value" 
            )
          .nio-p.text-primary-dark from the current day within a date range.
</template>

<script>

import NioFilterProperty from '../FilterProperty'
import NioDateField from '../../DateField'
import NioTextField from '../../TextField'
import NioSelect from '../../Select'

export default {
  name: 'nio-filter-properties-event-timestamp',
  components: { NioFilterProperty, NioDateField, NioTextField, NioSelect },
  props: {
    "filter": { type: Object, required: true },
    "customOptionLoading": { type: Boolean, required: false, default: false },
    "summary": { type: Boolean, required: false, default: false }
  },
  data: () => ({
    valid: true
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
  }
}
</script>

<style lang="sass" scoped>
</style>