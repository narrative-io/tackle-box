<template lang="pug">
  .nio-tooptip
    NioIcon(
      name="utility-plus"
      @click="visible = !visible"
    )
    v-tooltip(
      v-model="visible"
      top
    )
      template(v-slot:activator="{ on, attrs }")
        v-btn(
          icon
          v-bind="attrs"
          v-on="on"
        )
          NioIcon(name="utlilty-plus")
        span Programmatic tooltip

</template>

<script>

import NioIcon from './icon/Icon'

export default {
  name: 'nio-tooltip',
  props: {
    "message": { type: String, required: false, default: '' },
    "messageTitle": { type: String, required: false },
    "linkText": { type: String, required: false },
    "linkHref": { type: String, required: false },
  },
  data() {
    return {
      visible: false
    }
  },		
  mounted() {

  },
  methods: {
    
  },
  components: { NioIcon }
}
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_tooltip'  
</style>