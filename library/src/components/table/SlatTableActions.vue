<template lang="pug">
  tr.nio-slat-table-actions
    NioSlat.nio-slat-table-actions(

    )
      template(v-slot:content)
        slot(name="footer-actions")
</template>

<script>

import NioSlat from '../slat/Slat'


export default {
  name: 'nio-slat-table-actions',
  props: {
    
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