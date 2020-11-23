<template lang="pug">
  .test-slat-table
    NioSlatTable(
      v-if="columns && items"
      :items="items"
      :columns="columns"
    )
</template>

<script>

const items = [
  {
    imageSrc: "https://picsum.photos/64/64",
    orderName: "My Offline Customers - Onboared",
    orderNumber: "36658334",
    spent: "500",
    budget: "2400",
    expires: new Date()
  },
  {
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
            title: "orderName",
            subtitle: "orderNumber"
          },
          computed: {
            image: this.computeOrderName,
            orderNumber: this.computeOrderNumber
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
</style>