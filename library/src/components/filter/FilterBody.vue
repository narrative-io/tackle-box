<template lang="pug">
  .nio-filter-body
    template(v-if="filter.type === 'number'")
      NioFilterPropertiesNumber(
        @valueChanged="valueChanged($event)"
        :filter="filter"
      )
    template(v-else-if="filter.type === 'eventTimestamp'")
      NioFilterPropertiesEventTimestamp(
        @valueChanged="valueChanged($event)"
        :filter="filter"
      )
    template(v-else-if="filter.type === 'stringMany'")
      NioFilterPropertiesStringMany(
        @valueChanged="valueChanged($event)"
        :filter="filter"
      )
    template(v-else-if="filter.type === 'stringLimited'")
      NioFilterPropertiesStringMLimited(
        @valueChanged="valueChanged($event)"
        :filter="filter"
      )
    template(v-else-if="filter.type === 'frequency'")
      NioFilterPropertiesFrequency(
        @valueChanged="valueChanged($event)"
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
  methods: {
    valueChanged(val) {
      this.$emit('valueChanged', val)
    }
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