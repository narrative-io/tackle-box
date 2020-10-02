<template lang="pug"> 
	.nio-nav-menu
		v-menu(
			open-on-click 
			offset-y 
			v-model="showMenu" 
			content-class="nio-nav-menu"
			:close-on-content-click="false"
		)
			template(v-slot:activator="{ on }")
				.activator(@click="open")
					.h3.text-white.button-label-small {{ userInitials }}
			UserMenu(
				:developerName="developerName"
				:appName="appName"
				:companies="companies" 
				:user="user ? user : null"
				:navItems="navItems"
				ref="nio-nav-menu-ref"
				@navItemClicked="close" 
				@close="close" 
				@navEvent="fireNavEvent($event)"
				keep-alive
			)
</template>

<script>

import UserMenu from './UserMenu'

export default {
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
  components: { UserMenu }
}
</script>

<style lang="sass" scoped>
  @import '../../styles-private/_nav-menu'  
</style>
