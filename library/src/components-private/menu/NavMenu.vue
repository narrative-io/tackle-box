<template lang="pug">
    .nav-menu
			v-menu(open-on-click offset-y v-model="showMenu" :close-on-content-click="false")
				template(v-slot:activator="{ on }")
					.avatar(@click="open")
						.h3.text-white.button-label-small {{ userInitials }}
				div
					v-card(style="position: relative")
						UserMenu(:companies="companies" @navItemClicked="close" @close="close" keep-alive)  
</template>

<script>

import { UserMenu } from './UserMenu'

export default {
	props: {
		"companies": { type: Array, required: false, default: [] },
		"user": { type: Object, required: true }
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
	},
	components: { UserMenu }
}
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_nav-menu'  
</style>
