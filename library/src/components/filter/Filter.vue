<template lang="pug">
  v-expansion-panel.nio-filter(
    v-if="!solo"
    :key="filter.name"
    :class="{'filter-disabled': filter.disabled, 'summary': summary}"
    :disabled="summary && filter.value !== 'custom' && filter.value !== 'join'"
    @change="panelChange"
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
        :summary="summary"
      )
        template(
          v-for="(index, name) in $scopedSlots" 
          v-slot:[name]="data"
        )
          slot(
            v-bind="data"
            :name="name" 
          )   
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
        :custom-option-loading="customOptionLoading || filterObjCustomOptionLoading"
        :summary="summary"
        :panel-idempotency="panelIdempotency"
        @valueChanged="handleValueChange($event)"
      )
        template(
          v-for="(index, name) in $scopedSlots" 
          v-slot:[name]="data"
        )
          slot(
            v-bind="data"
            :name="name" 
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
      :custom-option-loading="customOptionLoading || filterObjCustomOptionLoading"
      :summary="summary"
      :panel-idempotency="panelIdempotency"
      @valueChanged="handleValueChange($event)" 
    )
      template(
        v-for="(index, name) in $scopedSlots" 
        v-slot:[name]="data"
      )
        slot(
          v-bind="data"
          :name="name" 
        )   
</template>

<script>

import NioFilterHeader from './FilterHeader'
import NioFilterBody from './FilterBody'
import { makeRandomId } from '../../modules/helpers'

export default {
  name: 'nio-filter',
  components: { NioFilterHeader, NioFilterBody },
  props: {
    "filter": { type: Object, required: true },
    "summary": { type: Boolean, required: false, default: false },
    "solo": { type: Boolean, required: false, default: false },
    "customOptionLoading": { type: Boolean, required: false, default: false },
    "filterObjCustomOptionLoading": { type: Boolean, required: false, default: false }
  },
  data: () => ({
    value: null,
    panelIdempotency: null
  }),	
  methods: {
    handleValueChange(newValue) {
      this.value = newValue
    },
    hasScopedSlot(slotName) {
      return this.$scopedSlots[slotName] !== undefined
    },
    panelChange() {
      this.panelIdempotency = makeRandomId()      
    }
  }
}
</script>

<style lang="sass" scoped>
  @import '@/styles/mixins/filter/_filter'  
</style>