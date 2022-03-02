<template lang="pug">
  .nio-nav-menu
    .nav-group(v-for="navGroup in navItems")      
      h3.nio-h6.text-primary-darker(v-if="navGroup.groupLabel") {{ navGroup.groupLabel }}
      v-list(nav dense)
        NavMenuItem(
          v-for="item in navGroup.items.filter(item => !item.hidden && !itemHidden(item))" 
          :key="item.label"
          :label="item.label"
          :icon="item.icon"
          :hidden="item.hidden ? true : itemHidden(item)"
          :locked="item.locked ? true : itemLocked(item)"
          :status="item.status"
          :to="item.to"
          :class="{'v-list-item--active': item.name === activeItemName}"
          @click="navItemClicked(item)")
</template>

<script>

import NavMenuItem from './NavMenuItem'

export default {
  name: 'nio-nav-menu',
  components: { NavMenuItem },
  props: {
    "navItems": { type: Array, required: false, default: []},
    "hideItems": { type: Object, required: false, default: {} },
    "lockItems": {type: Object, required: false, default: {} },
    "activeItemName": { type: String, required: false }
  },
  mounted() {	
    this.$emit('mounted')
  },
  destroyed() {
    this.$emit('destroyed')
  },
  methods: {
    navItemClicked(item) {
      if (item.event) {
        this.$emit('navEvent', item.event)
      }
      this.$emit('navItemClicked')
    },
    itemHidden(item) {
      return this.hideItems[item.name]
    },
    itemLocked(item) {
      return this.lockItems[item.name]
    }
  }
}
</script>

<style lang="sass" scoped>
  @import "../styles/mixins/_nav-menu"
</style>

