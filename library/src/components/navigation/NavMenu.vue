<template lang="pug">
	.nio-nav-menu
		slot(name="header")
		NavMenuList(
			:navItems="navItems"
		)
</template>

<script>
import NavMenuList from './NavMenuList'

export default {
	name: 'nio-nav-menu',
	props: {
		"navItems": { type: Array, required: false, default: []}
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
	},
	components: { NavMenuList }
}
</script>

<style lang="sass" scoped>
  // @import '../styles/mixins/navigation/_nav-manu.sass'  
</style>
