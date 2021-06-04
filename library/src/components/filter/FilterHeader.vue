<template lang="pug">
  .nio-filter-header
    .title-description
      .filter-title.nio-h4.text-primary-darker {{ title }}
        .filter-tooltip
          NioTooltip(
            v-if="tooltip"
            :heading="tooltip.heading"
            :message="tooltip.message"
            :linkText="tooltip.linkText"
            :linkHref="tooltip.linkHref"
          )
          slot(name="tooltip" v-else)
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
     "tooltip": { type: Object, required: false }
  },
  data: () => ({
    
  }),	
  methods: {
    
  },
  components: { NioIcon, NioTooltip }
}
</script>

<style lang="sass" scoped>
  @import '@/styles/mixins/filter/_filter-header'  
</style>