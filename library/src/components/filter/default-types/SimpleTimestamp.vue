<template lang="pug">
  .nio-filter-properties.simple-timestamp
    NioFilterProperty(
      v-bind:value.sync="filter.value"
      :description="description"
      :options="filter.options ? filter.options : defaultOptions"
      :custom-option-loading="customOptionLoading"
      :join-option="filter.joinOption"
      :summary="summary"
    )
      template(v-slot:custom-option)
        .simple-timestamp-custom
          .instructions.nio-p.text-primary-dark(v-if="!summary") Select the data to include
          .timestamps
            .start(
              :class="{'disabled': !filter.customOption.value.start.enabled}"
            )
              .controls
                NioCheckbox(
                  v-model="filter.customOption.value.start.enabled"
                  :label="summary ? 'Start date' : 'Set a start date'"
                ) 
              NioDateField(
                v-if="!summary || filter.customOption.value.start.enabled"
                v-model="filter.customOption.value.start.timestamp"
                :min="startMinDate"
                :max="startMaxDate"
                :label="summary ? 'Selected date' : 'Select date'"
              )
            .end(
              :class="{'disabled': !filter.customOption.value.end.enabled}"
            )
              .controls
                NioCheckbox(
                  v-model="filter.customOption.value.end.enabled"
                  :label="summary ? 'End date' : 'Set an end date'"
                )
              NioDateField(
                v-if="!summary || filter.customOption.value.end.enabled"
                v-model="filter.customOption.value.end.timestamp"
                :min="startMinDate"
                :max="startMaxDate"
                :label="summary ? 'Selected date' : 'Select date'"
              )
          .recency
            NioCheckbox.inclusive(
              v-model="filter.customOption.value.recency.enabled"
              :label="summary ? 'Lookback window' : 'Add a rolling lookback window'"
            )
            .rolling-lookback-custom(v-if="filter.customOption.value.recency.enabled")
              .nio-p.text-primary-dark Include timestamps from 
              .selection
                NioTextField(
                  v-model="filter.customOption.value.recency.value"
                  :min="1"
                  type="number"
                  solo
                  @input="parseLookbackValue($event)"
                )
                NioSelect(
                  v-model="filter.customOption.value.recency.period"
                  :items="filter.customOption.config.periodOptions"
                  item-text="label"
                  item-value="value" 
                )
              .nio-p.text-primary-dark from the current day within the date range.
          .result.nio-p.text-primary-dark
            span(
              v-if="!filter.customOption.value.start.enabled && !filter.customOption.value.end.enabled"
            ) Include all timestamps
            span(
              v-if="filter.customOption.value.start.enabled && !filter.customOption.value.end.enabled"
            ) Include timestamps on or after {{ filter.customOption.value.start.timestamp }}
            span(
              v-if="!filter.customOption.value.start.enabled && filter.customOption.value.end.enabled"
            ) Include timestamps on or before {{ filter.customOption.value.end.timestamp }}
            span(
              v-if="filter.customOption.value.start.enabled && filter.customOption.value.end.enabled"
            ) Include timestamps from {{ filter.customOption.value.start.timestamp }} to {{ filter.customOption.value.end.timestamp }} (exclusive)
          .validation-error.nio-p-small.text-error(v-if="!valid && dateRangeError") Start date must be later than stop date
          .validation-error.nio-p-small.text-error(v-else-if="!valid && rollingLookbackError") Rolling lookback value must be greater than 0
</template>

<script>

import NioFilterProperty from '../FilterProperty'
import NioDateField from '../../DateField'
import NioCheckbox from '../../Checkbox'
import NioTextField from '../../TextField'
import NioSelect from '../../Select'

export default {
  name: 'nio-filter-properties-simple-timestamp',
  components: { NioFilterProperty, NioDateField, NioCheckbox, NioTextField, NioSelect },
  props: {
    "filter": { type: Object, required: true },
    "customOptionLoading": { type: Boolean, required: false, default: false },
    "summary": { type: Boolean, required: false, default: false }
  },
  data: () => ({
    valid: true,
    description: 'Select the data to include',
    dateRangeError: false,
    rollingLookbackError: false
  }),	
  computed: {
    defaultOptions() {
      if (!this.filter) {
        return []
      }
      return [
        {
          label: 'Optional Attribute',
          value: 'default',
        },
        {
          label: "Required Attribute",
          value: 'ifPresent',
        },
        {
          label: 'Custom',
          value: 'custom',
        }
      ] 
    },
    startMinDate() {
      return this.filter.customOption.config ? this.filter.customOption.config.startMin : undefined 
    },
    startMaxDate() {
      return this.filter.customOption.config ? this.filter.customOption.config.startMax : undefined 
    },
    stopMinDate() {
      return this.filter.customOption.config ? this.filter.customOption.config.stopMin : undefined 
    },
    stopMaxDate() {
      return this.filter.customOption.config ? this.filter.customOption.config.stopMax : undefined 
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
      if (this.filter.value === 'custom') {
        if (Date.parse(this.filter.customOption.value.start.timestamp) > Date.parse(this.filter.customOption.value.end.timestamp)) {
          this.dateRangeError = true
        } else {
          this.dateRangeError = false
        }
        if (this.filter.customOption.value.recency.enabled && this.filter.customOption.value.recency.value < 1) {
          this.rollingLookbackError = true
        } else {
          this.rollingLookbackError = false
        }
        if (this.dateRangeError || this.rollingLookbackError) {
          this.setValid(false)
        } else {
          this.setValid(true)
        }
      } else {
        this.setValid(true)
        this.dateRangeError = false
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
      const options = this.filter.options ? this.filter.options : this.defaultOptions
      this.$emit('valueChanged', [options.find(option => option.value === this.filter.value).label])
      this.validate()
    },
    parseLookbackValue(val) {
      this.$nextTick(() => {
        this.filter.customOption.value.recency.value = parseInt(this.filter.customOption.value.recency.value)
      })
    }
  }
}
</script>

<style lang="sass" scoped>
</style>