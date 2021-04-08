<template lang="pug">
  .nio-slat-table(:class="[`action-${action}`, {'single-select': singleSelect, 'multi-select': multiSelect, 'listing-plain': listingPlain}]")  
    NioSlatTableHeader(
      v-if="!listingPlain"
      :elements="headerElements"
      :sortOptions="sortOptions"
      :selectionType="multiSelect ? 'multiSelect' : 'singleSelect'"
      :allSelected="allSelected"
      :selectedCount="multiSelect ? selection.length : selection ? 1 : 0"
      :numItems="computedItems ? computedItems.length : 0"
      :pagination="pagination"
      @searchChange="searchChange($event)"
      @sortChange="sortChange($event)"
      @allSelectedChange="allSelectedChange($event)"
    )
      template(v-for="(index, name) in $scopedSlots" v-slot:[name]="data")
        slot(:name="name" v-bind="data")   
    v-data-table(
      v-if="headers && computedItems"
      item-key="id"
      hide-default-header
      hide-default-footer
      :headers="headers"
      :items-per-page="500"
      :items="pagination ? paginatedItems : computedItems"
    )
      template(
        v-slot:item="{ item, expand, isExpanded }"    
      )
        tr(
          :key="item.id"
          :class="{'selected': itemSelected(item)}"
          @click="handleItemClick(item, expand, isExpanded)"
        )
          td.selection-cell(
            v-if="singleSelect || multiSelect" 
            :class="{'dense': dense}"
            @click.stop
          )
            NioRadioGroup(
              v-model="selection"
              v-if="singleSelect"
            )
              NioRadioButton(
                :value="item.id"
              )
            NioCheckbox(
              v-if="multiSelect"
              v-model="selection"
              :value="item.id"
              :key="item.id"
            )
            
          td.slat-cell
            NioImageTitleSubtitleSlot(
              :imgSrc="item.slat.image"
              :size="dense ? 'small' : 'normal'"
            )
              template(v-slot:title) {{ item.slat.title }}
              template(v-slot:subtitle) {{ item.slat.subtitle }}
          td.static-cell(
            v-for="column of staticColumns"
            :class="[`column-${column.name}`, `${column.addItemAsClass === true ? `value-${item.columnValues[column.name]}` : ''}`]"
          )
            .label.nio-table-label.text-primary-dark {{ column.label }}
            .value.nio-table-value.text-primary-dark {{ item.columnValues[column.name]}}
          td.action-cell(
            v-if="action" 
          )
            NioButton(container v-if="action !== 'custom'")
              NioIcon(
                v-if="action === 'link'"
                name="utility-chevron-right"
                color="#415298"
              )
              NioIcon(
                v-if="action === 'expand'"
                :name="isExpanded ? 'utility-chevron-up' : 'utility-chevron-down'"
                color="#415298"
              )
              v-menu(
                v-if="action === 'menu'"
                contentClass="nio-slat-table-item-menu"
                left
                nudgeBottom="20"
              )
                template(v-slot:activator="{ on, attrs }")
                  .activator(v-on="on")
                    NioIcon(
                      name="utility-more"
                      color="#415298"
                    )        
                slot(name="item-menu" v-bind:item="item")
            slot(name="custom-action" v-bind:item="item" v-if="action === 'custom'")
      template(v-slot:expanded-item="{ headers, item }")
        td.expanded-row(:colspan="numColumns") 
          slot(name="item-expanded" v-bind:item="item")
      template(v-slot:body.append v-if="actions")      
        tr.actions-row(v-if="actions && numColumns")    
          NioSlatTableActions(
            :colSpan="numColumns"
          )
            template(v-for="(index, name) in $scopedSlots" v-slot:[name]="data")
              slot(:name="name" v-bind="data") 
      template(v-slot:footer v-if="pagination")
        NioSlatTablePagination(
          :itemsPerPageOptions="itemsPerPageOptions"
          :itemsPerPage="itemsPerPage"
          :numItems="computedItems.length"
          :currentPage="currentPage"
          @itemsPerPageChange="itemsPerPageChange($event)"
          @nextPage="nextPage"
          @prevPage="prevPage"
        ) 
</template>

<script>

