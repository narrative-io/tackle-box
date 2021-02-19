<template lang="pug">
  .nio-filter-properties.number
    NioFilterProperty(
      :description="description"
      :options="options"
      :config="filter.config"
      v-bind:value.sync="filter.value"
    )
      template(v-slot:custom-option="config")
        NioSlider(
          :min="config.min"
          :max="config.max"
          :model="selection"
        ) {{ selection }}
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
    description: 'Select the data to include',
    selection: 15
  }),	
  computed: {
    options() {
      return [
        {
          label: `All ${this.filter.name}s`,
          value: {
            name:'all'
          }
        },
        {
          label: "Include if present",
          value: {
            name: 'ifPresent'
          }, 
        },
        {
          label: 'Custom',
          value: {
            name: 'custom',
            details: null
          }
        }
      ]
    }
  },
  components: { NioFilterProperty, NioSlider },
}
</script>

<style lang="sass" scoped>
  @import '@/styles/mixins/filter/_filter-body'  
</style>