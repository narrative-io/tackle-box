@@ -1,508 +0,0 @@
<template lang="pug">
  div
    h1 Simple Timestamp
    NioFilterGroup(:filters="filters")
</template>

<script>

import NioFilterGroup from '@/components/filter/FilterGroup'
import NioFilter from '@/components/filter/Filter'
import Default from './instances/default'

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
  },
  methods: {
   
  }
};
</script>

<style lang="sass" scoped>
 
</style>