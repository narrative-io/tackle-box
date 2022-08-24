<template lang="pug">
  .nio-slat-table(:class="[`action-${action}`, {'single-select': singleSelect, 'multi-select': multiSelect, 'listing-plain': listingPlain}]")  
    NioSlatTableHeader(
      v-if="!listingPlain"
      :modules="orderedHeaderModules"
      :sort-options="sortOptions"
      :selection-type="multiSelect ? 'multiSelect' : 'singleSelect'"
      :all-selected="allSelected"
      :selected-count="multiSelect ? selection.length : selection ? 1 : 0"
      :num-items="computedItems ? computedItems.length : 0"
      :pagination="pagination"
      @searchChange="searchChange($event)"
      @sortChange="sortChange($event)"
      @allSelectedChange="allSelectedChange($event)"
    )
      template(v-for="(index, name) in $scopedSlots" v-slot:[name]="data")
        slot(:name="name" v-bind="data")   
    v-data-table(
      v-if="headers && computedItems"
      :headers="headers"
      :items-per-page="500"
      :items="pagination || progressivePagination ? paginatedItems : computedItems"
      :expanded.sync="expandedItems"
      item-key="id"
      hide-default-header
      hide-default-footer
    )
      template(
        v-slot:item="{ item, expand, isExpanded, index }"    
      )
        tr(
          :key="item.id"
          :class="[makeItemIdClass(item.id), {'selected': itemSelected(item), 'expanded': expandedItemIds.includes(item.id)}]"
          @click="handleItemClick(item, expand, isExpanded, index)"
        )
          td.selection-cell(
            v-if="singleSelect || multiSelect" 
            :class="{'dense': dense}"
            @click.stop
          )
            NioRadioGroup(
              v-if="singleSelect"
              v-model="selection"
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
          td.slat-cell.custom-slat-cell(v-if="customSlatCell")
            slot(
              v-bind:item="item"
              name="custom-slat-cell" 
            )
          td.slat-cell(v-else)
            NioImageTitleSubtitleSlot(
              :size="dense ? 'small' : 'normal'"
              :img-src="item.slat.image"
              :img-background="item.slat.imageBackground ? item.slat.imageBackground : 'none'"
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
            :class="{'expand-custom-action': action === 'expand-custom'}"
          )
            NioButton(container v-if="action !== 'custom'")
              NioIcon(
                v-if="action === 'link'"
                name="utility-chevron-right"
                color="#415298"
              )
              slot(name="custom-action" v-bind:item="item" v-if="action === 'expand-custom'")
              NioIcon(
                v-if="action === 'expand' || action === 'expand-custom'"
                :class="{'expand-custom-icon': action === 'expand-custom'}"
                :name="isExpanded ? 'utility-chevron-up' : 'utility-chevron-down'"
                color="#415298"
              )
              v-menu(
                v-if="action === 'menu'"
                content-class="nio-slat-table-item-menu"
                nudgeBottom="20"
                left
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
          slot(
            v-bind:item="item"
            name="item-expanded" 
          )
      template(v-slot:body.append v-if="actions")      
        tr.actions-row(v-if="actions && numColumns")    
          NioSlatTableActions(
            :col-span="numColumns"
          )
            template(v-for="(index, name) in $scopedSlots" v-slot:[name]="data")
              slot(:name="name" v-bind="data") 
      template(v-slot:footer v-if="pagination")
        NioSlatTablePagination(
          :items-per-page-options="itemsPerPageOptions"
          :items-per-page="itemsPerPage"
          :num-items="computedItems.length"
          :current-page="currentPage"
          @itemsPerPageChange="itemsPerPageChange($event)"
          @nextPage="nextPage"
          @prevPage="prevPage"
        )
      template(v-slot:footer v-else-if="progressivePagination && computedItems.length > progressivePaginationCount")
        NioDivider(horizontal-solo)
        NioButton.progressive-pagination-button(
          normal-secondary
          @click="incrementProgressivePagination"
        ) {{ progressivePaginationText }}
      template(
        v-slot:no-results
      ) 
        .nio-p-large.text-primary-dark {{ noResultsText }}
      template(
        v-slot:no-data
      )
        .nio-p-large.text-primary-dark {{ noResultsText }}
      
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
import NioDivider from '../Divider'
import Fuse from 'fuse.js'

export default {
  name: 'nio-slat-table',
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
    NioButton,
    NioDivider
  },
  props: {
    "items": { type: Array, required: true },
    "columns": { type: Array, required: true },
    "action": { type: String, required: false }, // menu | link | expand
    "itemsPerPageOptions": { type: Array, required: false, default: function() { return [5, 10, 20, -1]}} ,
    "initialItemsPerPage": { type: Number, required: false, default: 5 },
    "sortOptions": { type: Array, required: false },
    "searchableProps": { type: Array, required: false },
    "defaultSelection": { type: Array | Number, required: false },
    "headerModules": { type: Array, required: false },
    "searchConfig": { type: Object, required: false },
    "customSlatCell": { type: Boolean, required: false, default: false },
    "noResultsText": { type: String, required: false, default: 'No items found' },
    "minCharsToSearch": { type: Number, required: false, default: 3 },
    "externalSearchString": { type: String, required: false },
    "progressivePaginationText": { type: String, required: false, default: 'Show more' },
    "itemIdClass": { type: Boolean, required: false, default: false },
    "initialOpenItemIds": { type: Array, required: false }
  },
  data: () => ({
    multiSelect: false,
    singleSelect: false,
    orderedHeaderModules: [],
    showHeaderModules: {
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
    progressivePagination: false,
    progressivePaginationCount: 5,
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
    listingPlain: false,
    expandedItemIds: [],
    expandedItems: [],
    initialOpenItemsInit: false
  }),
  watch: {
    selection(val) {
      const value = this.multiSelect ? this.items.filter(item => val.includes(item.id)) : this.items.find(item => item.id === val)
      if (value.length === this.computedItems.length) {
        this.allSelected = true
      } else {
        this.allSelected = false
      }
      this.$emit('selectionChanged', value)
    },
    staticColumns(val) {
      this.getNumColumns()
    },
    items: {
      deep: true,
      handler(val) {
        this.computeItems()
      }
    },
    externalSearchString(val) {
      this.searchChange(val)
    },
    expandedItemIds(val) {
      if (this.pagination && val.length > 0 && !this.initialOpenItemsInit) {
        const firstOpenItemPage = Math.floor(this.items.findIndex(item => item.id === val[0]) / this.itemsPerPage) + 1
        this.applyPagination(firstOpenItemPage)
        this.initialOpenItemsInit = true
      }
      const items = this.pagination || this.progressivePagination ? this.paginatedItems : this.computedItems
      this.expandedItems = items.filter(item => val.includes(item.id))

    }
  },
  mounted() {
    this.applyHelperAttributes()
    this.itemsPerPage = this.initialItemsPerPage
    this.progressivePaginationCount = this.itemsPerPage
    if (this.showHeaderModules.sort || this.sortOptions) {
      this.selectedSortOption = this.sortOptions[0].value
    } 
    this.makeHeaders()
    this.computeItems()
    this.initSelections()
    if (this.initialOpenItemIds) {
      this.expandedItemIds = this.initialOpenItemIds
    }
  },
  methods: {
    handleItemClick(item, expandFn, isExpanded, index) {
      this.$emit('itemClicked', {...item, nioItemIndex: index})
      if (this.action === 'expand' || this.action === 'expand-custom') {
        expandFn(!isExpanded)
        if (isExpanded) {
          this.$emit('itemCollapsed', {...item, nioItemIndex: index})
          this.expandedItemIds = this.expandedItemIds.filter(id => id !== item.id)
        } else {
          this.$emit('itemExpanded', {...item, nioItemIndex: index})
          if (!this.expandedItemIds.includes(item.id)) {
            this.expandedItemIds.push(item.id)
          }
        }
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
            imageBackground: typeof slatColumn.props.imageBackground === 'function' ? slatColumn.props.imageBackground(item) : item[slatColumn.props.imageBackground],
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
      if ((this.externalSearchString || this.showHeaderModules.search) && this.searchTerm && this.searchTerm.length >= this.minCharsToSearch) {
        const searchOptions = this.searchConfig ? this.searchConfig : this.searchOptions
        searchOptions.keys = this.searchableProps			
        this.fuseInstance = new Fuse(computedItems, searchOptions)
        this.fuseInstance.search(this.searchTerm)
        computedItems = this.fuseInstance.search(this.searchTerm).map(result => result.item)
      }
      // apply sort
      if (this.selectedSortOption) {
        computedItems = this.sortByKey(computedItems, this.selectedSortOption.itemProp, this.selectedSortOption.order )
      }
      // apply pagination 
      if (this.pagination) {
        this.paginatedItems = this.itemsPerPage === -1 ? computedItems : computedItems.slice(this.itemsPerPage * (this.currentPage - 1), this.itemsPerPage * this.currentPage)
      } else if (this.progressivePagination) {
        this.paginatedItems = computedItems.slice(0, this.progressivePaginationCount)
        this.$emit('progressivePaginationCountChanged', this.paginatedItems.length)
      } 
      this.computedItems = computedItems
      this.$emit('computedItemsCountChanged', this.computedItems.length)
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
      if (attributes.getNamedItem('sort-header')) {
        this.showHeaderModules.sort = true
        this.orderedHeaderModules = ['sort']
      }
      if (attributes.getNamedItem('search-header')) {
        this.showHeaderModules.search = true
        this.orderedHeaderModules = ['search']
      }
      if (attributes.getNamedItem('search-sort-header')) {
        this.showHeaderModules.search = true
        this.showHeaderModules.sort = true
        this.orderedHeaderModules = ['search', 'sort']
      }
      if (attributes.getNamedItem('selected-search-header')) {
        this.showHeaderModules.selected = true
        this.showHeaderModules.search = true
        this.orderedHeaderModules = ['selected', 'search']
      }
      if (attributes.getNamedItem('selected-header')) {
        this.showHeaderModules.selected = true
        this.orderedHeaderModules = ['selected']
      }
      if (attributes.getNamedItem('count-header')) {
        this.showHeaderModules.count = true
        this.orderedHeaderModules = ['count']
      }
      if (attributes.getNamedItem('footer-actions')) {
        this.actions = true
      }
      if (attributes.getNamedItem('pagination')) {
        this.pagination = true
      }
      if (attributes.getNamedItem('progressive-pagination')) {
        this.progressivePagination = true
      }
      if (attributes.getNamedItem('listing-plain')) {
        this.singleSelect = false
        this.multiSelect = false
        this.actions = false
        this.pagination = false
        this.listingPlain = true
      }
      if (this.headerModules && this.headerModules.length) {
        this.headerModules.map(module => {
          switch (module) {
            case 'search':
              this.showHeaderModules.search = true
              this.orderedHeaderModules.push('search')
              break;
            case 'sort':
              this.showHeaderModules.sort = true
              this.orderedHeaderModules.push('sort')
              break;
            case 'count':
              this.showHeaderModules.count = true
              this.orderedHeaderModules.push('count')
              break;
            case 'selected':
              this.showHeaderModules.selected = true
              this.orderedHeaderModules.push('selected')
              break;
            default:
              break;
          }
        })
      }
    },
    searchChange(val) {
      this.currentPage = 1
      this.searchTerm = val
      this.computeItems()
      this.applyPagination(1)
    },
    sortChange(val) {
      this.currentPage = 1
      this.selectedSortOption = val
      this.computeItems()
      this.applyPagination(1)
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
      this.$emit('paginationPageChanged', page)
      this.currentPage = page
      if (this.pagination) {
        if (this.itemsPerPage === -1) {
          this.paginatedItems = this.computedItems
        } else {
          this.paginatedItems = this.computedItems.slice(this.currentPage * this.itemsPerPage - this.itemsPerPage, this.currentPage * this.itemsPerPage)
        }
      } 
    },
    incrementProgressivePagination() {
      if (this.progressivePagination) {
        this.progressivePaginationCount += this.itemsPerPage
        this.paginatedItems = this.computedItems.slice(0, this.progressivePaginationCount)
        this.$emit('progressivePaginationCountChanged', this.paginatedItems.length)
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
    },
    makeItemIdClass(itemId) {
      return this.itemIdClass ? `nio-slat-table-item-id-${itemId}` : ''
    }
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

