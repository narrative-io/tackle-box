<template lang="pug">
  v-data-table.nio-slat-table(
    v-if="headers && computedItems"
    :headers="headers"
    :items="computedItems"
    :items-per-page="10"
  )
    template(
      v-for="column of columns"
      v-slot:column.name="{ item }"
    ) {{ getCellValue(column, item) }}
  
</template>

<script>

export default {
  name: 'nio-slat-table',
  props: {
    "items": { type: Array, required: true },
    "columns": { type: Array, required: true },
    // "filters": { type: Array, required: false, default: []},
    "action": { type: String, required: false, default: "menu"}, // menu | link | expand
    "selection": { type: String, required: false}, // single | multiple
  },
  data: () => ({
    searchable: false,
    multiple: false,
    headers: [],
    computedItems: [],
    //   { name: 'id', text: 'ID', value: "buyOrder.id" },
    //   { name: 'name', text: 'Order name', value: 'buyOrder.name', sortable: false },
    //   { name: 'status', text: 'Status', value: 'buyOrder.status', sortable: false },
    //   { name: 'company', text: 'Company', value: 'buyOrder.company', sortable: false },
    //   { name: 'dataTypes', text: 'Data type(s)', value: 'buyOrder.dataTypes', sortable: false },
    //   { name: 'created', text: 'Created', value: 'buyOrder.createdAt', sortable: false },
    //   { name: 'overflow', text: '', value: 'buyOrder', sortable: false}
    // ],
  }),
  mounted() {
    this.makeHeaders()
    this.computeItems()
  },
  methods: {
    computeItems() {
      const computedItems = []
      console.log(this.items)
      this.items.forEach(item => {
        const computedItem = {}
        this.columns.forEach(column => {
          if (column.props) {
            const itemProps = {}
            column.props.forEach(prop => {
              itemProps[prop] = column.computed && column.computed.hasOwnProperty(prop) ? column.computed[prop](item) : item[prop] 
            })
            computedItem[column.name] = itemProps
          } else {
            computedItem[column.name] = column.computed ? column.computed(item) : item[column.name]
          }
          console.log(computedItem)
        })
        computedItems.push(computedItem)
      })
      console.log(computedItems)
      this.computedItems = computedItems
    },
    makeHeaders() {
      const headers = []

      if (this.action) {
        
      }

      this.columns.map(column => {
        // console.log(column)
        headers.push({
          name: column.name,
          value: column.name
        })
      })
      // console.log(headers)
      this.headers = headers
    },
    applyHelperMethods() {
      // const attributes = this.$el.attributes
      // if (attributes.getNamedItem('paginate')) {
      //   this.paginate = true
      // }
      // if (attributes.getNamedItem('filter')) {
      //   this.filter = true
      // }
    }
  },
  components: { }
}
</script>

<style lang="sass" scoped>
  @import '../../styles/mixins/table/_slat-table'  
</style>