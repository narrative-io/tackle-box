<template lang="pug">
  .nio-overflow-menu
    v-menu(
      content-class="nio-overflow-menu"
      nudge-bottom="20"
      left
    )
      template(v-slot:activator="{ on, attrs }")
        .activator(v-on="on")
          NioIcon(
            name="utility-more"
            color="#415298"
          )        
      slot(name="items")
</template>

<script>

import NioIcon from './icon/Icon'

export default {
  name: 'nio-overflow-menu',
  components: { NioIcon },
  props: {
    data: { type: Object, required: false }
  },
  mounted() {	
    this.$emit('mounted')
  },
  destroyed() {
    this.$emit('destroyed')
  }
}
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_overflow-menu'  
</style>

<style lang="sass">
  @import '../styles/global/_colors'
  @import '../styles/mixins/_menu'
  .nio-overflow-menu
    +nio-menu   
    background-color: $c-white
</style>
