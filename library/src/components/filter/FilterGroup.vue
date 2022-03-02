<template lang="pug">
  v-expansion-panels.nio-filter-group(accordion v-model="model")
    NioFilter(
      v-for="filter in filters"
      :filter="filter"
      :filter-obj-custom-option-loading="!filter.customOption || filter.customOption.loading"
    )
      template(
        v-for="(index, name) in $scopedSlots" 
        v-slot:[name]="data"
      )
        slot(
          v-bind="data"
          :name="name" 
        )
</template>

<script>

import NioFilter from './Filter'

export default {
  name: 'nio-filter-group',
  components: { NioFilter },
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
  watch: {
    valid(val) {
      this.$emit('validChanged', this.valid)
    }
  },
  mounted() {
    this.$emit('validChanged', this.valid)
  }
}
</script>

<style lang="sass" scoped>
  @import '@/styles/mixins/filter/_filter-group'  
</style>