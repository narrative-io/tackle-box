<template lang="pug">
  div
    h1 StringLimited
    NioFilterGroup(:filters="filters")
</template>

<script>

import NioFilterGroup from '@/components/filter/FilterGroup'
import NioFilter from '@/components/filter/Filter'
import Default from './instances/Default'
import DefaultPrimitive from './instances/DefaultPrimitive'
import Multiple from './instances/Multiple'
import MultiplePrimitive from './instances/MultiplePrimitive'
import CustomLabel from './instances/CustomLabel'
import IncludeExclude from './instances/IncludeExclude'
import IncludeExcludeCustomText from './instances/IncludeExcludeCustomText'

export default {
  components: {
    NioFilterGroup,
    NioFilter
  },
  data: () => ({
    activeFilterName: null,
    filters: [
      Default,
      DefaultPrimitive,
      Multiple,
      MultiplePrimitive,
      CustomLabel,
			IncludeExclude,
			IncludeExcludeCustomText
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