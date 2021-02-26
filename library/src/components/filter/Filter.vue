<template lang="pug">
  v-expansion-panel.nio-filter(
    :key="filter.name"
  )
    v-expansion-panel-header
      NioFilterHeader(
        :title="filter.title"
        :description="filter.description"
        :value="value"
      )
    v-expansion-panel-content(eager)
      NioFilterBody(
        :filter="filter"
        @valueChanged="handleValueChange($event)"
      )
</template>

<script>

import NioFilterHeader from './FilterHeader'
import NioFilterBody from './FilterBody'

export default {
  name: 'nio-filter',
  props: {
    "filter": { type: Object, required: true }
  },
  data: () => ({
    value: null
  }),	
  methods: {
    handleValueChange(newValue) {
			console.log(newValue)
      this.value = newValue
    }
  },
  components: { NioFilterHeader, NioFilterBody }
}
</script>

<style lang="sass" scoped>
  @import '@/styles/mixins/filter/_filter'  
</style>