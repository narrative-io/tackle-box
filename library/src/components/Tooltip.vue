<template lang="pug">
  .nio-tooltip
    NioIcon(
      name="utility-info"
      @click="visible = !visible"
      :color="iconColor"
      :size="12"
    )
    v-tooltip(
      v-model="visible"
      top
    )
      template(v-slot:activator="{ on, attrs }")
        v-btn.activator(
          icon
          v-bind="attrs"
          v-on="on"
        )
          NioIcon(
            name="utility-info"
            @click="visible = !visible"
            :color="iconColor"
            :size="12"
          )
        span Programmatic tooltip

</template>

<script>

import NioIcon from './icon/Icon'
import { getThemeColor } from '@/modules/app/theme/theme'

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
  computed: {
    iconColor() {
      return getThemeColor('primary')
    }
  },
  methods: {
   
  },
  components: { NioIcon }
}
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_tooltip'  
</style>