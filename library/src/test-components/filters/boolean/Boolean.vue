@@ -1,508 +0,0 @@
<template lang="pug">
  div
    h1 Boolean
    NioFilterGroup(:filters="filters")
      template(v-slot:filter-header-name-custom="slotProps")
</template>

<script>

import NioFilterGroup from '@/components/filter/FilterGroup'
import NioFilter from '@/components/filter/Filter'
import Default from './instances/Default'
import Join from './instances/Join'

export default {
  components: {
    NioFilterGroup,
    NioFilter
  },
  data: () => ({
    activeFilterName: null,
    filters: [
      Default,
      Join
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