<template lang="pug">
  .nio-side-nav
    .header
      ImageTile.avatar(
        v-if="headerImage"
        :src="`data:${headerImage.imageType};base64, ${headerImage.image}`"
        size="large"
      )
      ImageTile.avatar(
        v-else
        :src="null"
        size="large"
      )
        template(v-slot:nio-image-placeholder)
          .image-placeholder
            .content
              .top
              .bottom
      .app-info
        h4.nio-h4.text-primary-darker {{ appName }} 
        .nio-p-small.text-primary-dark By <span class="nio-bold">{{ developerName }}</span>
    NavMenu(
      :navItems="navItems"
      :hideItems="hideItems"
      :lockItems="lockItems"
      :activeItemName="activeItemName"
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
    "headerImage": { type: Object, required: false },
    "activeItemName": { type: String, required: false}
  },
  data: () => ({
    
  }),
  methods: {
    fireNavEvent(eventName) {
      this.$emit('navMenuEvent', eventName)
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
