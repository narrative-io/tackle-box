<template lang="pug">
  v-expansion-panel.nio-filter(
    :key="name"
  )
    v-expansion-panel-header
      NioFilterHeader(
        :title="title"
        :description="description"
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
    "name": { type: String, required: true },
    "title": { type: String, required: true },
    "description": { type: String, required: false, default: null }
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