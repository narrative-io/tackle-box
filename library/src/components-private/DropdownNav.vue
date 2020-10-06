<template lang="pug">
  .nio-dropdown-nav
    v-menu(
      open-on-click 
      offset-y 
      v-model="showMenu" 
      content-class="nio-dropdown-nav-menu"
      :close-on-content-click="false"
    )
      template(v-slot:activator="{ on }")
        .activator(@click="open")
          .nio-h3.text-white.button-label-small {{ userInitials }}    
      .user
        .avatar 
          h1.text-white {{ userInitials }}
        .user-info
          h3.text-primary-darker {{ user.name }} 
          .body.text-primary-dark {{ user.email }}  
      v-divider
      template(v-for="navGroup in navItems")      
        NavMenu.menu-group(
          :navItems="[navGroup]"
          :hideItems="hideItems"
          :lockItems="lockItems"
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
  components: { NavMenu, ImageTile }
}
</script>

<style lang="sass">
  @import "../styles-private/_dropdown-nav"
</style>
