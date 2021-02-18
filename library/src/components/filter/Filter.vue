<template lang="pug">
  .nio-filter(

  )
    NioFilterHeader(
      :title="title"
      :description="description"
    )
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