<template lang="pug">
  .component-content
    nio-select.select(
      v-model="selectedItem" 
      :items="items"
      :label="'Choose an item'"
    )
    .selected You selected: {{ selectedItem }}
</template>

<script>

export default {
  data: () => ({
    model: "",
    items: ['item 1', 'item 2', 'item 3'],
    selectedItem: null
  })
}	
</script>

<style lang="sass" scoped>
  @import '../../../../../src/styles/mixins/_select.sass'
  .component-content
    margin: 20px 0px 30px 0px// TODO refactor this to global scope for all pages
    .select
      max-width: 300px
</style>