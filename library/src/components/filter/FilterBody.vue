<template lang="pug">
  .nio-filter-body
    template(v-if="filter.type === 'number'")
      NioFilterPropertiesNumber(
        @valueChanged="valueChanged($event)"
        :filter="filter"
        :customOptionLoading="customOptionLoading"
      )
    template(v-else-if="filter.type === 'eventTimestamp'")
      NioFilterPropertiesEventTimestamp(
        @valueChanged="valueChanged($event)"
        :filter="filter"
        :customOptionLoading="customOptionLoading"
      )
    template(v-else-if="filter.type === 'simpleTimestamp'")
      NioFilterPropertiesSimpleTimestamp(
        @valueChanged="valueChanged($event)"
        :filter="filter"
        :customOptionLoading="customOptionLoading"
      )
    template(v-else-if="filter.type === 'stringMany'")
      NioFilterPropertiesStringMany(
        @valueChanged="valueChanged($event)"
        :filter="filter"
        :customOptionLoading="customOptionLoading"
      ) 
    template(v-else-if="filter.type === 'stringLimited'")
      NioFilterPropertiesStringLimited(
        @valueChanged="valueChanged($event)"
        :filter="filter"
        :customOptionLoading="customOptionLoading"
      )
    template(v-else-if="filter.type === 'mapping'")
      NioFilterPropertiesMapping(
        @valueChanged="valueChanged($event)"
        :filter="filter"
        :customOptionLoading="customOptionLoading"
      )  
    template(v-else-if="filter.type === 'frequency'")
      NioFilterPropertiesFrequency(
        @valueChanged="valueChanged($event)"
        :filter="filter"
        :customOptionLoading="customOptionLoading"
      )      
    template(v-else-if="filter.type === 'boolean'")
      NioFilterPropertiesBoolean(
        @valueChanged="valueChanged($event)"
        :filter="filter"
        :customOptionLoading="customOptionLoading"
      )      
    template(v-else)
      slot(
        name="filter-properties-custom"
        :filter="filter" 
        :customOptionLoading="customOptionLoading"
      )
</template>

<script>

import NioFilterProperty from './FilterProperty'
import NioFilterPropertiesNumber from './default-types/Number'
import NioFilterPropertiesEventTimestamp from './default-types/EventTimestamp'
import NioFilterPropertiesSimpleTimestamp from './default-types/SimpleTimestamp'
import NioFilterPropertiesStringMany from './default-types/StringMany'
import NioFilterPropertiesStringLimited from './default-types/StringLimited'
import NioFilterPropertiesMapping from './default-types/Mapping'
import NioFilterPropertiesFrequency from './default-types/Frequency'
import NioFilterPropertiesBoolean from './default-types/Boolean'

export default {
  name: 'nio-filter-body',
  props: {
    "filter": { type: Object, required: true },
    "customOptionLoading": { type: Boolean, required: false, default: false }
  },
  data: () => ({
  }),	
  computed: {
		defaultOptions() {
      if (!this.filter) {
        return []
			}
			const options = [
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
			if (this.filter.type !== 'object') {
				options.push({
          label: 'Custom',
          value: 'custom',
        })
			}
			return options
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
    NioFilterPropertiesEventTimestamp,
    NioFilterPropertiesSimpleTimestamp,
    NioFilterPropertiesStringMany,
    NioFilterPropertiesStringLimited,
    NioFilterPropertiesMapping,
    NioFilterPropertiesFrequency,
    NioFilterPropertiesBoolean
  }
}
</script>

<style lang="sass" scoped>
  @import '@/styles/mixins/filter/_filter-body'  
</style>