<template lang="pug">
  .nio-filter-properties.frequency
    NioFilterProperty(
      :description="description"
      :options="filter.options ? filter.options : defaultOptions"
      v-bind:value.sync="filter.value"
    )
      template(v-slot:custom-option)
        .frequency-custom
          .frequency-section
            .nio-p.text-primary-dark Buy once every 
            .selection
              NioTextField(
                v-model="filter.customOption.frequency.value[0]"
                :value="filter.customOption.frequency.value[0]"
                :min="1"
                type="number"
                solo
              )
              NioSelect(
                v-model="filter.customOption.frequency.value[1]"
                :items="filter.customOption.frequency.config.periodOptions"
                :value="filter.customOption.frequency.value[1]"
                item-text="label"
                item-value="value" 
              )
</template>

<script>

import NioFilterProperty from '../FilterProperty'
import NioSelect from '../../Select'
import NioTextField from '../../TextField'

export default {
  name: 'nio-filter-properties-frequency',
  props: {
    "filter": { type: Object, required: true },
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
          value: 'default'
        },
        {
          label: "Include if present",
          value: 'ifPresent'
        },
        {
          label: 'Custom',
          value: 'custom'
        }
      ]
    }
  },
  watch: {
    filter: {
      deep: true,
      handler() {
        const options = this.filter.options ? this.filter.options : this.defaultOptions
        this.$emit('valueChanged', [options.find(option => option.value === this.filter.value).label])
      }
    }
  },
  components: { NioFilterProperty, NioSelect, NioTextField }
}
</script>

<style lang="sass" scoped>
</style>