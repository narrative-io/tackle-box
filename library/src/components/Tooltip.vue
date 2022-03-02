<template lang="pug">
  .nio-tooltip 
    v-menu(
      v-bind="$attrs"
      v-on="$listeners"
      :open-on-hover="openOnHover"
      :open-on-click="!openOnHover"
      :close-on-content-click="false"
      :content-class="makeContentClass"
      right
    )
      template(
        v-for="(index, name) in $scopedSlots" 
        v-slot:[name]="data"
      )
        slot(
          v-bind="data"
          :name="name" 
        )
      slot  
      template(v-slot:activator="{ on, attrs }")
        v-btn.activator(
          v-bind="attrs"
          v-on="on"
          icon
        )
          .background-mask(:style="{backgroundColor: iconBackground}")
          NioIcon(
            :name="iconName"
            :color="iconColor ? iconColor : defaultIconColor"
            :size="iconSize"
            @click="visible = !visible"
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
  components: { NioIcon },
  props: {
    "data": { type: Object, required: false },
    "message": { type: String, required: false, default: '' },
    "heading": { type: String, required: false },
    "linkText": { type: String, required: false },
    "iconSize": { type: Number, required: false, default: 12},
    "linkHref": { type: String, required: false },
    "iconName": { type: String, required: false, default: 'utility-info' },
    "iconColor": { type: String, required: false },
    "iconBackground": { type: String, required: false, default: 'rgba(0,0,0,0)'},
    "contentClass": { type: String, required: false }
  },
  data() {
    return {
      visible: false,
      openOnHover: false
    }
  },		
  computed: {
    defaultIconColor() {
      return getThemeColor('primary')
    },
    makeContentClass() {
      return `nio-tooltip-content ${this.contentClass ? this.contentClass : ''}`
    }
  },
  mounted() {
    this.applyHelperAttributes()
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
  }
}
</script>

<style lang="sass">
@import '../styles/mixins/_tooltip-content'  
</style>

<style lang="sass" scoped>
@import '../styles/mixins/_tooltip'  
</style>