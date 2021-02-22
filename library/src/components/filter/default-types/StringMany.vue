<template lang="pug">
  .nio-filter-properties.string-many
    NioFilterProperty(
      :description="description"
      :options="options"
      v-bind:value.sync="filter.value"
    )
      template(v-slot:custom-option)
        
</template>

<script>

import NioFilterProperty from '../FilterProperty'

export default {
  name: 'nio-filter-properties-string-many',
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
  components: { NioFilterProperty }
}
</script>

<style lang="sass" scoped>
</style>