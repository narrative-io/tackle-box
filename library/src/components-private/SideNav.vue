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
    .ctas
      NioButton(
        v-for="item of ctaButtons"
        @click="buttonClicked($event)"
        v-bind="buttonVariant(item)"
      ) {{ item.label }}
    NavMenu(
      :navItems="navItems"
      :hideItems="hideItems"
      :lockItems="lockItems"
      :activeItemName="activeItemName"
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
  data: () => ({
  }),
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
    // buttonMount(el) {
    //   el.setAttribute('normal-primary', "")
    // },
    buttonClicked(item) {
      if (item.event) {
        this.fireNavEvent(item.event)
      }
      this.navItemClicked()
    },
    buttonVariant(item) {
      return {[`${item.buttonVariant}`]: ""}
    }
  },
  mounted() {	
    this.$emit('mounted')
  },
  destroyed() {
    this.$emit('destroyed')
  },
  components: { ImageTile, NavMenu, NioButton }
}
</script>

<style lang="sass" scoped>
  @import "../styles-private/_side-nav"
</style>
