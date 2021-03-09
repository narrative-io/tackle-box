<template lang="pug">
  div
    h1 StringLimited
    NioFilterGroup(:filters="filters")
</template>

<script>

import NioFilterGroup from '@/components/filter/FilterGroup'
import NioFilter from '@/components/filter/Filter'
import Single from './instances/Single'
import Multiple from './instances/Multiple'
import SingleLabel from './instances/SingleLabel'
import IncludeExclude from './instances/IncludeExclude'

export default {
  components: {
    NioFilterGroup,
    NioFilter
  },
  data: () => ({
    activeFilterName: null,
    filters: [
      Single,
      Multiple,
      SingleLabel,
      IncludeExclude
    ]
  }),
  mounted() {
    this.activeFilterName = this.filters[0].name
  },
  methods: {
    getLimitedItems() {
      return [
        { 
          value: 'US',
          label: 'US'
        },
        {
          value: 'CD',
          label: 'Canada'
        },
        {
          value: 'AU',
          label: 'Australia'
        }
      ]	
    }
  }
};
</script>

<style lang="sass" scoped>

  
</style>