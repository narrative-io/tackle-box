<template lang="pug">
  .nio-nav-menu
    .nav-group(v-for="navGroup in navItems")      
      h3.nio-h6.text-primary-darker(v-if="navGroup.groupLabel") {{ navGroup.groupLabel }}
      v-list(nav dense)
        NavMenuItem(
          v-for="item in navGroup.items.filter(item => !itemHidden(item))" 
          :label="item.label"
          :icon="item.icon"
          :status="itemLocked(item) ? 'locked' : item.status"
          :to="item.to"
          @click="navItemClicked(item)")
</template>

<script>

import NavMenuItem from './NavMenuItem'

export default {
  name: 'nio-nav-menu',
  props: {
    "navItems": { type: Array, required: false, default: []},
    "hideItems": { type: Object, required: false, default: {} },
    "lockItems": {type: Object, required: false, default: {} }
  },
  data: () => ({
    
  }),
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
  },
  mounted() {	
    this.$emit('mounted')
  },
  destroyed() {
    this.$emit('destroyed')
  },
  components: { NavMenuItem }
}
</script>

<style lang="sass" scoped>
	@import "../styles/mixins/_nav-menu"
</style>

