<template lang="pug">
  .nio-tooptip

</template>

<script>

import NioIcon from './icon/Icon'

export default {
  name: 'nio-tooltip',
  props: {
    
  },
  data() {
    return {
    }
  },		
  mounted() {
    this.applyHelperAttributes()
  },
  methods: {
    
  },
  components: { NioIcon }
}
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_tooltip'  
</style>