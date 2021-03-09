<template lang="pug">
  .test-filters
    NioFilterGroup(:filters="filters")
   
</template>

<script>

import NioFilterGroup from '@/components/filter/FilterGroup'
import NioFilter from '@/components/filter/Filter'
import Single from './instances/Single'

export default {
  components: {
    NioFilterGroup,
    NioFilter
  },
  data: () => ({
    activeFilterName: null,
    filters: [
      Single
    ]
  }),
  mounted() {
    // this.filters.find(filter => filter.type === 'stringLimited').customOption.config.items = this.getLimitedItems() 
    // this.filters.find(filter => filter.type === 'stringMany').customOption.config.list.items = this.getListItems() 
    // this.filters.find(filter => filter.type === 'stringMany').customOption.config.list.columns = this.getColumns() 
    // this.filters.find(filter => filter.type === 'stringManyIncludeExclude').customOption.config.list.items = this.getListItems() 
    // this.filters.find(filter => filter.type === 'stringManyIncludeExclude').customOption.config.list.columns = this.getColumns() 

    // this.filters.find(filter => filter.type === 'stringLimitedIncludeExclude').customOption.config.items = this.getLimitedItems() 
    
    // this.filters.find(filter => filter.type === 'stringLimitedMapping').customOption.left.config.items = this.getLimitedItems() 
    // this.filters.find(filter => filter.type === 'stringLimitedMapping').customOption.right.config.items = this.getLimitedItems() 
		console.log(this.filters)
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
.test-filters
 
</style>