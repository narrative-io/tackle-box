<template lang="pug">
  .nio-nav-menu-list
    .nav-group(v-for="navGroup in navItems")      
      h3.nio-h6.text-primary-darker {{ navGroup.groupLabel }}
      v-list(nav dense)
        NavMenuListItem(v-for="item in navGroup.items" :item="item" @click="navItemClicked(item)")
</template>

<script>

import NavMenuListItem from './NavMenuListItem'

export default {
  name: 'nio-nav-menu-list',
  props: {
    "navItems": { type: Array, required: false, default: []}
  },
  data: () => ({
    
  }),
  methods: {
    navItemClicked(item) {
      if (item.event) {
        this.$emit('navEvent', item.event)
      }
      this.$emit('navItemClicked')
    }
  },
  mounted() {	
    this.$emit('mounted')
  },
  destroyed() {
    this.$emit('destroyed')
  },
  components: { NavMenuListItem }
}
</script>

<style lang="sass" scoped>
  // @import '../styles/mixins/navigation/_nav-menu-list.sass'  
  @import '../../styles/global/_colors'
  @import '../../styles/global/_typography'
  @import '../../styles/global/_color-helpers'
  @import '../../styles/mixins/utility/_center-content'
  @import '../../styles/mixins/_menu'
  .nio-nav-menu-list
    +nio-menu  
    .nav-group
      margin-bottom: 24px
      .v-list
        padding-left: 0px
        padding-right: 0px
        background-color: $c-canvas !important
        
</style>