import NioImageTitleSubtitleSlot from '../slat/slot-templates/content/ImageTitleSubtitleSlot'
import NioCheckbox from '../../components/Checkbox'
import NioRadioButton from '../RadioButton'
import NioRadioGroup from '../RadioGroup'
import NioIcon from '../icon/Icon'
import NioSlatTableHeader from './SlatTableHeader'
import NioSlatTableActions from './SlatTableActions'
import NioSlatTablePagination from './SlatTablePagination'
import NioSelect from '../Select'
import NioButton from '../Button'
import Fuse from 'fuse.js'

export default {
  name: 'nio-slat-table',
  props: {
    "items": { type: Array, required: true },
    "columns": { type: Array, required: true },
    "action": { type: String, required: false }, // menu | link | expand
    "itemsPerPageOptions": { type: Array, required: false, default: function() { return [5, 10, 20, -1]}} ,
    "initialItemsPerPage": { type: Number, required: false, default: 5 },
    "sortOptions": { type: Array, required: false },
    "searchableProps": { type: Array, required: false },
    "defaultSelection": { type: Array | Number, required: false }
  },
  data: () => ({
    multiSelect: false,
    singleSelect: false,
    headerElements: {
      search: false,
      sort: false,
      selected: false,
      count: false
    },
    selection: null,
    headers: null,
    computedItems: null,
    dense: false,
    actions: false,
    numColumns: null,
    pagination: false, 
    paginatedItems: [],
    staticColumns: [],
    itemsPerPage: 4,
    currentPage: 1,
    selectedSortOption: null,
    searchOptions: {
      findAllMatches: true
    }, 
    searchTerm: null,
    fuseInstance: null,
    allSelected: false,
    listingPlain: false
  }),
  mounted() {
    this.applyHelperAttributes()
    this.itemsPerPage = this.initialItemsPerPage
    if (this.headerElements.sort || this.sortOptions) {
      this.selectedSortOption = this.sortOptions[0].value
    } 
    if (this.headerElements.search) {
      this.searchOptions.keys = this.searchableProps			
    }	
    this.makeHeaders()
    this.computeItems()
    this.initSelections()
  },
  methods: {
    handleItemClick(item, expandFn, isExpanded) {
      this.$emit('itemClicked', item)
      if (this.action === 'expand') {
        expandFn(!isExpanded)
        isExpanded ? this.$emit('itemCollapsed', item) : this.$emit('itemExpanded', item)
      } else if (this.singleSelect) {
        this.selection = item.id
        this.itemSelected(item)
      } else if (this.multiSelect) {
        if (this.selection.includes(item.id)) {
          this.selection.splice(this.selection.indexOf(item.id), 1)
        } else {
          this.selection.push(item.id)
        }
      }
    },
    initSelections() {
      if (this.defaultSelection) {
        this.selection = this.defaultSelection
      }
    },
    itemSelected(item) {
      if (this.singleSelect) {
        return this.selection === item.id
      } else if (this.multiSelect) {
        return this.selection.includes(item.id)
      }
    },
    getNumColumns() {
      let columns = this.staticColumns.length
      if (this.singleSelect || this.multiSelect) {
        columns++
      }
      this.numColumns = columns + 2
    },
    computeItems() {
      let computedItems = []
      this.items.forEach(item => {
        const computedItem = item
        const slatColumn = this.columns.find(column => column.name === 'slat')
        if (slatColumn) {
          computedItem.slat = {
            image: typeof slatColumn.props.image === 'function' ? slatColumn.props.image(item) : item[slatColumn.props.image],
            title: typeof slatColumn.props.title === 'function' ? slatColumn.props.title(item) : item[slatColumn.props.title],
            subtitle: typeof slatColumn.props.subtitle === 'function' ? slatColumn.props.subtitle(item) : item[slatColumn.props.subtitle]
          }
        }
        
        const columnValues = {}
        this.columns.filter(column => column.name !== "slat").forEach(column => {
          columnValues[column.name] = column.computed ? column.computed(item) : item[column.name]
        })
        computedItem.columnValues = columnValues
        computedItems.push(computedItem)
      })
      // apply search
      if (this.headerElements.search && this.searchTerm && this.searchTerm.length > 2) {
        this.fuseInstance = new Fuse(computedItems, this.searchOptions)
        this.fuseInstance.search(this.searchTerm)
        computedItems = this.fuseInstance.search(this.searchTerm).map(result => result.item)
      }
      // apply sort
      if (this.selectedSortOption) {
        computedItems = this.sortByKey(computedItems, this.selectedSortOption.itemProp, this.selectedSortOption.order )
      }
      // apply pagination 
      if (this.pagination) {
        this.paginatedItems = this.itemsPerPage === -1 ? computedItems : computedItems.slice(0, this.itemsPerPage)
      }
      this.computedItems = computedItems
    },
    makeHeaders() {
      const headers = []

      headers.push({
        name: 'slat',
        value: 'slat'
      })
      
      this.columns.filter(column => column.name !== "slat").forEach(column => {
        headers.push({
          name: column.name,
          label: column.label,
          value: column.name,
          addItemAsClass: column.addItemAsClass
        })
      })
      this.headers = headers
      this.makeStaticColumns()
    },
    makeStaticColumns() {
      this.staticColumns = this.headers.filter(header => header.name !== 'selections' && header.name !== 'slat' && header.name !== 'action')
    },
    applyHelperAttributes() {
      const attributes = this.$el.attributes
      if (attributes.getNamedItem('single-select')) {
        this.singleSelect = true
        this.selection = null
      }
      if (attributes.getNamedItem('multi-select')) {
        this.multiSelect = true
        this.selection = []
      }
      if (attributes.getNamedItem('dense-rows')) {
        this.dense = true
      }
      if (attributes.getNamedItem('search-header')) {
        this.headerElements.search = true
      }
      if (attributes.getNamedItem('search-sort-header')) {
        this.headerElements.search = true
        this.headerElements.sort = true
      }
      if (attributes.getNamedItem('selected-search-header')) {
        this.headerElements.selected = true
        this.headerElements.search = true
      }
      if (attributes.getNamedItem('selected-header')) {
        this.headerElements.selected = true
      }
      if (attributes.getNamedItem('count-header')) {
        this.headerElements.count = true
      }
      if (attributes.getNamedItem('footer-actions')) {
        this.actions = true
      }
      if (attributes.getNamedItem('pagination')) {
        this.pagination = true
      }
      if (attributes.getNamedItem('listing-plain')) {
        this.singleSelect = false
        this.multiSelect = false
        this.actions = false
        this.pagination = false
        this.listingPlain = true
      }
    },
    searchChange(val) {
      this.currentPage = 1
      this.searchTerm = val
      this.computeItems()
    },
    sortChange(val) {
      this.currentPage = 1
      this.selectedSortOption = val
      this.computeItems()
    },
    allSelectedChange(val) {
      this.selection = val === true ? this.computedItems.map(item => item.id) : []
    },
    itemsPerPageChange(val) {
      this.itemsPerPage = val
      this.applyPagination(1)
    },
    prevPage() {
      this.applyPagination(this.currentPage - 1)
    },
    nextPage() {
      this.applyPagination(this.currentPage + 1)
    },
    applyPagination(page) {
      this.currentPage = page
      if (this.itemsPerPage === -1) {
        this.paginatedItems = this.computedItems
      } else {
        this.paginatedItems = this.computedItems.slice(this.currentPage * this.itemsPerPage - this.itemsPerPage, this.currentPage * this.itemsPerPage)
      }
    },
    sortByKey(items, key, order = 'ascending') {
      return items.sort(this.compareValues(key, order))
    },
    compareValues(key, order) {
      return ((a, b) => {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
          return 0;
        }
        const varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];
        let comparison = 0;
        if (varA > varB) {
          comparison = 1;
        } else if (varA < varB) {
          comparison = -1;
        }
        return (
          (order === 'descending') ? (comparison * -1) : comparison
        )
      })
    }
  },
  watch: {
    selection(val) {
      const value = this.multiSelect ? this.items.filter(item => val.includes(item.id)) : this.items.find(item => item.id === val)
      this.$emit('selectionChanged', value)
    },
    staticColumns(val) {
      this.getNumColumns()
    },
    items: {
			deep: true,
      handler(val) {
				console.log(val)
				this.computeItems()
				console.log(this.items)
      }
    }
  },
  components: {
    NioImageTitleSubtitleSlot, 
    NioCheckbox, 
    NioRadioButton, 
    NioRadioGroup, 
    NioIcon, 
    NioSlatTableHeader, 
    NioSlatTableActions, 
    NioSlatTablePagination,
    NioSelect,
    NioButton
  }
}
</script>

<style lang="sass" scoped>
  @import '../../styles/mixins/table/_slat-table'  
</style>

<style lang="sass">
  @import '../../styles/global/_colors'
  @import '../../styles/mixins/_menu'
  .nio-slat-table-item-menu
    +nio-menu   
    background-color: $c-white
</style>

