<template lang="pug">
  .test-filters
    NioFilterGroup(:filters="[...filters, customFilter]")
      //- template(v-slot:filter-header-custom-customFilter="{ filter: customFilter }")
      //-   .test {{ customFilter }} 
      //- template(v-slot:filter-body-custom-customFilter="{ filter: customFilter }")
      //-   .test {{ customFilter }}
    //- NioFilter(
    //-   solo
    //-   :filter="filters[0]"
    //- )
    //- NioFilter(
    //-   solo
    //-   :filter="customFilter"
    //- )
    //-   template(v-slot:filter-properties-custom="{ filter: customFilter }")
    //-     .test {{ customFilter }}
      
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
    customFilter: {
      name: "customFilter",
      type: "custom",
      title: "Custom Filter",
      description: "Test description 2",
      value: "default",
      options: [
        {
          label: `All Country Codes`,
          value: 'default',
        },
        {
          label: 'Custom',
          value: 'custom',
        }
      ],
      customOption: {
        config: {
          list: {
            items: null,
          }
        },
        value: [{ 
          value: 'US',
          label: 'US'
        }]
      }
    },
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
      //   text: {
      //     dateRange: {
      //       heading: "Date Range",
      //       description: "Pick a start and end date of event timestamps to include."
      //     },
      //     rollingLookback: {
      //       heading: "Rolling Lookback",
      //       description: "From your start date, define how far back in time you'd like to include."
      //     }
      //   },
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
      //       value: [15, {
      //         label: 'Days',
      //         value: 'day'
      //       }]
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
      //   name: "resourceID",
      //   type: "stringMany",
      //   title: "Resource ID",
      //   description: "Test description 2",
      //   value: "default",
      //   options: [
      //     {
      //       label: `All Resource IDs`,
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
      //       list: {
      //         columns: null,
      //         items: null,
      //         searchableProps: ['name']
      //       }
      //     },
      //     value: {
      //       entryType: 'list',
      //       listType: 'include',
      //       items: [{
      //         id: 1,
      //         orderNum: 245,
      //         name: 'item1',
      //         label: 'Item 1',
      //         listId: 103324,
      //         count: 123521345234
      //       }],
      //       manualEntry: 'stuff'
      //     }
      //   }
      // },
      {
        name: "countryCodes",
        type: "stringLimitedIncludeExclude",
        title: "Country Codes",
        description: "Test description 2",
        value: "default",
        options: [
          {
            label: `All Country Codes`,
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
            
            items: null,
            text: {
              include: {
                heading: 'test inclusion title',
                deascription: 'test description'
              },
              exclude: {
                heading: 'test exclusion title',
                deascription: 'test description'
              }
            }
          },
          value: {
            listType: 'include',
            items: [{ 
              value: 'US',
              label: 'US'
            }]
          }  
        }
      },
      // {
      //   name: "deduplication",
      //   type: "frequency",
      //   title: "Deduplication",
      //   description: "Detail how often do you want to buy the same data point.",
      //   value: "default",
      //   options: [
      //     {
      //       label: `Inlclude all Data Points`,
      //       value: 'default',
      //     },
      //     {
      //       label: 'Custom',
      //       value: 'custom',
      //     }
      //   ],
      //   customOption: {
      //     heading: 'Deduplication Strategy',
      //     description: 'Exclude irrelevant or redundant data even when you buy from multiple suppliers.',
      //     frequency: {
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
      //       value: [15, {
      //         label: 'Days',
      //         value: 'day'
      //       }]
      //     },
      //     supportingOption: {
            
      //       config: {
      //         // items: [
      //         //   {
      //         //     label: 'Days',
      //         //     value: 'day'
      //         //   },
      //         //   {
      //         //     label: 'Weeks',
      //         //     value: 'week'
      //         //   },
      //         //   {
      //         //     label: 'Months',
      //         //     value: 'months'
      //         //   }
      //         // ]
      //         items: [
      //           'apple',
      //           'banana',
      //           'pear'
      //         ]
      //       },
      //       // value: [{
      //       //   label: 'Days',
      //       //   value: 'day'
      //       // }]
      //       value: ['pear']
      //     }
      //   }
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
  }),
  mounted() {
    // this.filters.find(filter => filter.name === 'resourceID').customOption.config.list.items = this.getListItems() 
    // this.filters.find(filter => filter.name === 'resourceID').customOption.config.list.columns = this.getColumns() 
    this.filters.find(filter => filter.type === 'stringLimitedIncludeExclude').customOption.config.items = this.getLimitedItems() 
    this.activeFilterName = this.filters[0].name
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
    },
    getListItems() {
      return [
        {
          id: 1,
          orderNum: 245,
          name: 'item1 test',
          label: 'Item 1',
          listId: 103324,
          count: 123521345234
        },
        {
          id: 2,
          name: 'item2 apple',
          orderNum: 246,
          label: 'Item 2',
          listId: 5345533,
          count: 2342341234
        },
        {
          id: 3,
          name: 'item2 banana',
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