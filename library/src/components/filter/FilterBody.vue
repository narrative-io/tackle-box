<template lang="pug">
  .nio-filter-body(:class="{'summary': summary}")
    template(v-if="filter.type === 'custom'")
      NioFilterPropertiesCustom(
        :filter="filter"
        :custom-option-looading="customOptionLoading"
        @valueChanged="valueChanged($event)"
      )
        template(
          v-for="(index, name) in $scopedSlots" 
          v-slot:[name]="data"
        )
          slot(
            v-bind="data"
            :name="name" 
          )   
    template(v-if="filter.type === 'object'")
      NioFilterPropertiesObject(
        :summary="summary"
        :filter="filter"
        :custom-option-looading="customOptionLoading"
        @valueChanged="valueChanged($event)"
      )
    template(v-if="filter.type === 'array'")
      NioFilterPropertiesArray(
        :summary="summary"
        :filter="filter"
        :custom-option-looading="customOptionLoading"
        @valueChanged="valueChanged($event)"
      )
    template(v-if="filter.type === 'number'")
      NioFilterPropertiesNumber(
        :summary="summary"
        :filter="filter"
        :custom-option-looading="customOptionLoading"
        @valueChanged="valueChanged($event)"
      )
    template(v-else-if="filter.type === 'eventTimestamp'")
      NioFilterPropertiesEventTimestamp(
        :summary="summary"
        :filter="filter"
        :custom-option-looading="customOptionLoading"
        @valueChanged="valueChanged($event)"
      )
    template(v-else-if="filter.type === 'simpleTimestamp'")
      NioFilterPropertiesSimpleTimestamp(
        :summary="summary"
        :filter="filter"
        :custom-option-looading="customOptionLoading"
        @valueChanged="valueChanged($event)"
      )
    template(v-else-if="filter.type === 'stringMany'")
      NioFilterPropertiesStringMany(
        :summary="summary"
        :filter="filter"
        :custom-option-looading="customOptionLoading"
        :panel-idempotency="panelIdempotency"
        @valueChanged="valueChanged($event)"
      ) 
    template(v-else-if="filter.type === 'stringLimited'")
      NioFilterPropertiesStringLimited(
        :summary="summary"
        :filter="filter"
        :custom-option-looading="customOptionLoading"
        :panel-idempotency="panelIdempotency"
        @valueChanged="valueChanged($event)"
      )
    template(v-else-if="filter.type === 'mapping'")
      NioFilterPropertiesMapping(
        :summary="summary"
        :filter="filter"
        :custom-option-looading="customOptionLoading"
        @valueChanged="valueChanged($event)"
      )  
    template(v-else-if="filter.type === 'frequency'")
      NioFilterPropertiesFrequency(
        :summary="summary"
        :filter="filter"
        :custom-option-looading="customOptionLoading"
        @valueChanged="valueChanged($event)"
      )      
    template(v-else-if="filter.type === 'boolean'")
      NioFilterPropertiesBoolean(
        :summary="summary"
        :filter="filter"
        :custom-option-looading="customOptionLoading"
        @valueChanged="valueChanged($event)"
      )      
    template(v-else-if="filter.type === 'binary'")
      NioFilterPropertiesBinary(
        :summary="summary"
        :filter="filter"
        :custom-option-looading="customOptionLoading"
        @valueChanged="valueChanged($event)"
      )     
    template(v-else-if="filter.type === 'spark'")
      NioFilterPropertiesSpark(
        :summary="summary"
        :filter="filter"
        :custom-option-looading="customOptionLoading"
        @valueChanged="valueChanged($event)"
      )      
    template(v-else)
      slot(
        :filter="filter" 
        :custom-option-loading="customOptionLoading"
        name="filter-properties-custom"
      )
</template>

<script>

import NioFilterProperty from './FilterProperty'
import NioFilterPropertiesCustom from './default-types/Custom'
import NioFilterPropertiesObject from './default-types/Object'
import NioFilterPropertiesArray from './default-types/Array'
import NioFilterPropertiesNumber from './default-types/Number'
import NioFilterPropertiesEventTimestamp from './default-types/EventTimestamp'
import NioFilterPropertiesSimpleTimestamp from './default-types/SimpleTimestamp'
import NioFilterPropertiesStringMany from './default-types/StringMany'
import NioFilterPropertiesStringLimited from './default-types/StringLimited'
import NioFilterPropertiesMapping from './default-types/Mapping'
import NioFilterPropertiesFrequency from './default-types/Frequency'
import NioFilterPropertiesBoolean from './default-types/Boolean'
import NioFilterPropertiesBinary from './default-types/Binary'
import NioFilterPropertiesSpark from './default-types/Spark.vue'

export default {
  name: 'nio-filter-body',
  components: { 
    NioFilterProperty, 
    NioFilterPropertiesCustom,
    NioFilterPropertiesObject,
    NioFilterPropertiesArray,
    NioFilterPropertiesNumber,
    NioFilterPropertiesEventTimestamp,
    NioFilterPropertiesSimpleTimestamp,
    NioFilterPropertiesStringMany,
    NioFilterPropertiesStringLimited,
    NioFilterPropertiesMapping,
    NioFilterPropertiesFrequency,
    NioFilterPropertiesBoolean,
    NioFilterPropertiesBinary,
    NioFilterPropertiesSpark
  },
  props: {
    "filter": { type: Object, required: true },
    "customOptionLoading": { type: Boolean, required: false, default: false },
    "summary": { type: Boolean, required: false, default: false },
    "panelIdempotency": { type: String, required: false, default: null }
  },
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
  }
}
</script>

<style lang="sass" scoped>
  @import '@/styles/mixins/filter/_filter-body'  
</style>