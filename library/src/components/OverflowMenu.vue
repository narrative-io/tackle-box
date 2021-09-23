<template lang="pug">
  .nio-overflow-menu
    v-menu(
      contentClass="nio-overflow-menu"
      left
      nudgeBottom="20"
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
  data: () => ({
  
  }),
  props: {
    data: { type: Object, required: false }
  },
  mounted() {	
    this.$emit('mounted')
  },
  destroyed() {
    this.$emit('destroyed')
  },
  components: { NioIcon }
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
