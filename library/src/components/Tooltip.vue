<template lang="pug">
  .nio-tooltip
    NioIcon(
      v-if="!openOnHover"
      name="utility-info"
      @click="visible = !visible"
      :color="iconColor"
      :size="12"
    )
    v-tooltip(
      v-model="visible"
      top
    )
      template(v-slot:activator="{ on, attrs }" v-if="openOnHover")
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
      .nio-tooltip-content
        .title.nio-p-large.text-primary-darker.nio-bold {{ heading }}
        .body.nio-p.text-primary-dark {{ message }}
        .link

</template>

<script>

import NioIcon from './icon/Icon'
import { getThemeColor } from '@/modules/app/theme/theme'

export default {
  name: 'nio-tooltip',
  props: {
    "message": { type: String, required: false, default: '' },
    "heading": { type: String, required: false },
    "linkText": { type: String, required: false },
    "linkHref": { type: String, required: false },
  },
  data() {
    return {
      visible: false,
      openOnHover: false
    }
  },		
  mounted() {
    this.applyHelperAttributes()
  },
  computed: {
    iconColor() {
      return getThemeColor('primary')
    }
  },
  methods: {
    applyHelperAttributes() {
      const attributes = this.$el.attributes
      if (attributes.getNamedItem('open-on-hover')) {
        this.openOnHover = true
      }
    }
  },
  components: { NioIcon }
}
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_tooltip'  
</style>