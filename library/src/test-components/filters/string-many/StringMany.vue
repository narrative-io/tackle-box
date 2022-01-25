<template lang="pug">
  div
    h1 StringMany
    NioFilterGroup(:filters="filters")
</template>

<script>

import NioFilterGroup from '@/components/filter/FilterGroup'
import NioFilter from '@/components/filter/Filter'
import Default from './instances/Default'
import IncludeExclude from './instances/IncludeExclude'
import ManualEntryOnly from './instances/ManualEntryOnly'
import ManualEntryOnlyIncludeExclude from './instances/ManualEntryOnlyIncludeExclude'
import DefaultWithJoin from './instances/DefaultWithJoin'

export default {
  components: {
    NioFilterGroup,
    NioFilter
  },
  data: () => ({
    activeFilterName: null,
    filters: [
      Default,
      IncludeExclude,
      ManualEntryOnly,
			ManualEntryOnlyIncludeExclude,
			DefaultWithJoin
    ]
  }),
  mounted() {
    this.activeFilterName = this.filters[0].name
	}
};
</script>

<style lang="sass" scoped>
 
</style>