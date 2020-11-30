<template lang="pug">
  .nio-slat-table(:class="[`action-${action}`, {'single-select': singleSelect, 'multi-select': multiSelect, }]")
    NioSlatTableHeader(
      :elements="headerElements"
      :sortOptions="sortOptions"
      @searchChange="searchChange($event)"
      @sortChange="sortChange($event)"
    )
    v-data-table(
      v-if="headers && computedItems"
      :headers="headers"
      :items="computedItems"
      :items-per-page="10"
      item-key="id"
      hide-default-header
      hide-default-footer
      :footer-props="{'items-per-page-text':''}"
    )
      template(
        v-slot:item="{ item, expand, isExpanded }"    
      )
        tr(
          :key="item.id"
          :class="{'selected': itemSelected(item)}"
          @click="handleItemClick(item, expand, isExpanded)"
        )
          td.selection-cell(v-if="singleSelect || multiSelect" @click.stop)
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
              v-if="item.slat.image && item.slat.title && item.slat.title"
              :imgSrc="item.slat.image"
              :size="dense ? 'small' : 'normal'"
            )
              template(v-slot:title) {{ item.slat.title }}
              template(v-slot:subtitle) {{ item.slat.subtitle }}
          td.static-cell(
            v-for="column of staticColumns"
            :class="[`column-${column.name}`]"
          )
            .label.nio-table-label.text-primary-dark {{ column.label }}
            .value.nio-table-value.text-primary-dark {{ item.columnValues[column.name ]}}
          td.action-cell
            NioIcon(
              v-if="action === 'link'"
              name="utility-chevron-right"
              color="#415298"
            )
            NioIcon(
              v-if="action === 'expand'"
              name="utility-chevron-down"
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
      template(v-slot:expanded-item="{ headers, item }")
        td(:colspan="numColumns") 
          slot(name="item-expanded" v-bind:item="item")
      template(v-slot:body.append)      
        tr.actions-row(v-if="actions && numColumns")    
          NioSlatTableActions(
            :colSpan="numColumns"
          )
            template(v-for="(index, name) in $scopedSlots" v-slot:[name]="data")
              slot(:name="name" v-bind="data") 
      template(v-slot:footer v-if="pagination")
        .pagination-footer
          NioSelect(
            small
            v-model="itemsPerPage"
            :items="itemsPerPageOptions"
            itemText=""
          )
            template(v-slot:selection="data") {{ data.item === -1 ? 'Show all' : `${data.item} items per page`}}
            template(v-slot:item="data") {{ data.item === -1 ? 'Show all' : `${data.item} items per page`}}
</template>

<script>

import NioImageTitleSubtitleSlot from '../slat/slot-templates/content/ImageTitleSubtitleSlot'
import NioCheckbox from '../../components/Checkbox'
import NioRadioButton from '../RadioButton'
import NioRadioGroup from '../RadioGroup'
import NioIcon from '../icon/Icon'
import NioSlatTableHeader from './SlatTableHeader'
import NioSlatTableActions from './SlatTableActions'
import NioSelect from '../Select'

export default {
  name: 'nio-slat-table',
  props: {
    "items": { type: Array, required: true },
    "columns": { type: Array, required: true },
    "action": { type: String, required: false, default: "menu" }, // menu | link | expand
    "itemsPerPageOptions": { type: Array, required: false, default: function() { return [1, 2, 4, -1]}} ,
    // "itemsPerPageOptions": { type: Array, required: false, default: function() { return [5, 10, 20, -1]}} ,
    "initialItemsPerPage": { type: Number, required: false },
    "sortOptions": { type: Array, required: false }
  },
  data: () => ({
    searchable: false,
    multiSelect: false,
    singleSelect: false,
    headerElements: {
      count: false,
      search: false,
      sort: false,
      selected: false
    },
    selection: null,
    headers: null,
    computedItems: null,
    dense: false,
    actions: false,
    numColumns: null,
    pagination: false, 
    staticColumns: [],
    itemsPerPage: 4
  }),
  mounted() {
    this.applyHelperAttributes()
    this.makeHeaders()
    this.computeItems()
    if (this.initialItemsPerPage) {
      this.itemsPerPage = this.initialItemsPerPage
    }
  },
  methods: {
    searchChange(val) {
      console.log(val)
    },
    sortChange(val) {
      console.log(val)
    },
    handleItemClick(item, expandFn, isExpanded) {
      if (this.action === 'expand') {
        expandFn(!isExpanded)
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
      if (this.actions) {
        columns++
      }
      this.numColumns = columns + 1
    },
    computeItems() {
      const computedItems = []
      this.items.forEach(item => {
        const computedItem = item
        const slatColumn = this.columns.find(column => column.name === 'slat')
        computedItem.slat = {
          image: typeof slatColumn.props.image === 'function' ? slatColumn.props.image(item) : item[slatColumn.props.image],
          title: typeof slatColumn.props.title === 'function' ? slatColumn.props.title(item) : item[slatColumn.props.title],
          subtitle: typeof slatColumn.props.subtitle === 'function' ? slatColumn.props.subtitle(item) : item[slatColumn.props.subtitle]
        }
        
        const columnValues = {}

        this.columns.filter(column => column.name !== "slat").forEach(column => {
          columnValues[column.name] = column.computed ? column.computed(item) : item[column.name]
        })
        computedItem.columnValues = columnValues
        computedItems.push(computedItem)
      })
      this.computedItems = computedItems
    },
    makeHeaders() {
      const headers = []

      if (this.singleSelect) {
        headers.push({
          name: 'singleSelect',
          value: 'singleSelect'
        })
      } else if (this.multiSelect) {
        headers.push({
          name: 'multiSelect',
          value: 'multiSelect'
        })
      }

      const slatColumn = this.columns.find(column => column.name === 'slat')
      headers.push({
        name: 'slat',
        value: 'slat'
      })

      this.columns.filter(column => column.name !== "slat").forEach(column => {
        headers.push({
          name: column.name,
          label: column.label,
          value: column.name
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
      }
      if (attributes.getNamedItem('multi-select')) {
        this.multiSelect = true
        this.selection = []
      }
      if (attributes.getNamedItem('dense-rows')) {
        this.dense = true
      }
      // header types
      if (attributes.getNamedItem('search-sort-header')) {
        this.headerElements.search = true
        this.headerElements.sort = true
      }
      if (attributes.getNamedItem('count-sort-header')) {
        this.headerElements.count = true
        this.headerElements.sort = true
      }
      if (attributes.getNamedItem('count-selected-header')) {
        this.headerElements.selected = true
      }
      if (attributes.getNamedItem('footer-actions')) {
        this.actions = true
      }
      if (attributes.getNamedItem('pagination')) {
        this.pagination = true
      }
    }
  },
  watch: {
    selection(val) {
      this.$emit('selectionChanged', val)
    },
    staticColumns(val) {
      this.getNumColumns()
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
    NioSelect 
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

