<template lang="pug">
	.nio-file-uploader(
		:class="`state-${ currentState }`"
	)
		.content-wrapper
			.status-indicator
			.details
				.nio-h3.text-primary-darker Drag and Drop
				.nio-p.text-primary-dark {{ instructions }}
				.annotation
			.actions
				NioButton(
					v-if="status === 0"
					normal-secondary 
					@click="browseClicked"
				) Browse Files
				NioButton(
					v-if="status === 1"
					normal-primary
					@click="actionClicked"
				) {{ actionLabel }}
				Cancel(
					v-if="status === 2"
					caution-outlined
					@click="cancelClicked"
				) {{ actionLabel }}

</template>

<script>

const states = {
	0: 'initial',
	1: 'selected',
	2: 'working',
	3: 'success',
	4: 'error',
	'initial': 0,
	'selected': 1,
	'working': 2,
	'success': 3,
	'error': 4
}

export default {
	name: 'nio-file-uploader',
	props: {
		"instructions": { type: String, required: false, default: "Choose a file" },
		"actionLabel": { type: String, required: false, default: "Go" }
,	},
	data: () => ({
		currentState: 0
	}),
	methods: {
		browseClicked() {

		},
		actionClicked() {

		},
		cancelClicked() {

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
  @import '../styles/mixins/_file-uploader'  
</style>
