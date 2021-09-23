<template lang="pug">
  .test-overflow-menu
    .item(
      v-for="item of items"
    )
      .nio-p.text-primary-darker {{ item.name }}
      NioOverflowMenu(
        :data="item"
      )
        template(v-slot:items)  
          v-list
            v-list-item Update budget for item # {{ item.id }}
            v-list-item View item {{ item.id }}
            v-list-item Visit item # {{ item.id }}  
</template>

<script>

import NioOverflowMenu from '../components/OverflowMenu'

export default {
  components: {
    NioOverflowMenu
  },
  data: () => ({
    items: [
      {
        id: 1,
        name: 'Item 1'
      },
      {
        id: 2,
        name: 'Item 2'
      },
      {
        id: 3,
        name: 'Item 3'
      },
      {
        id: 4,
        name: 'Item 4'
      }
    ]
  })
};
</script>

<style lang="sass" scoped>

@import '../styles/global/_colors'

.test-overflow-menu
  .item
    display: flex
    border-bottom: 1px solid $c-primary-lighter
    padding: 16px 24px
    justify-content: space-between
</style>