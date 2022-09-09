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
import StringLimited from './instances/StringLimited'
import StringMany from './instances/StringMany'
import Number from './instances/Number'
import SimpleTimestamp from './instances/SimpleTimestamp'
import Join from './instances/Join'

export default {
  components: {
    NioFilterGroup,
    NioFilter
  },
  data: () => ({
    activeFilterName: null,
    filters: [
      ...Boolean,
      ...StringLimited,
      ...StringMany,
      ...Number,
      ...SimpleTimestamp,
      ...Join
    ]
  }),
  mounted() {
    this.activeFilterName = this.filters[0].name
	}
};
</script>

<style lang="sass" scoped>
 
</style>