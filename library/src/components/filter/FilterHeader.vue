<template lang="pug">
  .nio-filter-header
    .title-description
      template(
        v-if="hasScopedSlot(`filter-header-name-custom`)"
      )
        slot(
          :name="`filter-header-name-custom`" 
          v-bind:filter="filter"
        )   	
      .filter-title.nio-h4.text-primary-darker(v-else) {{ title }}
        .filter-tooltip
          NioTooltip(
            v-if="tooltip"
            :heading="tooltip.heading"
            :message="tooltip.message"
            :linkText="tooltip.linkText"
            :linkHref="tooltip.linkHref"
          )
          slot(name="header-tooltip" v-else)
      .description.nio-p.text-primary-dark {{ description }}
    .filter-value
      .value(v-for="item in value")
        NioIcon(
          name="utility-check-circle"
          color="#43B463"
          size="14"
        )
        .text.nio-p.text-primary-darker {{ item }}
    .action
      NioIcon(name="utility-chevron-down")
</template>

<script>

import NioIcon from '../icon/Icon'
import NioTooltip from '../Tooltip'

export default {
  name: 'nio-filter-header',
  props: {
     "title": { type: String, required: true },
     "description": { type: String, required: false, default: null },
     "value": { type: Array, required: false, default: null},
     "tooltip": { type: Object, required: false },
     "filter": { type: Object, required: false},
     "summary": { type: Boolean, required: false, default: false }
  },
  data: () => ({
    
  }),	
  methods: {
    hasScopedSlot(slotName) {
      return this.$scopedSlots[slotName] !== undefined
    }
  },
  components: { NioIcon, NioTooltip }
}
</script>

<style lang="sass" scoped>
  @import '@/styles/mixins/filter/_filter-header'  
</style>