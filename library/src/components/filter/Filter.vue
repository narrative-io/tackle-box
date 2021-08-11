<template lang="pug">
  v-expansion-panel.nio-filter(
    :key="filter.name"
    v-if="!solo"
  )
    v-expansion-panel-header
      template(
        v-if="hasScopedSlot(`filter-header-custom-${filter.name}`)"
      )
        slot(
          :name="`filter-header-custom-${filter.name}`" 
          :filter="filter"
        )   	
      NioFilterHeader(
        v-else
        :title="filter.title"
        :description="filter.description"
        :value="value"
        :tooltip="filter.tooltip"
        :filter="filter"
      )
        template(v-for="(index, name) in $scopedSlots" v-slot:[name]="data")
          slot(:name="name" v-bind="data")   
    v-expansion-panel-content(eager)
      template(
        v-if="hasScopedSlot(`filter-body-custom-${filter.name}`)"
      )
        slot(
          :name="`filter-body-custom-${filter.name}`"
          :filter="filter"  
        )
      NioFilterBody(
        v-else
        :filter="filter"
        :customOptionLoading="customOptionLoading || filterObjCustomOptionLoading"
        @valueChanged="handleValueChange($event)"
      )
  .nio-filter.solo(
    v-else
  )
    template(
      v-if="hasScopedSlot(`filter-body-custom-${filter.name}`)"
    )
      slot(
        :name="`filter-body-custom-${filter.name}`"
        :filter="filter"  
      )   	
    NioFilterBody(
      v-else
      :filter="filter"
      :customOptionLoading="customOptionLoading || filterObjCustomOptionLoading"
      @valueChanged="handleValueChange($event)" 
    )
      template(v-for="(index, name) in $scopedSlots" v-slot:[name]="data")
        slot(:name="name" v-bind="data")   
</template>

<script>

import NioFilterHeader from './FilterHeader'
import NioFilterBody from './FilterBody'

export default {
  name: 'nio-filter',
  props: {
    "filter": { type: Object, required: true },
    "solo": { type: Boolean, required: false, default: false },
    "customOptionLoading": { type: Boolean, required: false, default: false },
    "filterObjCustomOptionLoading": { type: Boolean, required: false, default: false }
  },
  data: () => ({
    value: null
  }),	
  methods: {
    handleValueChange(newValue) {
      this.value = newValue
    },
    hasScopedSlot(slotName) {
      return this.$scopedSlots[slotName] !== undefined
    }
  },
  components: { NioFilterHeader, NioFilterBody }
}
</script>

<style lang="sass" scoped>
  @import '@/styles/mixins/filter/_filter'  
</style>