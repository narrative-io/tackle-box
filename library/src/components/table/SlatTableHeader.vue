<template lang="pug">
  NioSlat.nio-slat-table-header(

  )
    template(v-slot:content)
      .header-count(
        v-if="elements.count"
      )
        
      .header-selected(
        v-if="elements.selected"
      )
      NioTextField(
        v-if="elements.search"
        search-small-subdued
      )
      NioSelect(
        v-if="elements.sort"
        small
      )
</template>

<script>

import NioSlat from '../slat/Slat'
import NioTextField from '../TextField'
import NioSelect from '../Select'

export default {
  name: 'nio-slat-table-header',
  props: {
    "elements": { type: Object, required: true}
  },
  data: () => ({
    
  }),
  mounted() {

  },
  methods: {
    
  },
  components: { NioSlat, NioSelect, NioTextField }
}
</script>

<style lang="sass" scoped>
  @import '../../styles/mixins/table/_slat-table-header'  
</style>