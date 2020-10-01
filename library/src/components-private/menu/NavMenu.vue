<template lang="pug"> 
  v-menu.nav-menu(
    open-on-click 
    offset-y 
    v-model="showMenu" 
    :close-on-content-click="false"
  )
    template(v-slot:activator="{ on }")
      .activator(@click="open")
        .h3.text-white.button-label-small {{ userInitials }}
    div
      v-card(style="position: relative")
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
  .activator
    width: 2rem
    height: 2rem
    margin-left: 1.25rem
    padding: 0.3125rem
    padding: 0rem
    position: relative
    transition: opacity 0.1s ease
    border-radius: 0.25rem  
    background-color: $c-tangerine-dark
    +nio-center-content  
    .h3
      letter-spacing: 0rem
    &:hover
      cursor: pointer
      opacity: 0.8
  .v-card
    background-color: $c-canvas !important
    width: 23.75rem
    padding: 32px 24px    
    box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12) !important
    border-radius: 1rem !important
</style>
