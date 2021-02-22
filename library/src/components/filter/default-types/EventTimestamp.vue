<template lang="pug">
  .nio-filter-properties.event-timestamp
    NioFilterProperty(
      :title="title"
      :description="description"
      :options="options"
      v-bind:value.sync="filter.value"
    )
      template(v-slot:custom-option)
       
</template>

<script>

import NioFilterProperty from '../FilterProperty'

export default {
  name: 'nio-filter-properties-event-timestamp',
  props: {
    "filter": { type: Object, required: true },
  },
  data: () => ({
    title: 'Event Timestamps',
    description: 'Define the timestamps you want included in your subscription.'
  }),	
  computed: {
    options() {
      if (!this.filter) {
        return []
      }
      return [
        {
          label: 'Start today until I stop',
          value: 'default'
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