<template lang="pug">
  .nio-side-nav
    .header
      ImageTile.avatar(
        :src="headerImage"
        size="large"
      )
        template(v-slot:nio-image-placeholder)
          .image-placeholder
            .content
              .top
              .bottom
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
import NavMenu from '../components/NavMenu'

export default {
  name: 'nio-side-nav-menu',
  props: {
    "developerName": { type: String, required: true },
    "appName": { type: String, required: true },
    "navItems": { type: Array, required: false, default: []},
    "hideItems": { type: Object, required: false, default: {} },
    "lockItems": { type: Object, required: false, default: {} },
    "headerImage": { type: String, required: false }
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

  .image-placeholder
    background-color: $c-primary
    width: 100%
    height: 100%
    padding: 20px
    .content
      position: relative
      overflow: hidden
      width: 100%
      height: 100%
      .top
        position: absolute
        left: 0%
        top: 0%
        width: 100%
        height: 50%
        border-bottom-left-radius: 28px
        border-bottom-right-radius: 28px
        background: $c-white
      .bottom
        position: absolute
        left: 0%
        bottom: 0%
        width: 100%
        height: 50%
        border-top-left-radius: 28px
        border-top-right-radius: 28px
        background: $c-primary-lighter
</style>
