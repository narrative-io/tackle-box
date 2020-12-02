<template lang="pug">
  td.nio-slat-table-actions(:colspan="colSpan")
    NioSlat
      template(v-slot:content)
        slot(name="footer-actions")
</template>

<script>

import NioSlat from '../slat/Slat'

export default {
  name: 'nio-slat-table-actions',
  props: {
    colSpan: { type: Number, required: true }
  },
  data: () => ({
    
  }),
  mounted() {

  },
  methods: {
    
  },
  components: { NioSlat }
}
</script>

<style lang="sass" scoped>
  @import '../../styles/mixins/table/_slat-table-actions'  
</style>