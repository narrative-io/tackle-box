<template lang="pug">
	.nio-file-uploader File Uploader
</template>

<script>

export default {
	name: 'nio-file-uploader',
	props: {
	
	},
	data: () => ({
	}),
	methods: {
		
	
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
