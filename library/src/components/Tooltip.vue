<template lang="pug">
  .nio-tooltip
    v-menu(
      :open-on-hover="openOnHover"
      :open-on-click="!openOnHover"
      :closeOnContentClick="false"
      contentClass="nio-tooltip-content"
      right
      v-bind="$attrs"
      v-on="$listeners"
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
      .tooltip-title.nio-p.text-primary-darkest.nio-bold(v-if="(data && data.heading) || heading") {{ data && data.heading ? data.heading : heading }}
      .nio-p.text-primary-darker {{ data && data.message ? data.message : message }}
      .link
        a.nio-h6(v-if="(linkText && linkHref) || (data && data.linkText && data.linkHref)" :href="data && data.linkHref ? data.linkHref : linkHref" target="_blank") {{ formatLinkText(data && data.linkText ? data.linkText : linkText) }}
      .custom-content
        slot
</template>

<script>

import NioIcon from './icon/Icon'
import { getThemeColor } from '@/modules/app/theme/theme'

export default {
  name: 'nio-tooltip',
  props: {
    "data": { type: Object, required: false },
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
    },
    formatLinkText(text) {
      return ` ${text.toUpperCase()}`
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