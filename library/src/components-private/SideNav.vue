<template lang="pug">
  .nio-side-nav
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
      :lockItems="lockItems"
      @navItemClicked="navItemClicked" 
      @navEvent="fireNavEvent($event)"
    )     
</template>

<script>

import ImageTile from '../components/ImageTile'
import NavMenu from './NavMenu'

export default {
  name: 'nio-side-nav-menu',
  props: {
    "developerName": { type: String, required: true },
    "appName": { type: String, required: true },
    "navItems": { type: Array, required: false, default: []},
    "hideItems": { type: Object, required: false, default: {} },
    "lockItems": { type: Object, required: false, default: {} }
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
  @import "../styles-private/_side-nav"
</style>
