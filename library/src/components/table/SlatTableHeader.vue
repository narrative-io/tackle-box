<template lang="pug">
  NioSlat.nio-slat-table-header(

  )
    template(v-slot:content)  
      .header-selected(
        v-if="elements.selected"
      )
        NioCheckbox(
          v-if="selectionType === 'multiSelect'"
          :checked="allSelected"
          @change="allSelectedChange($event)"
        )
        .count.nio-p.nio-bold.text-primary-dark(v-if="selectedCount > 0")
          span.selected-count {{ selectedCount }}
          span.label  {{ selectedCount > 1 ? 'items' : 'item' }} selected

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
import NioCheckbox from '../Checkbox'

export default {
  name: 'nio-slat-table-header',
  props: {
    "elements": { type: Object, required: true },
    "sortOptions": { type: Array, required: false, default: function() { return []} },
    "selectedCount": { type: Number, required: false, default: 0 },
    "selectionType": { type: String, required: false },
    "allSelected": { type: Boolean, required: false, default: false }
  },
  data: () => ({
    selectedSort: null,
    singleSelect: false
  }),
  mounted() {
    this.applyHelperAttributes()
    if (this.sortOptions && this.sortOptions.length) {
      this.selectedSort = this.sortOptions[0]
    }
  },
  methods: {
    applyHelperAttributes() {
      const attributes = this.$el.attributes
    },
    searchChange(val) {
      this.$emit('searchChange', val)
    },
    sortChange(val) {
      this.$emit('sortChange', val)
    },
    allSelectedChange(val) {
      this.$emit('allSelectedChange', val)
    }
  },
  components: { NioSlat, NioSelect, NioTextField, NioCheckbox }
}
</script>

<style lang="sass" scoped>
  @import '../../styles/mixins/table/_slat-table-header'  
</style>