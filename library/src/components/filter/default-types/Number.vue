<template lang="pug">
  .nio-filter-properties.number
    NioFilterProperty(
      :description="description"
      :options="options"
    )
    
</template>

<script>

import NioFilterProperty from '../FilterProperty'

export default {
  name: 'nio-filter-properties-number',
  props: {
    "filter": { type: Object, required: true }
  },
  data: () => ({
    description: 'Select the data to include'
  }),	
  computed: {
    options() {
      return [
        {
          value: 'all',
          label: `All ${this.filter.name}s`
        },
        {
          value: 'ifPresent',
          label: "Include if present"
        },
        {
          value: 'custom',
          label: 'Custom'
        }
      ]
    }
  },
  components: { NioFilterProperty }
}
</script>

<style lang="sass" scoped>
  @import '@/styles/mixins/filter/_filter-body'  
</style>