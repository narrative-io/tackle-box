<template lang="pug">
  v-expansion-panel.nio-filter(
    :key="filter.name"
  )
    v-expansion-panel-header
      NioFilterHeader(
        :title="filter.title"
        :description="filter.description"
      )
    v-expansion-panel-content
      NioFilterBody(

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
    
  }),	
  methods: {
    
  },
  components: { NioFilterHeader, NioFilterBody }
}
</script>

<style lang="sass" scoped>
  @import '@/styles/mixins/filter/_filter'  
</style>