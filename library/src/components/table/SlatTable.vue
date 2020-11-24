<template lang="pug">
  .nio-slat-table
    v-data-table(
      v-if="headers && computedItems"
      :headers="headers"
      :items="computedItems"
      :items-per-page="10"
    )
      template(
        v-slot:body="{ items }"
      )
        tbody
          tr(
            v-for="item in items"
            :key="item.name"
          )
            td.selection-cell(v-if="singleSelect || multiSelect")
              NioRadioButton(
                v-if="singleSelect"
                :value="item"
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
              )
                template(v-slot:title) {{ item.slat.title }}
                template(v-slot:subtitle) {{ item.slat.subtitle }}

            td.static-cell(
              v-for="column of staticColumns"
            )
              .label {{ column.label }}
              .value {{ item[column.name ]}}
</template>

<script>

import NioImageTitleSubtitleSlot from '../slat/slot-templates/content/ImageTitleSubtitleSlot'
import NioCheckbox from '../../components/Checkbox'
import NioRadioButton from '../RadioButton'

export default {
  name: 'nio-slat-table',
  props: {
    "items": { type: Array, required: true },
    "columns": { type: Array, required: true },
    "action": { type: String, required: false, default: "menu"}, // menu | link | expand
  },
  data: () => ({
    searchable: false,
    multiSelect: false,
    singleSelect: false,
    selection: null,
    headers: null,
    computedItems: null,
    staticColumns: []
  }),
  mounted() {
    this.applyHelperAttributes()
    this.makeHeaders()
    this.computeItems()
  },
  methods: {
    computeItems() {
      const computedItems = []
      this.items.forEach(item => {
        const computedItem = {}
        const slatColumn = this.columns.find(column => column.name === 'slat')
        computedItem.slat = {
          image: typeof slatColumn.props.image === 'function' ? slatColumn.props.image(item) : item[slatColumn.props.image],
          title: typeof slatColumn.props.title === 'function' ? slatColumn.props.title(item) : item[slatColumn.props.title],
          subtitle: typeof slatColumn.props.subtitle === 'function' ? slatColumn.props.subtitle(item) : item[slatColumn.props.subtitle]
        }

        this.columns.filter(column => column.name !== "slat").forEach(column => {
          if (column.props) {
            const itemProps = {}
            column.props.forEach(prop => {
              itemProps[prop] = column.computed && column.computed.hasOwnProperty(prop) ? column.computed[prop](item) : item[prop] 
            })
            computedItem[column.name] = itemProps
          } else {
            computedItem[column.name] = column.computed ? column.computed(item) : item[column.name]
          }
        })
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
      // console.log(this.staticColumns)
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
    }
  },
  components: { NioImageTitleSubtitleSlot, NioCheckbox, NioRadioButton }
}
</script>

<style lang="sass" scoped>
  @import '../../styles/mixins/table/_slat-table'  
</style>