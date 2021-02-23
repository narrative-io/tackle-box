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
    type: "eventTimestamp",
    title: "Event Timestamps Default",
    description: "Define the timestamps you want included in your subscription.",
    value: {
      dateRange: "default",
      rollingLookback: "default"
    },
    customOption: {
      dateRange: {
        config: {
          
        },
        value: ["2021-02-24", "2021-03-21"]
      }
    }	
  },
  {
    name: "filter2",
    type: "eventTimestamp",
    title: "Event Timestamps",
    description: "Define the timestamps you want included in your subscription.",
    value: {
      dateRange: "default",
      rollingLookback: "default"
    },
    customOption: {
      dateRange: {
        config: {
          startMin: "2021-01-01",
          startMax: "2021-03-30",
          stopMin: "2021-02-30",
          stopMax: "2021-12-30"
        },
        value: ["2021-02-24", "2021-03-21"]
      }
    }	
  },

  // {
  //   name: "age",
  //   type: "number",
  //   title: "Age",
  //   description: "Number",
  //   value: 'default',
  //   options: [
  //       {
  //       label: `Include all ages 13 and up`,
  //       value: 'default',
  //     },
  //     {
  //       label: "Include if present",
  //       value: 'ifPresent',
  //     },
  //     {
  //       label: 'Custom',
  //       value: 'custom',
  //     }
  //   ],
  //   customOption: {
  //     config: {
  //       min: 10,
  //       max: 100
  //     },
  //     value: 20
  //   }
  // },
  // {
  //   name: "filter3",
  //   type: "number",
  //   title: "Number",
  //   description: "Test description 3",
  //   value: 'custom',
  //   customOption: {
  //     config: {
  //       range: true,
  //       min: 10,
  //       max: 200
  //     },
  //     value: [25, 135]
  //   }
  // },
  // {
  //   name: "stringMany",
  //   type: "stringMany",
  //   title: "String Many",
  //   description: "Test description 2",
  //   value: "default"
  // },
  // {  
  //   name: "stringLimited",
  //   type: "stringLimited",
  //   title: "String Limited",
  //   description: "Test description 2",
  //   value: "default"
  // },
  // {  
  //   name: "frequency",
  //   type: "frequency",
  //   title: "Frequency",
  //   description: "Test description 2",
  //   value: "default"
  // }
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