<template lang="pug">
  .nio-filter-properties.number
    NioFilterProperty(
      :description="description"
      :options="options"
      v-bind:value.sync="filter.value"
    )
      template(v-slot:custom-option)
        NioSlider(
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
    "filter": { type: Object, required: true },
  },
  data: () => ({
    description: 'Select the data to include'
  }),	
  computed: {
    options() {
      if (!this.filter) {
        return []
      }
      return [
        {
          label: `All ${this.filter.name}s`,
          value: 'default',
          selected: 'Include all Ages'
        },
        {
          label: "Include if present",
          value: 'ifPresent',
          selected: 'Include if present'
        },
        {
          label: 'Custom',
          value: 'custom',
          selected: this.customSelectedLabel
        }
      ]
    }
  },
  methods: {
    customSelectedLabel(value) {
      console.log(value)
    }
  },
  watch: {
    filter: {
      deep: true,
      handler() {
        console.log("here")
        if (this.filter.value === 'custom') {
          this.$emit('valueChanged', this.filter.customOption.value)
        } else {
          this.$emit('valueChanged', this.options.find(option => option.value === this.filter.value).selected)
        }

      }
    }
  },
  components: { NioFilterProperty, NioSlider }
}
</script>

<style lang="sass" scoped>
</style>