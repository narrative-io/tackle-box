<template lang="pug">
	.nio-dropdown-nav-menu
		v-menu(
			open-on-click 
			offset-y 
			v-model="showMenu" 
			content-class="nio-dropdown-nav-menu"
			:close-on-content-click="false"
		)
			template(v-slot:activator="{ on }")
				.activator(@click="open")
					.h3.text-white.button-label-small {{ userInitials }}
			NavMenu(

			)
				template(v-slot:header)
					.test Menu Header
				
			//- UserMenu(
			//- 	:developerName="developerName"
			//- 	:appName="appName"
			//- 	:companies="companies" 
			//- 	:user="user ? user : null"
			//- 	:navItems="navItems"
			//- 	ref="nio-nav-menu-ref"
			//- 	@navItemClicked="close" 
			//- 	@close="close" 
			//- 	@navEvent="fireNavEvent($event)"
			//- 	keep-alive
			//- )
</template>

<script>
import NavMenu from './NavMenu'

export default {
	name: 'nio-dropdown-nav-menu',
	props: {
		"developerName": { type: String, required: false, default: "Narrative I/O"},
    "companies": { type: Array, required: false, default: [] },
    "appName": { type: String, required: true },
    "user": { type: Object, required: false, default: null },
    "navItems": { type: Array, required: false, default: []}
	},
	data: () => ({
		showMenu: false
	}),
	computed: {
		userInitials() {
      let nameSplit = this.user.name.split(' ')
      let initials = ''
      nameSplit.forEach(el => {
        initials = initials + el.substring(0, 1)
      })
      return initials !== '' ? initials : 'U'
    }
	},
	methods: {
		open() {
      this.showMenu = true
    },
    close() {
      this.showMenu = false
    },
    fireNavEvent(eventName) {
      this.$emit(eventName)
    }
	},
	mounted() {	
		this.$emit('mounted')
	},
	destroyed() {
		this.$emit('destroyed')
	},
	components: { NavMenu }
}
</script>

<style lang="sass" scoped>
// @import '../styles/mixins/navigation/_dropdown-nav-menu.sass'  

@import '../../styles/global/_colors'
@import '../../styles/mixins/utility/_center-content'	

.nio-dropdown-nav-menu
	box-shadow: none
	.activator
		width: 2rem
		height: 2rem
		margin-left: 1.25rem
		padding: 0.3125rem
		padding: 0rem
		position: relative
		transition: opacity 0.1s ease
		border-radius: 0.25rem  
		background-color: $c-coral-dark
		+nio-center-content  
		.h3
			letter-spacing: 0rem
		&:hover
			cursor: pointer
			opacity: 0.8

</style>
