<template lang="pug">
  .test-filters {{ filters }}
    NioFilterGroup(:filters="filters")
</template>

<script>

import NioFilterGroup from '@/components/filter/FilterGroup'
import NioFilter from '@/components/filter/Filter'

const filters = [
  {
    name: "filter1",
    type: "timestamp",
    title: "Filter 1",
    description: "Test description",
  },
  {
    name: "filter2",
    type: "number",
    title: "Filter 2",
    description: "Test description 2",
    value: 'custom',
		customOption: {
			config: {
				min: 10,
				max: 100
			},
			value: {
				amount: 20
			}
		}
  },
  {
    name: "filter3",
		type: "number",
    title: "Filter 3",
		description: "Test description 3",
		value: 'custom',
		customOption: {
			config: {
				min: 10,
				max: 100
			},
			value: {
				minAmount: 25,
				maxAmount: 135
			}
		}
  },
  {
    name: "filter2",
    type: "stringMany",
    title: "Filter 2",
    description: "Test description 2"
  },
  {  
    name: "filter2",
    type: "frequency",
    title: "Filter 2",
    description: "Test description 2"
  }
]

export default {
  components: {
    NioFilterGroup,
    NioFilter
  },
  data: () => ({
    filters: filters,
    activeFilterName: null
  }),
  mounted() {
    this.activeFilterName = this.filters[0].name
  },
  watch: {
    activeFilterName(val) {
      console.log(val)
    }
  }
};
</script>

<style lang="sass" scoped>
.test-filters
 
</style>