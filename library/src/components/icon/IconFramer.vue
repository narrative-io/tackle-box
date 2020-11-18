<template lang="pug">
  div.nio-icon-framer(
    @click="click"
    :class="[`nio-${size}`]"
  )
    NioIcon(
      v-if="iconName"
      :name="iconName"
      color="#415298"
      :size="size === 'large' ? 48 : 32"
    )
</template>

<script>

import NioIcon from './Icon'

export default {
  name: 'nio-icon-framer',
  props: {
    "iconName": { type: String, required: true }
  },
  data: () => ({
    size: 'large'
  }),
  mounted() {
    this.applyHelperAttributes()
    this.$emit('mounted')
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
    },	
    click() {
      this.$emit('click')
    }
  }, 
  destroyed() {
    this.$emit('destroyed')
  },
  components: { NioIcon }
}
</script>

<style lang="sass" scoped>
  @import '../../styles/mixins/_icon-framer'
</style>