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
          NioSlider(
            :currency="filter.customOption.config.currency"
            :prepend="filter.customOption.config.currency && !filter.customOption.config.range"
            :range="filter.customOption.config.range"
            :min="filter.customOption.config.min"
            :max="filter.customOption.config.max"
            v-model="filter.customOption.value"
          )
</template>

<script>

import NioFilterProperty from '../FilterProperty'
import NioSlider from '../../Slider'

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
  components: { NioFilterProperty, NioSlider }
}
</script>

<style lang="sass" scoped>
</style>