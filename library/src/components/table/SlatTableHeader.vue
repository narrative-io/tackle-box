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
        placeholder="Search"
        @input="searchChange($event)"
      )
      NioSelect(
        v-if="elements.sort"
        :items="sortOptions"
        v-model="selectedSort"
        itemText="label"
        itemValue="value"
        small
        @change="sortChange($event)"
      )
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
    searchChange(val) {
      this.$emit('searchChange', val)
    },
    sortChange(val) {
      this.$emit('sortChange', val)
    }
  },
  components: { NioSlat, NioSelect, NioTextField }
}
</script>

<style lang="sass" scoped>
  @import '../../styles/mixins/table/_slat-table-header'  
</style>