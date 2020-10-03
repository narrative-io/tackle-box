<template lang="pug">
  .nio-dropdown-nav-menu
    v-menu(
      open-on-click 
      offset-y 
      v-model="showMenu" 
      content-class="nio-dropdown-nav-menu-menu"
      :close-on-content-click="false"
    )
      template(v-slot:activator="{ on }")
        .activator(@click="open")
          .h3.text-white.button-label-small {{ userInitials }}
      v-divider    
      NavMenu(
        :navItems="[navItems.find(group => group.groupLabel === 'App')]"
        @navItemClicked="close" 
        @close="close" 
        @navEvent="fireNavEvent($event)"
      )
        template(v-slot:header)
          .user
            .avatar 
              .h3.text-white {{ userInitials }}
            .user-info
              h3.text-primary-darker {{ user.name }} 
              .body.text-primary-dark {{ user.email }}
      v-divider        
      NavMenu(
        :navItems="[navItems.find(group => group.groupLabel === 'Account Settings')]"
        @navItemClicked="close" 
        @close="close" 
        @navEvent="fireNavEvent($event)"
      )
      v-divider
      NavMenu(
        :navItems="[navItems.find(group => group.groupLabel === 'Support')]"
        @navItemClicked="close" 
        @close="close" 
        @navEvent="fireNavEvent($event)"
      )        
</template>

<script>
import NavMenu from './NavMenu'
import ImageTile from '../../components/ImageTile'

export default {
  name: 'nio-dropdown-nav-menu',
  props: {
    "developerName": { type: String, required: false, default: "Narrative I/O"},
    "companies": { type: Array, required: false, default: [] },
    "appName": { type: String, required: true },
    "user": { type: Object, required: false, default: null },
    "navItems": { type: Array, required: true }
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
@import '../../styles/global/_colors'
@import '../../styles/mixins/utility/_center-content'	

.nio-dropdown-nav-menu-menu
  width: 23.75rem
  background-color: $c-white
  .user
    display: flex
    overflow: hidden
    padding: 24px
    .avatar, .user-info
      height: 4rem
    .avatar
      background-color: $c-coral-dark
      border-radius: 0.25rem  
      width: 4rem
      height: 4rem
      display: flex
      margin-right: 1.25rem
      flex-shrink: 0
      +nio-center-content
    .user-info
      display: flex
      flex-direction: column
      align-items: flex-start
      padding: 0.3125rem 0rem
      *
        white-space: nowrap
</style>

<style lang="sass" scoped>

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
