<template lang="pug">
    streamline-icon.nio-icon(
      v-if="icon"
      :icon="icon" 
      :size="24" 
      :stroke="color"
    )
</template>

<script>
import StreamlineIcon from "@streamlinehq/streamline-icons-vue"
import { NioIconLibrary } from './iconLibrary'

export default {
  name: 'nio-icon',
  props: {
    "name": { type: String, required: true },
    "size": { type: String, required: false, default: '24'},
    "color": { type: String, required: false, default: 'black' }
  },
  data: () => ({
    icon: null,
  }),
  methods: {
    getIcon() {
      const icon = NioIconLibrary[this.name]
      this.icon = require(`@streamlinehq/streamline-light/lib/${icon.collection}`).default[icon.name]
    }
  },
  mounted() {	
    this.getIcon()
    this.$emit('mounted')
  },
  destroyed() {
    this.$emit('destroyed')
  },
  components: { StreamlineIcon }
}
</script>

<style lang="sass" scoped>
  .nio-icon
</style>