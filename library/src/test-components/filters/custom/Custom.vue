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
      template
        v-expansion-panel.test-filter(
          key="test"
        )
          v-expansion-panel-header
            .header-test Test Header
          v-expansion-panel-content
            .body-test Test Body
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
@import '../../../styles/mixins/filter/_filter'

.test-filter
  +nio-filter
</style>