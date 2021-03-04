<template lang="pug">
  v-expansion-panel.nio-filter(
    :key="filter.name"
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
        @valueChanged="handleValueChange($event)"
      )
        
</template>

<script>

import NioFilterHeader from './FilterHeader'
import NioFilterBody from './FilterBody'

export default {
  name: 'nio-filter',
  props: {
    "filter": { type: Object, required: true }
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
  mounted() {
    console.log(this.$scopedSlots)
  },
  components: { NioFilterHeader, NioFilterBody }
}
</script>

<style lang="sass" scoped>
  @import '@/styles/mixins/filter/_filter'  
</style>