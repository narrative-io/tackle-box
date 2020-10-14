<template lang="pug">
  span.nio-icon(
    v-if="icon && !isUtilityIcon"
  )
    streamline-icon.nio-icon(
      :icon="icon" 
      :size="size ? parseInt(size) : 24"
      :stroke="color"
    )
  span.nio-icon(
    v-else-if="icon && isUtilityIcon"
    :style="{fontSize: '12px'}"
  )  
    font-awesome-icon(      
      :icon="icon"
    )
</template>

<script>
import StreamlineIcon from "../../plugins/streamline-icons-vue/dist/index.umd.min.js"
import { NioIconLibrary } from './iconLibrary'

export default {
  name: 'nio-icon',
  props: {
    "name": { type: String, required: true },
    "size": { required: false },
    "color": { type: String, required: false, default: 'black' }
  },
  data: () => ({
    icon: null,
    iconLibrary: NioIconLibrary
  }),
  computed: {
    isUtilityIcon() {
      return this.name.indexOf('utility-') > -1
    }
  },
  mounted() {	
    this.icon = this.iconLibrary[this.name]
    console.log(this.icon)
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