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
    template(v-else-if="filter.type === 'stringMany'")
      NioFilterPropertiesStringMany(
        :filter="filter"
      )
    template(v-else-if="filter.type === 'stringLimited'")
      NioFilterPropertiesStringMLimited(
        :filter="filter"
      )
    template(v-else-if="filter.type === 'frequency'")
      NioFilterPropertiesFrequency(
        :filter="filter"
      )      
    template(v-else)
</template>

<script>

import NioFilterProperty from './FilterProperty'
import NioFilterPropertiesNumber from './default-types/Number'
import NioFilterPropertiesEventTimestamp from './default-types/EventTimestamp'
import NioFilterPropertiesStringMany from './default-types/StringMany'
import NioFilterPropertiesStringMLimited from './default-types/StringLimited'
import NioFilterPropertiesFrequency from './default-types/Frequency'

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
    NioFilterPropertiesEventTimestamp ,
    NioFilterPropertiesStringMany,
    NioFilterPropertiesStringMLimited,
    NioFilterPropertiesFrequency
  }
}
</script>

<style lang="sass" scoped>
  @import '@/styles/mixins/filter/_filter-body'  
</style>