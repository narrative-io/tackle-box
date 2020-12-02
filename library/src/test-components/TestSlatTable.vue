<template lang="pug">
  .test-slat-table
    NioSlatTable(
      v-if="columns && items"
      :items="items"
      :columns="columns"
      action="expand"
      key="1"
      pagination
      search-sort-header
      :sortOptions="sortOptions"
      :initialItemsPerPage="10"
      :searchableProps="['orderName', 'orderNumber']"
    )
      template(v-slot:footer-actions)
        NioButton(normal-primary-append iconName="utility-plus") New Item
      template(v-slot:item-expanded="slotProps") {{ slotProps.item }}    
    NioSlatTable(
      v-if="columns && items"
      :items="items"
      :columns="columns"
      action="expand"
      dense-rows
      key="5"
      footer-actions
      pagination
      :sortOptions="sortOptions"
    )
      template(v-slot:footer-actions)
        NioButton(normal-secondary-prepend iconName="utility-chevron-left") Back
        NioButton(normal-primary-append iconName="utility-plus") New Item
      template(v-slot:item-expanded="slotProps") {{ slotProps.item }}   
    NioSlatTable(
      v-if="columns && items"
      :items="items"
      :columns="columns"
      single-select
      @selectionChanged="selectionChanged($event)"
      action="menu"
      key="2"
      footer-actions
      selected-header
    )
      template(v-slot:footer-actions)
        NioButton(normal-secondary-prepend iconName="utility-chevron-left") Back
        NioButton(normal-primary-append iconName="utility-plus") New Item
      template(v-slot:item-menu="slotProps")  
        v-list
          v-list-item(@click="menuItemClicked('updateBudget', slotProps.item)") Update budget
          v-list-item(@click="menuItemClicked('updateExpiration', slotProps.item)") Update Expiration
          v-list-item(@click="menuItemClicked('delete', slotProps.item)") Delete {{ slotProps.item.orderNumber }}
      template(v-slot:item-expanded="slotProps") {{ slotProps.item }}        
    NioSlatTable(
      v-if="columns && items"
      :items="items"
      :columns="columns"
      multi-select
      @selectionChanged="selectionChanged($event)"
      action="link"
      @itemClicked="itemClicked($event)"
      key="3"
      pagination
      selected-search-header
      :searchableProps="['orderName', 'orderNumber']"
    )
      template(v-slot:item-expanded="slotProps") {{ slotProps.item }}     
    NioSlatTable(
      v-if="columns && items"
      :items="items"
      :columns="columns"
      multi-select
      @selectionChanged="selectionChanged($event)"
      @itemClicked="itemClicked($event)"
      action="link"
      key="4"
    )
    NioSlatTable(
      v-if="columns && items"
      :items="items"
      :columns="columns"
      @selectionChanged="selectionChanged($event)"
      key="6"
    )
    NioSlatTable(
      v-if="columns && items"
      :items="items"
      :columns="columns"
      multi-select
      @selectionChanged="selectionChanged($event)"
      key="7"
    )
</template>

<script>


import NioSlatTable from '../components/table/SlatTable'
import NioButton from '../components/Button'
import { VButton, VExpansionPanels, VExpansionPanel } from 'vuetify'
import { testItems } from './mocks/slatTableItems'
import { testSortOptions } from './mocks/slatTableSortOptions'

export default {
  components: {
    NioSlatTable,
    NioButton,
    VButton,
    VExpansionPanels,
    VExpansionPanel
  },
  data: () => ({
    columns: null,
    items: testItems,
    sortOptions: testSortOptions
  }),
  methods: {
    selectionChanged(val) {
      console.log(val)
    },
    computeOrderName(item) {
      return `${item.orderName}`
    },
    computeOrderNumber(item) {
      return `#${item.orderNumber}`
    },
    computeSpentBudget(item) {
      return `$${item.spent}/$${item.budget}`
    },
    computeExpires(item) {
      return this.formatDate(item.expires)
    },
    formatDate(date) {
      return `${date.getFullYear()}`
    },
    itemClicked(item) {
      alert(`item clicked: id = ${item.id}`)
    },
    makeItems() {
      this.columns = [
        {
          name: "slat",
          props: {
            image: "imageSrc",
            title: this.computeOrderName,
            subtitle: this.computeOrderNumber
          }
        },
        {
          name: "spentBudget",
          label: "Spent/Budget",
          computed: this.computeSpentBudget
        },
        {
          name: "expires",
          label: "Expires"
        }
      ]  
    },
    menuItemClicked(event, item) {
      alert(`Menu item clicked. Event: ${event}, itemId: ${item.id}`)
    }
  },
  mounted() {
    this.makeItems()
  }
};
</script>

<style lang="sass" scoped>
.test-slat-table
  .nio-slat-table
    margin: 30px 0px
</style>