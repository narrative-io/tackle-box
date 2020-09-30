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
          ref="nio-nav-menu-ref"
          @navItemClicked="close" 
          @close="close" 
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
    "user": { type: Object, required: false, default: null }
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
</style>
