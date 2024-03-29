<template lang="pug">
  NioSlat.nio-slat-table-header(
    :class="{'sort-only': modules.length === 1 && modules[0] === 'sort'}"
  )
    template(v-slot:content)
      template(v-for="module of modules")
        template(v-if="module === 'search'")
          NioTextField(
            placeholder="Search"
            search-small-subdued
            @input="searchChange($event)"
          )
        template(v-if="module === 'sort'")
          NioSelect(
            v-model="selectedSort"
            :items="sortOptions"
            item-text="label"
            item-value="value"
            small
            @change="sortChange($event)"
          )
        template(v-if="module === 'count'")
          .count.nio-p.nio-bold.text-primary-dark Showing {{ numItems }} {{ numItems > 1 ? 'items' : 'item'}}
        template(v-if="module === 'selected'")
          .selected-module
            NioCheckbox(
              v-if="selectionType === 'multiSelect'"
              v-model="tempAllSelected"
              @change="allSelectedChange($event)"
            )
            .count.nio-p.nio-bold.text-primary-dark(v-if="selectedCount > 0")
              span.selected-count {{ selectedCount }}
              span.label {{ selectedCount > 1 ? ' items' : ' item' }} selected
      slot(name="custom-header-element")
</template>

<script>

import NioSlat from '../slat/Slat'
import NioTextField from '../TextField'
import NioSelect from '../Select'
import NioCheckbox from '../Checkbox'

export default {
  name: 'nio-slat-table-header',
  components: { NioSlat, NioSelect, NioTextField, NioCheckbox },
  props: {
    "modules": { type: Array, required: true },
    "sortOptions": { type: Array, required: false, default: function() { return []} },
    "selectedCount": { type: Number, required: false, default: 0 },
    "numItems": { type: Number, required: false },
    "selectionType": { type: String, required: false },
    "allSelected": { type: Boolean, required: false, default: false },
    "pagination": { type: Boolean, requied: false, default: false }
  },
  data: () => ({
    selectedSort: null,
    singleSelect: false,
    tempAllSelected: false
  }),
  watch: {
    allSelected(val) {
      this.tempAllSelected = val
    }
  },
  mounted() {
    this.applyHelperAttributes()
    if (this.sortOptions && this.sortOptions.length) {
      this.selectedSort = this.sortOptions[0]
    }
    this.tempAllSelected = this.allSelected
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
  }	
}
</script>

<style lang="sass" scoped>
  @import '../../styles/mixins/table/_slat-table-header'  
</style>