<template lang="pug">
  .test-filters {{ activeFilterName}}
    NioFilterGroup(:filters="filters")
</template>

<script>

import NioFilterGroup from '@/components/filter/FilterGroup'
import NioFilter from '@/components/filter/Filter'

const filters = [
  {
    name: "filter1",
    title: "Filter 1",
    description: "Test description"
  },
   {
    name: "filter2",
    title: "Filter 2",
    description: "Test description 2"
  }
]

export default {
  components: {
    NioFilterGroup,
    NioFilter
  },
  data: () => ({
    filters: filters,
    activeFilterName: null
  }),
  mounted() {
    this.activeFilterName = this.filters[0].name
  },
  watch: {
    activeFilterName(val) {
      console.log(val)
    }
  }
};
</script>

<style lang="sass" scoped>
.test-filters
 
</style>