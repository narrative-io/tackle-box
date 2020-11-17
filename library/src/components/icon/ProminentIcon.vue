<template lang="pug">
  div.nio-prominent-icon(
    v-if="icon"
    @click="click"
  )
   	NioIcon(
      :icon="icon" 
      :size="size ? parseInt(size) : 24"
      :stroke="color"
    )
</template>

<script>

import NioIcon from './icon/Icon'
import StreamlineIcon from "../../plugins/streamline-icons-vue/dist/index.umd.min.js"
import { NioIconLibrary } from './iconLibrary'

export default {
  name: 'nio-prominent-icon',
  props: {
    "name": { type: String, required: true }
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
  watch: {
    name() {
      this.icon = this.iconLibrary[this.name]
    }
  },
  components: { StreamlineIcon }
}
</script>

<style lang="sass" scoped>
	.nio-prominent-icon
		background: $c-canvas
		width: 7.5rem
		height: 7.5rem
		border-radius: 3.75rem
		border: 0.0625rem solid $c-primary-lighter
		margin-bottom: 1rem
		position: relative
		+nio-center-content
		.v-progress-circular
			width: 6.25rem !important
			height: 6.25rem !important
			position: absolute
			left: 0.5625rem
			top: 0.5625rem
			::v-deep circle:nth-child(1)
				stroke: $c-primary-lighter !important
</style>