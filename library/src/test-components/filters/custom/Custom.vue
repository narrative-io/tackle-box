@@ -1,508 +0,0 @@
<template lang="pug">
  div
    h1 Custom
    NioFilterGroup(:filters="filters")
      template(v-slot:filter-properties-custom-custom="filter")
        .value {{ filter }}
        .test
          v-text-field(
            v-model="filter.customOption.value"
          )
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
  watch: {
    filters: {
      deep: true,
      handler: function(val) {
        console.log(val)
      }
    }
  }
};
</script>

<style lang="sass" scoped>
 
</style>