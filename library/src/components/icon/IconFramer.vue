<template lang="pug">
  div.nio-icon-framer(
    @click="click"
  )
    NioIcon(
      v-if="iconName"
      :name="iconName"
      color="#415298"
      size="48"
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
  }),
  methods: {
    click() {
      this.$emit('click')
    }
  },
  mounted() {	
    this.$emit('mounted')
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