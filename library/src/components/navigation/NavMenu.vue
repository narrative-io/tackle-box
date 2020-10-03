<template lang="pug">
	.nio-nav-menu
		slot(name="header")
		NavMenuList(

		)
</template>

<script>
import NavMenuList from './NavMenuList'

export default {
	name: 'nio-nav-menu',
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
	},
	components: { NavMenuList }
}
</script>

<style lang="sass" scoped>
  // @import '../styles/mixins/navigation/_nav-manu.sass'  
</style>
