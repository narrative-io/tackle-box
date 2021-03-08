<template lang="pug">
  v-expansion-panels.nio-filter-group(accordion v-model="model")
    NioFilter(
      v-for="filter in filters"
      :filter="filter"
    )
      template(v-for="(index, name) in $scopedSlots" v-slot:[name]="data")
        slot(:name="name" v-bind="data")
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
  computed: {
    valid() {
      return this.filters.find(filter => !filter.valid) === undefined
    }
  },
  mounted() {
    this.$emit('validChanged', this.valid)
  },
  watch: {
    valid(val) {
      this.$emit('validChanged', this.valid)
    }
  },
  components: { NioFilter }
}
</script>

<style lang="sass" scoped>
  @import '@/styles/mixins/filter/_filter-group'  
</style>