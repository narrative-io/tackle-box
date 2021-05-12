<template lang="pug">
  .nio-filter-properties.number
    NioFilterProperty(
      :description="description"
      :options="filter.options ? filter.options : defaultOptions"
      v-bind:value.sync="filter.value"
    )
      template(v-slot:custom-option)
        .number-custom
          .nio-p.text-primary-dark(v-if="filter.customOption.config.text") {{ filter.customOption.config.text }}
          .unconstrained-controls(
            v-if="filter.customOption.config.unconstrained"
          )
            .nio-p.text-primary-dark.instructions Enter the minimum and/or maximum value:
            .controls
              .inputs
                NioTextField.min-field(
                  type="number"
                  label="Minimum value"
                  v-model="filter.customOption.value.min"
                  :value="filter.customOption.value.min"
                )
                NioTextField.max-field(
                  type="number"
                  label="Maximum value"
                  v-model="filter.customOption.value.max"
                  :value="filter.customOption.value.max"
                )
              .result.nio-p.text-primary-dark.nio-bold
                span(v-if="filter.customOption.value.min && filter.customOption.value.max") Include values between {{ filter.customOption.value.min }} and {{ filter.customOption.value.max }} (inclusive)
                span(v-if="!filter.customOption.value.min && filter.customOption.value.max") Include values less than or equal to {{ filter.customOption.value.max }}
                span(v-if="filter.customOption.value.min && !filter.customOption.value.max") Include values greater than or equal to {{ filter.customOption.value.min }}
                span(v-if="!filter.customOption.value.min && !filter.customOption.value.max") Include all values
          NioSlider(
            v-else
            :currency="filter.customOption.config.currency"
            :prepend="filter.customOption.config.currency && !filter.customOption.config.range"
            :range="filter.customOption.config.range"
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
    "filter": { type: Object, required: true }
  },
  data: () => ({
    description: 'Select the data to include'
  }),	
  computed: {
    defaultOptions() {
      if (!this.filter) {
        return []
      }
      return [
        {
          label: `All ${this.filter.name}s`,
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