<template lang="pug">
  .nio-filter-body
    template(v-if="filter.type === 'number'")
      NioFilterPropertiesNumber(
        :filter="filter"
      )
    template(v-else-if="filter.type === 'eventTimestamp'")
      NioFilterPropertiesEventTimestamp(
        :filter="filter"
      )
    template(v-else)
</template>

<script>

import NioFilterProperty from './FilterProperty'
import NioFilterPropertiesNumber from './default-types/Number'
import NioFilterPropertiesEventTimestamp from './default-types/EventTimestamp'

export default {
  name: 'nio-filter-body',
  props: {
    "filter": { type: Object, required: true }
  },
  data: () => ({
  }),	
  methods: {
    
  },
  components: { 
    NioFilterProperty, 
    NioFilterPropertiesNumber,
    NioFilterPropertiesEventTimestamp 
  }
}
</script>

<style lang="sass" scoped>
  @import '@/styles/mixins/filter/_filter-body'  
</style>