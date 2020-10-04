<template lang="pug">
  .nio-side-nav-menu
    .header
      ImageTile.avatar(
        src="https://picsum.photos/96/96"
        size="large"
      )
      .app-info
        h4.text-primary-darker {{ appName }} 
        .p-small.text-primary-dark By <span class="nio-bold">{{ developerName }}</span>
    NavMenu(
      :navItems="navItems"
      :hideItems="hideItems"
      @navItemClicked="navItemClicked" 
      @navEvent="fireNavEvent($event)"
    )     
</template>

<script>

import ImageTile from '../ImageTile'
import NavMenu from './NavMenu'

export default {
  name: 'nio-side-nav-menu',
  props: {
    "developerName": { type: String, required: true },
    "appName": { type: String, required: true },
    "companies": { type: Array, required: false, default: [] },
    "userInitials": { type: String, required: false, default: "G"},
    "navItems": { type: Array, required: false, default: []},
    "hideItems": { type: Object, required: false, default: {} }
  },
  data: () => ({
    
  }),
  methods: {
    fireNavEvent(eventName) {
      this.$emit(eventName)
    },
    navItemClicked() {
      this.$emit('navItemClicked')
    }
  },
  mounted() {	
    this.$emit('mounted')
  },
  destroyed() {
    this.$emit('destroyed')
  },
  components: { ImageTile, NavMenu }
}
</script>

<style lang="sass" scoped>

@import '../../styles/global/_colors'
@import '../../styles/global/_color-helpers'

.nio-side-nav-menu
  width: 20.125rem
  background-color: $c-canvas
  border: 1px solid $c-primary-lighter
  border-radius: 12px
  padding: 24px 0px
  .header
    display: flex
    flex-direction: column
    align-items: center
    margin-bottom: 24px
    .avatar
      margin-bottom: 24px
    .app-info
      text-align: center

</style>
