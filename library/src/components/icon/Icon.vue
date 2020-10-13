<template lang="pug">
    streamline-icon.nio-icon(
      v-if="icon"
      :icon="icon" 
      :size="24" 
      :stroke="color"
			@click="click"
    )
</template>

<script>
import StreamlineIcon from "../../plugins/streamline-icons-vue/dist/index.umd.min.js"
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
    iconLibrary: NioIconLibrary
	}),
	methods: {
		click() {
			this.$emit('click')
		}
	},
  mounted() {	
    this.icon = this.iconLibrary[this.name]
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