<template lang="pug">
  .nio-filter-properties.number
    NioFilterProperty(
      :description="description"
      :options="filter.options ? filter.options : defaultOptions"
      :customOptionLoading="customOptionLoading"
      v-bind:value.sync="filter.value"
    )
      template(v-slot:custom-option)
        .number-custom
          .nio-p.text-primary-dark(v-if="filter.customOption.config.text") {{ filter.customOption.config.text }}
          .unconstrained-controls(
            v-if="filter.customOption.config.unconstrained"
          )
            .heading.nio-h5.text-primary-darker Set which values you want to include.
            .description.nio-p.text-primary-dark Enter the minimum and/or maximum values. Leave blank for no contraint to minimum or maximum value.
            .controls
              .inputs
                NioTextField.min-field(
                  type="number"
                  label="Minimum value"
                  v-model.number="filter.customOption.value[0]"
                  :value="filter.customOption.value[0]"
                )
                NioTextField.max-field(
                  type="number"
                  label="Maximum value"
                  v-model.number="filter.customOption.value[1]"
                  :value="filter.customOption.value[1]"
                )
              .result.nio-p.text-primary-dark.nio-bold
                span(v-if="filter.customOption.value[0] && filter.customOption.value[1]") Include values between {{ filter.customOption.value[0] }} and {{ filter.customOption.value[1] }} (inclusive)
                span(v-if="!filter.customOption.value[0] && filter.customOption.value[1]") Include values less than or equal to {{ filter.customOption.value[1] }}
                span(v-if="filter.customOption.value[0] && !filter.customOption.value[1]") Include values greater than or equal to {{ filter.customOption.value[0] }}
                span(v-if="!filter.customOption.value[0] && !filter.customOption.value[1]") Include all values
            .validation-error.nio-p-small.text-error(v-if="minNotLossThanMax") Max value must be greater than min value   
          NioSlider(
            v-else
            :currency="filter.customOption.config.currency"
            :prepend="filter.customOption.config.currency && !filter.customOption.config.range"
            :range="filter.customOption.config.range"
            :step="filter.customOption.config.stepSize"
            :min="filter.customOption.config.min"
            :max="filter.customOption.config.max"
            v-model="filter.customOption.value"
          )
          .nio-p.text-primary-dark.units(v-if="filter.customOption.config.units") {{ filter.customOption.config.units }}
</template>

<script>

import NioFilterProperty from '../FilterProperty'
import NioSlider from '../../Slider'
import NioTextField from '../../TextField'

export default {
  name: 'nio-filter-properties-number',
  props: {
    "filter": { type: Object, required: true },
    "customOptionLoading": { type: Boolean, required: false, default: false }
  },
  data: () => ({
    description: 'Select the data to include',
    valid: true,
    minNotLossThanMax: false
  }),	
  computed: {
    defaultOptions() {
      if (!this.filter) {
        return []
      }
      return [
        {
          label: 'Include all values',
          value: 'default',
        },
        {
          label: "Include if present",
          value: 'ifPresent',
        },
        {
          label: 'Custom',
          value: 'custom',
        }
      ]
    }
  },
  mounted() {
    this.updateValue()
  },
  methods: {
    updateValue() {
      const options = this.filter.options ? this.filter.options : this.defaultOptions
      this.$emit('valueChanged', [options.find(option => option.value === this.filter.value).label])
      this.validate()
    },
    validate() {
      if (this.filter.customOption.config.unconstrained && this.filter.value === 'custom') {
        if (this.filter.customOption.value[0] && this.filter.customOption.value[1]) {
          if (this.filter.customOption.value[0] >= this.filter.customOption.value[1]) {
            this.minNotLossThanMax = true
            this.setValid(false)
          } else {
            this.minNotLossThanMax = false
            this.setValid(true)
          }
        } else {
          this.minNotLossThanMax = false
          if (this.filter.customOption.value[0] || this.filter.customOption.value[1]) {
            this.setValid(true)
          } else {
            this.setValid(false)
          }
        }
      } else {
        this.setValid(true)
        this.minNotLossThanMax = false
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
  components: { NioFilterProperty, NioSlider, NioTextField }
}
</script>

<style lang="sass" scoped>
</style>