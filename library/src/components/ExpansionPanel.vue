<template lang="pug">
  v-expansion-panel.nio-expansion-panel
    v-expansion-panel-header
      template(v-slot:default)
        slot(name="header")
      template(v-slot:actions)
        NioIcon(
          name="utility-chevron-down"
          :color="actionColor"
          :size="14"
        )
    v-expansion-panel-content
      slot(name="content")
</template>

<script>

import NioIcon from '../components/icon/Icon'
import { getThemeColor } from '../modules/app/theme/theme'

export default {
  name: 'nio-expansion-panel',
  data: () => ({
    
  }),
  mounted() {	
    this.$emit('mounted')
  },
  destroyed() {
    this.$emit('destroyed')
  },
  computed: {
    actionColor() {
      return getThemeColor('primaryDark')
    }
  },
  methods: {
  
  },
  components: { NioIcon }
}
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_expansion-panel'  
</style>

