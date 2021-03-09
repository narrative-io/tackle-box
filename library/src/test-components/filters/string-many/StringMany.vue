<template lang="pug">
  .test-filters
    NioFilterGroup(:filters="filters")
</template>

<script>

import NioFilterGroup from '@/components/filter/FilterGroup'
import NioFilter from '@/components/filter/Filter'
import Default from './instances/Default'

export default {
  components: {
    NioFilterGroup,
    NioFilter
  },
  data: () => ({
    activeFilterName: null,
    filters: [
			Default
    ]
  }),
  mounted() {
		this.activeFilterName = this.filters[0].name
  }
};
</script>

<style lang="sass" scoped>
.test-filters
 
</style>