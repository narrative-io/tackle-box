<template lang="pug">
  .test-slat-table
    NioSlatTable(
      v-if="columns && items"
      :items="items"
      :columns="columns"
      action="expand"
      key="1"
    )
    NioSlatTable(
      v-if="columns && items"
      :items="items"
      :columns="columns"
      action="expand"
      dense-rows
      key="5"
    )
    NioSlatTable(
      v-if="columns && items"
      :items="items"
      :columns="columns"
      single-select
      searchable
      @selectionChanged="selectionChanged($event)"
      action="menu"
      key="2"
    )
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
    expires: new Date()
  },
  {
    id: 2,
    imageSrc: "https://picsum.photos/64/64",
    orderName: "Another Order",
    orderNumber: "25653324",
    spent: "100",
    budget: "600",
    expires: new Date()
  }
]

import NioSlatTable from '../components/table/SlatTable'

export default {
  components: {
    NioSlatTable
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
      return `${item.spent}/${item.budget}`
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