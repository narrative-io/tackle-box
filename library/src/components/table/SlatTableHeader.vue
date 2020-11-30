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
        :items="sortOptions"
        v-model="selectedSort"
        small
      )
        template(v-slot:selection="data") {{ data.item.label }}
        template(v-slot:item="data") {{ data.item.label }}
</template>

<script>

import NioSlat from '../slat/Slat'
import NioTextField from '../TextField'
import NioSelect from '../Select'

export default {
  name: 'nio-slat-table-header',
  props: {
    "elements": { type: Object, required: true },
    "sortOptions": { type: Array, required: false, default: function() { return []} }
  },
  data: () => ({
    selectedSort: null
  }),
  mounted() {
    if (this.sortOptions && this.sortOptions.length) {
      this.selectedSort = this.sortOptions[0]
    }
  },
  methods: {
    
  },
  components: { NioSlat, NioSelect, NioTextField }
}
</script>

<style lang="sass" scoped>
  @import '../../styles/mixins/table/_slat-table-header'  
</style>