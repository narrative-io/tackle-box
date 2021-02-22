<template lang="pug">
  .nio-filter-header
    .title-description
      .title.nio-h4.text-primary-darker {{ title }}
      .description.nio-p.text-primary-dark {{ description }}
    .filter-value
      .value(v-if="value")
        NioIcon(  
          name="utility-check-circle"
          color="#43B463"
          size="14"
        )
        .text.nio-p.text-primary-darker {{ value }}
    .action
      NioIcon(name="utility-chevron-down")  
</template>

<script>

import NioIcon from '../icon/Icon'

export default {
  name: 'nio-filter-header',
  props: {
     "title": { type: String, required: true },
     "description": { type: String, required: false, default: null },
     "value": { type: String, required: false, default: null}
  },
  data: () => ({
    
  }),	
  methods: {
    
  },
  components: { NioIcon }
}
</script>

<style lang="sass" scoped>
  @import '@/styles/mixins/filter/_filter-header'  
</style>