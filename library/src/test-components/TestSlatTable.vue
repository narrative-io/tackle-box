<template lang="pug">
  .test-slat-table
    NioSlatTable
</template>

<script>

const items = [
  {
    imageSrc: "https://picsum.photos/48/48",
    orderName: "My Offline Customers - Onboared",
    orderNumber: "36658334",
    spent: "500",
    budget: "2400",
    expires: new Date()
  },
  {
    imageSrc: "https://picsum.photos/48/48",
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
    columns: [
      {
        name: "title-subtitle",
        props: ["imageSrc", "orderName", "orderNumber"],
        computed: {
          orderNumber: this.computeOrderNumber
        }
      },
      {
        name: "spent-budget",
        label: "Spent/Budget",
        computed: {
          spentBudget: this.computeSpentBudget
        } 
      },
      {
        name: "expires",
        label: "Expires",
        computed: {
          expires: this.computeExpires
        }
      }
    ]
  }),
  methods: {
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
    }
  }
};
</script>

<style lang="sass" scoped>
.test-slat-table
</style>