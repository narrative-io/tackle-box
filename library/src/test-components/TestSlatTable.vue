<template lang="pug">
  .test-slat-table
    h2 Header modules
    h3 ['sort']
    //- NioSlatTable(
    //-   v-if="columns && items"
    //-   :items="items"
    //-   :columns="columns"
    //-   :sortOptions="sortOptions"
    //-   :headerModules="['sort']"
    //-   action="expand-custom"
    //-   key="200"
    //- )
    //-   template(v-slot:item-expanded="slotProps") Test
    //-   template(v-slot:custom-action="slotProps") Custom Action
    h3 ['search']
    NioSlatTable(
      v-if="columns && items"
      :items="items"
      :columns="columns"
      key="201"
      :searchableProps="['orderName', 'orderNumber']"
      :headerModules="['search']"
    )
    NioSlatTable(
      v-if="columns && items"
      :items="items"
      :columns="columns"
      :searchConfig="searchOptions"
      key="2013"
      :searchableProps="['orderName', 'orderNumber']"
      :headerModules="['search']"
    )
    h3 ['count']
    NioSlatTable(
      v-if="columns && items"
      :items="items"
      :columns="columns"
      key="202"
      :headerModules="['count']"
    )
    h3 ['selected']
    NioSlatTable(
      v-if="columns && items"
      :items="items"
      :columns="columns"
      multi-select
      key="203"
      :headerModules="['selected']"
    )
    h3 ['selected', 'sort']
    NioSlatTable(
      v-if="columns && items"
      :items="items"
      :columns="columns"
      multi-select
      key="204"
      :headerModules="['selected', 'sort']"
      :sortOptions="sortOptions"
    )
    h3 ['search', 'sort']
    NioSlatTable(
      v-if="columns && items"
      :items="items"
      :columns="columns"
      multi-select
      key="205"
      :headerModules="['search', 'sort']"
      :searchableProps="['orderName', 'orderNumber']"
      :sortOptions="sortOptions"
    )

    NioSlatTable(
      v-if="columns && items"
      :items="items"
      :columns="columns"
      :sortOptions="sortOptions"
      sort-header
      key="7"
    )
    NioSlatTable(
      v-if="columns && items"
      :items="items"
      :columns="columns"
      action="expand"
      multi-select
      dense-rows
      key="5"
      footer-actions
      pagination
      search-sort-header
      :searchableProps="['orderName']"
      :sortOptions="sortOptions"
      @paginationPageChanged="paginationPageChanged($event)"
    )
      template(v-slot:custom-header-element)
        .test Test Custom Header
      template(v-slot:footer-actions)
        NioButton(normal-secondary-prepend iconName="utility-chevron-left") Back
        NioButton(normal-primary-append iconName="utility-plus") New Item
      template(v-slot:item-expanded="slotProps") {{ slotProps.item }}  
    h2 Listing plain
    NioSlatTable(
      v-if="items && plainColumns"
      listing-plain
      :items="items"
      :columns="plainColumns"
      key="101"
      action="custom"
    )
      template(v-slot:custom-action="slotProps") 
        NioButton(normal-secondary) Test  
    h2 small-headers
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
      :items="oneItem"
      :columns="smallHeaders"
      single-select
      key="12"
    )
      template(v-slot:footer-actions)
        NioButton(normal-secondary) Update Payment Method
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
    plainColumns: null,
    oneItem: [testItems[0]],
    items: testItems,
    sortOptions: testSortOptions,
    searchOptions: {
      findAllMatches: true
    }, 
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
    paginationPageChanged(page) {
      console.log(page)
    },
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
    makePlainColumns() {
      this.plainColumns = [
        {
          name: "slat",
          props: {
            title: this.computeOrderName,
          }
        },
        {
          name: "expiration",
          computed: this.daysToAccessExpiration
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
          }
        }
      ]  
    },
    daysToAccessExpiration(item) {
      return `Expires on ${item.expiration}`
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
    this.makePlainColumns()
    setTimeout(() => {
      this.items.push({
        id: 15,
        imageSrc: "https://picsum.photos/64/64",
        orderName: "Added list",
        orderNumber: 426,
        spent: 500,
        budget: 24000,
        expires: "Jan 01 2020"
      })
    }, 5000);
  }
};
</script>

<style lang="sass" scoped>
.test-slat-table
  .nio-slat-table
    margin: 30px 0px
</style>