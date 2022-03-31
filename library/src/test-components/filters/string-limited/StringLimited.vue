<template lang="pug">
  div
    h1 StringLimited
    NioFilterGroup(:filters="filters")
    NioButton(@click="setDisabled") Set disabled
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
import Searchable from './instances/Searchable'
import Join from './instances/Join'
import NioButton from '../../../components/Button'

export default {
  components: {
    NioFilterGroup,
    NioFilter,
    NioButton
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
      IncludeExcludeCustomText,
      Searchable,
      Join
    ]
  }),
  mounted() {
    this.activeFilterName = this.filters[0].name
  },
  methods: {
    setDisabled() {
      this.filters[0].disabled = true
    }
  }
};
</script>

<style lang="sass" scoped>

  
</style>