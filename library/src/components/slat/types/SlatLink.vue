<template lang="pug">
  NioSlat.nio-slat-link
    template(v-slot:content)
      slot
    template(v-slot:action)
      NioIcon(
        name="utility-chevron-right"
      )
</template>

<script>

import NioSlat from '../Slat'
import NioIcon from '../../icon/Icon'

export default {
  name: 'nio-slat-link',
  props: {
    
  },
  data: () => ({

  }),
  mounted() {
  },
  methods: {
    click() {
      this.$emit('click')
    }
  },
  components: { NioSlat, NioIcon }
}
</script>

<style lang="sass" scoped>
  @import '../../../styles/mixins/slat/types/_slat-link'
</style>