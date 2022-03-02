<template lang="pug">
  .nio-dropdown-nav
    v-menu(
      v-model="showMenu" 
      :close-on-content-click="false"
      content-class="nio-dropdown-nav-menu"
      open-on-click
      offset-y 
    )
      template(v-slot:activator="{ on }")
        .activator(@click="open")
          .user-initials.text-white.nio-button-label-small {{ userInitials }}    
      .user
        .avatar 
          h1.text-white {{ userInitials }}
        .user-info
          h3.nio-h2.text-primary-darker {{ user.name }} 
          .nio-p.text-primary-dark {{ user.email }}  
      slot(name="viewing-as")
      v-divider
      template(v-for="navGroup in navItems")      
        NavMenu.menu-group(
          :nav-items="[navGroup]"
          :hide-items="hideItems"
          :lock-items="lockItems"
          @navItemClicked="close" 
          @navEvent="fireNavEvent($event)"
        )          
        v-divider        
</template>

<script>
import NavMenu from '../components/NavMenu'
import ImageTile from '../components/ImageTile'

export default {
  name: 'nio-dropdown-nav-menu',
  components: { NavMenu, ImageTile },
  
  props: {
    "user": { type: Object, required: false, default: null },
    "navItems": { type: Array, required: true },
    "hideItems": { type: Object, required: false, default: {} },
    "lockItems": { type: Object, required: false, default: {} },
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
  mounted() {	
    this.$emit('mounted')
  },
  destroyed() {
    this.$emit('destroyed')
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
  }
}
</script>

<style lang="sass">
  @import "../styles-private/_dropdown-nav"
</style>
