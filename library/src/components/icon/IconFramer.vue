<template lang="pug">
  div.nio-icon-framer(
    :class="[`nio-${size}`]"
    :style="backgroundColor ? `background-color: ${backgroundColor}` : ''"
    @click="click"
  )
    NioIcon(
      v-if="iconName"
      :name="iconName"
      :color="iconColor ? iconColor : getThemeColor('primaryDark')"
      :size="iconSize"
    )
</template>

<script>

import NioIcon from './Icon'
import { getThemeColor } from '../../modules/app/theme/theme'

export default {
  name: 'nio-icon-framer',
  components: { NioIcon },
  props: {
    "iconName": { type: String, required: true },
    "iconColor": { type: String, required: false },
    "backgroundColor": { type: String, required: false }
  },
  data: () => ({
    size: 'large'
  }),
  computed: {
    iconSize() {
      switch(this.size) {
        case 'large':
          return 48
        case 'small':
          return 32
        case 'extra-small':
          return 12
        default:
          return 32
      }
    }
  },
  mounted() {
    this.applyHelperAttributes()
    this.$emit('mounted')
  },
  destroyed() {
    this.$emit('destroyed')
  },
  methods: {
    applyHelperAttributes() {
      const attributes = this.$el.attributes
      if (attributes.getNamedItem('large')) {
        this.size = 'large'
      }
      if (attributes.getNamedItem('small')) {
        this.size = 'small'
      }
      if (attributes.getNamedItem('extra-small')) {
        this.size = 'extra-small'
      }
    },	
    click() {
      this.$emit('click')
    },
    getThemeColor(colorName) {
      return getThemeColor(colorName)
    }
  }  
}
</script>

<style lang="sass" scoped>
  @import '../../styles/mixins/_icon-framer'
</style>