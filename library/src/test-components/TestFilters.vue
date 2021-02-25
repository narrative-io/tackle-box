<template lang="pug">
  .test-filters {{ filters }}
    NioFilterGroup(:filters="filters")
</template>

<script>

import NioFilterGroup from '@/components/filter/FilterGroup'
import NioFilter from '@/components/filter/Filter'

export default {
  components: {
    NioFilterGroup,
    NioFilter
  },
  data: () => ({
    activeFilterName: null,
    filters: [
      // {
      //   name: "filter1",
      //   type: "eventTimestamp",
      //   title: "Event Timestamps Default",
      //   description: "Define the timestamps you want included in your subscription.",
      //   value: {
      //     dateRange: "default",
      //     rollingLookback: "default"
      //   },
      //   customOption: {
      //     dateRange: {
      //       config: {
              
      //       },
      //       value: ["2021-02-24", "2021-03-21"]
      //     }
      //   },
      //   valid: true
      // },
      // {
      //   name: "filter2",
      //   type: "eventTimestamp",
      //   title: "Event Timestamps",
      //   description: "Define the timestamps you want included in your subscription.",
      //   value: {
      //     dateRange: "default",
      //     rollingLookback: "default"
      //   },
      //   customOption: {
      //     dateRange: {
      //       config: {
      //         startMin: "2021-01-01",
      //         startMax: "2021-03-30",
      //         stopMin: "2021-02-30",
      //         stopMax: "2021-12-30"
      //       },
      //       value: ["2021-02-24", "2021-03-21"]
      //     },
      //     rollingLookback: {
      //       config: {
      //         periodOptions: [
      //           {
      //             label: 'Days',
      //             value: 'day'
      //           },
      //           {
      //             label: 'Weeks',
      //             value: 'week'
      //           },
      //           {
      //             label: 'Months',
      //             value: 'months'
      //           }
      //         ]  
      //       },
      //       value: [15, 'day']
      //     }
      //   },
      //   valid: true
      // },
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
      {
        name: "resourceID",
        type: "stringMany",
        title: "Resource ID",
        description: "Test description 2",
        value: "default",
        options: [
          {
            label: `All Resource IDs`,
            value: 'default',
          },
          {
            label: "Include if present",
            value: 'ifPresent',
          },
          {
            label: 'Custom',
            value: 'custom',
          }
        ],
        customOption: {
          config: {
            list: {
              columns: null,
              items: null
            }
          },
          value: {
            entryType: 'list',
            listType: 'include',
            items: [{
							id: 1,
							orderNum: 245,
							name: 'item1',
							label: 'Item 1',
							listId: 103324,
							count: 123521345234
						}]
          }
        }
      },
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
  }),
  mounted() {
    this.filters.find(filter => filter.name === 'resourceID').customOption.config.list.items = this.getListItems() 
    this.filters.find(filter => filter.name === 'resourceID').customOption.config.list.columns = this.getColumns() 
    this.activeFilterName = this.filters[0].name
  },
  watch: {
    activeFilterName(val) {
      console.log(val)
    }
  },
  methods: {
    computeIdCount(item) {
      return `${item.count} ids`
		},
		computeSubtitle(item) {
			return `Order #${item.orderNum}`
		},
    getColumns() {
      return [
        {
					name: "slat",
					props: {
						title: "name",
						subtitle: this.computeSubtitle
					}
        },
        {
          name: "listId",
          label: "List ID",
        },
        {
          name: "idCount",
          label: "ID Count",
          computed: this.computeIdCount
        } 
      ]
    },
    getListItems() {
      return [
        {
					id: 1,
					orderNum: 245,
          name: 'item1',
          label: 'Item 1',
          listId: 103324,
          count: 123521345234
        },
        {
          id: 2,
					name: 'item2',
					orderNum: 246,
          label: 'Item 2',
          listId: 5345533,
          count: 2342341234
        },
        {
          id: 3,
					name: 'item2',
					orderNum: 247,
          label: 'Item 2',
          listId: 23466564,
          count: 2342134543
        }
      ]
    }
  }
};
</script>

<style lang="sass" scoped>
.test-filters
 
</style>