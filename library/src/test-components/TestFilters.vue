<template lang="pug">
  .test-filters
    NioFilterGroup
      NioFilter(
        name="filter1"
        title="Filter 1"
        description="Test desscription"
      )
      NioFilter(
        name="filter2"
        title="Filter 2"
        description="Test desscription 2"
      )
</template>

<script>

import NioFilterGroup from '@/components/filter/FilterGroup'
import NioFilter from '@/components/filter/Filter'

export default {
  components: {
    NioFilterGroup,
    NioFilter
  },
  data: () => ({
   
  })
};
</script>

<style lang="sass" scoped>
.test-filters
 
</style>