<template lang="pug">
  .test-slat-table
    NioSlatTable(
      v-if="items && smallHeaders"
      :items="items"
      :columns="smallHeaders"
      key="20"
      action="custom"
    )
      template(v-slot:custom-action="slotProps") 
        NioButton(normal-secondary) Test  

    NioSlatTable(
      v-if="items && smallHeaders"
      :items="items"
      :columns="smallHeaders"
      single-select
      key="12"
    )
    NioSlatTable(
      v-if="paymentMethods && headers"
      :items="paymentMethods"
      :columns="headers"
      :defaultSelection="1"
      count-header
    )
    NioSlatTable(
      v-if="columns && items"
      :items="items"
      :columns="columns"
      action="expand"
      key="1"
      pagination
      search-sort-header
      @itemExpanded="itemExpanded($event)"
      @itemCollapsed="itemCollapsed($event)"
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
      action="expand"
      @itemClicked="itemClicked($event)"
      @selectionChanged="selectionChanged($event)"
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
      key="9"
    )
    NioSlatTable(
      v-if="columns && items"
      :items="items"
      :columns="columns"
      @selectionChanged="selectionChanged($event)"
      pagination
      key="6"
    )
    NioSlatTable(
      v-if="columns && items"
      :items="items"
      :columns="columns"
      @selectionChanged="selectionChanged($event)"
      count-header
      key="8"
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
    sortOptions: testSortOptions,
    headers: null,
    smallHeaders: null,
    paymentMethods: [
      {
        id: 1,
        cardType: 'Visa',
        name: 'Chris Woodward',
        expiration: '01/2021'
      }
    ]
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
    computeHeaders() {
      this.headers = [
        {
          name: "slat",
          props: {
            image: this.computeImgSrc,
            title: this.computeTitle,
            subtitle: "name"
          }
        },
        {
          name: "expiration",
          label: "Expires",
					computed: this.computeExpiration,
					addItemAsClass: true
        }
      ]
    },
    computeSmallHeaders() {
      this.smallHeaders = [
        {
          name: "slat",
          props: {
            image: "imageSrc",
            title: this.computeOrderName,
            subtitle: this.computeOrderNumber
          }
        }
      ]  
    },
    computeExpiration(item) {
      return '01/2021'
    },
    computeImgSrc(item) {
      
    },
    computeTitle(item) {
      return 'cardType'
    },
    computeSubtitle(item) {
      return '01/2021'
    },
    menuItemClicked(event, item) {
      alert(`Menu item clicked. Event: ${event}, itemId: ${item.id}`)
    },
    itemExpanded(item) {
      console.log('expanded')
      console.log(item)
    },
    itemCollapsed(item) {
      console.log('collapsed')
      console.log(item)
    }
  },
  mounted() {
    this.makeItems()
    this.computeHeaders()
    this.computeSmallHeaders()
  }
};
</script>

<style lang="sass" scoped>
.test-slat-table
  .nio-slat-table
    margin: 30px 0px
</style>