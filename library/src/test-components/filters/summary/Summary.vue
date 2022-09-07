<template lang="pug">
  div
    h1 Summaries
    NioFilterGroup(
      summary
      :filters="filters"
    )
</template>

<script>

import NioFilterGroup from '@/components/filter/FilterGroup'
import NioFilter from '@/components/filter/Filter'
import Boolean from './instances/Boolean'

export default {
  components: {
    NioFilterGroup,
    NioFilter
  },
  data: () => ({
    activeFilterName: null,
    filters: [
      ...Boolean
    ]
  }),
  mounted() {
    this.activeFilterName = this.filters[0].name
	}
};
</script>

<style lang="sass" scoped>
 
</style>