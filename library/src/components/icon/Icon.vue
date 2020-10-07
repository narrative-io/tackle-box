<template lang="pug">
    streamline-icon.nio-icon(
			:icon="icon" 
			:size="size" 
			:stroke="color"
		)
</template>

<script>
import StreamlineIcon from "@streamlinehq/streamline-icons-vue"

export default {
	name: 'nio-icon',
	props: {
		"streamlineCollection": { type: String, required: true },
		"streamlineIconName": { type: String, required: true },
		"size": { type: Number, required: false, default: 24},
		"color": { type: String, required: true }
	},
	data: () => ({
		icon: null
	}),
	methods: {
		getIcon() {
			this.icon = require(`@streamlinehq/${this.streamlineAssetPath}`).default[this.streamlineIconName]
		}
	},
	mounted() {	
		this.$emit('mounted')
	},
	destroyed() {
		this.$emit('destroyed')
	}
}
</script>

<style lang="sass" scoped>

</style>