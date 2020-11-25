<template lang="pug">
  NioSlat.nio-slat-table-header(

  )
    template(v-slot:content)
      NioTextField(
        v-if="searchable"
      )
      NioSelect(
        v-if="sortable"
      )
    
</template>

<script>

import NioSlat from '../slat/Slat'
import NioTextField from '../TextField'
import NioSelect from '../Select'

export default {
  name: 'nio-slat-table-header',
  props: {
    "searchable": { type: Boolean, required: false, default: false },
    "sortable": { type: Boolean, required: false, default: false }
  },
  data: () => ({
    
  }),
  mounted() {
  },
  methods: {
    
  },
  components: { NioSlat, NioSelect, NioTextField }
}
</script>

<style lang="sass" scoped>
  @import '../../styles/mixins/table/_slat-table-header'  
</style>