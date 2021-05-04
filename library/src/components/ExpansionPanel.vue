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
          key="1"
          v-if="isActive"
          name="utility-chevron-up"
          :color="actionColor"
          :size="14"
        )
        NioIcon(
          v-else
          key="2"
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
    panelKey: null
  }),
  mounted() {	
    this.$emit('mounted')
    this.key = this.$vnode.key
  },
  destroyed() {
    this.$emit('destroyed')
  },
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
  methods: {
    
  },
  components: { NioIcon }
}
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_expansion-panel'  
</style>

