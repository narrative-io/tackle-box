<template lang="pug">
  v-expansion-panel.nio-expansion-panel(
    v-bind="$attrs"
    v-on="$listeners" 
  )
    v-expansion-panel-header
      template(v-slot:default)
        slot(name="header")
      template(v-slot:actions="slotProps")
        NioIcon(
          v-if="isActive"
          key="1"
          :color="actionColor"
          :size="14"
          name="utility-chevron-up"
        )
        NioIcon(
          v-else
          key="2"
          :color="actionColor"
          :size="14"
          name="utility-chevron-down"
        )
    v-expansion-panel-content
      slot(name="content")
</template>

<script>

import NioIcon from '../components/icon/Icon'
import { getThemeColor } from '../modules/app/theme/theme'

export default {
  name: 'nio-expansion-panel',
  components: { NioIcon },
  data: () => ({
    panelKey: null
  }),
  computed: {
    isActive() {
      if (this.activePanels && this.activePanels.length) {
        return this.activePanels.includes(this.key)
      } else {
        return this.activePanels === this.key
      }
    },
    actionColor() {
      return getThemeColor('primaryDark')
    },
    activePanels() {
      return this.$parent.$parent.model
    },
  },
  mounted() {	
    this.$emit('mounted')
    this.key = this.$vnode.key
  },
  destroyed() {
    this.$emit('destroyed')
  }
}
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_expansion-panel'  
</style>

