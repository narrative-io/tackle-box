<template lang="pug">
  NioSlat.nio-link-slat
    template(v-slot:content)
      slot
    template(v-slot:action)
      NioIcon(
        name="utility-chevron-right"
        color="#415298"
      )
</template>

<script>

import NioSlat from '../Slat'
import NioIcon from '../../icon/Icon'

export default {
  name: 'nio-link-slat',
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
  @import '../../../styles/mixins/slat/types/_link-slat'
</style>