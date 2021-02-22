<template lang="pug">
  .nio-filter-properties.number
    NioFilterProperty(
      :description="description"
      :options="options"
      v-bind:value.sync="filter.value"
    )
      template(v-slot:custom-option)
        NioSlider(
          :min="filter.customOption.config.min"
          :max="filter.customOption.config.max"
          v-model="filter.customOption.value.amount"
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
          value: 'all'
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
  components: { NioFilterProperty, NioSlider }
}
</script>

<style lang="sass" scoped>
  @import '@/styles/mixins/filter/_filter-body'  
</style>