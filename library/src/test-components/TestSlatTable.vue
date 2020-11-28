<template lang="pug">
  .test-slat-table
    NioSlatTable(
      v-if="columns && items"
      :items="items"
      :columns="columns"
      action="expand"
      key="1"
      pagination
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
      searchable
      @selectionChanged="selectionChanged($event)"
      action="menu"
      key="2"
      footer-actions
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
      sortable
      @selectionChanged="selectionChanged($event)"
      action="link"
      key="3"
    )
      template(v-slot:item-expanded="slotProps") {{ slotProps.item }}     
    NioSlatTable(
      v-if="columns && items"
      :items="items"
      :columns="columns"
      multi-select
      searchable
      sortable
      @selectionChanged="selectionChanged($event)"
      action="link"
      key="4"
    )
</template>

<script>

const items = [
  {
    id: 1,
    imageSrc: "https://picsum.photos/64/64",
    orderName: "My Offline Customers - Onboared",
    orderNumber: "36658334",
    spent: "500",
    budget: "2400",
    expires: "Jan 01 2020"
  },
  {
    id: 2,
    imageSrc: "https://picsum.photos/64/64",
    orderName: "Another Order",
    orderNumber: "25653324",
    spent: "100",
    budget: "600",
    expires: "Jan 12 2020"
  }
]

import NioSlatTable from '../components/table/SlatTable'
import NioButton from '../components/Button'
import { VButton, VExpansionPanels, VExpansionPanel } from 'vuetify'

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
    items: items
  }),
  methods: {
    selectionChanged(val) {
      console.log(val)
    },
    computeOrderName(item) {
      return `Name: ${item.orderName}`
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