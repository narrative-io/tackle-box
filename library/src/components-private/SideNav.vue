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
    .ctas(v-if="ctaButtons.length > 0")
      NioButton.cta-button(
        v-for="item of ctaButtons"
        :key="item.label"
        v-bind="buttonVariant(item)"
        @click="buttonClicked(item)"
      ) {{ item.label }}
    NavMenu(
      :nav-items="navItems"
      :hide-items="hideItems"
      :lock-items="lockItems"
      :active-item-name="activeItemName"
      @navItemClicked="navItemClicked" 
      @navEvent="fireNavEvent($event)"
    )
    slot
</template>

<script>

import ImageTile from '../components/ImageTile'
import NavMenu from '../components/NavMenu'
import NioButton from '../components/Button'

export default {
  name: 'nio-side-nav-menu',
  components: { ImageTile, NavMenu, NioButton },
  props: {
    "developerName": { type: String, required: true },
    "appName": { type: String, required: true },
    "navItems": { type: Array, required: false, default: []},
    "ctaButtons": { type: Array, required: false, default: []},
    "hideItems": { type: Object, required: false, default: {} },
    "lockItems": { type: Object, required: false, default: {} },
    "headerImage": { type: Object, required: false },
    "activeItemName": { type: String, required: false}
  },
  mounted() {	
    this.$emit('mounted')
  },
  destroyed() {
    this.$emit('destroyed')
  },
  methods: {
    fireNavEvent(eventName) {
      this.$emit('navMenuEvent', eventName)
      this.$emit(eventName)
    },
    navItemClicked() {
      this.$emit('navItemClicked')
    },
    computeItems() {
      this.items = this.navItems.filter(item => !item.showAsButton)
      this.buttons = this.navItems.filter(item => item.showAsButton)
    },
    buttonClicked(item) {
      if (item.event) {
        this.fireNavEvent(item.event)
      }
      this.navItemClicked()
    },
    buttonVariant(item) {
      return {[`${item.buttonVariant}`]: ""}
    }
  }
}
</script>

<style lang="sass" scoped>
  @import "../styles-private/_side-nav"
</style>
