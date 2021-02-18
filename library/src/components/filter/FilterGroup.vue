<template lang="pug">
  v-expansion-panels.nio-filter-group(accordion v-model="model")
    NioFilter(
      v-for="filter in filters"
      :filter="filter"
    )
</template>

<script>

import NioFilter from './Filter'

export default {
  name: 'nio-filter-group',
  props: {
    "filters": { type: Array, required: true },
  },
  data: () => ({
    model: null
  }),
  components: { NioFilter }
}
</script>

<style lang="sass" scoped>
  @import '@/styles/mixins/filter/_filter-group'  
</style>