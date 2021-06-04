<template lang="pug">
  .nio-tooltip
    v-tooltip(
      v-model="visible"
      :open-on-hover="openOnHover === true"
      :open-on-click="openOnHover === false"
      contentClass="nio-tooltip-content"
      right
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
      .tooltip-title.nio-p.text-primary-darkest.nio-bold {{ heading }}
      .nio-p.text-primary-darker {{ message }}
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

<style lang="sass">
@import '../styles/mixins/_tooltip-content'  
</style>

<style lang="sass" scoped>
@import '../styles/mixins/_tooltip'  
</style>