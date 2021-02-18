<template lang="pug">
  .nio-filter(

  )
    NioFilterHeader(

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