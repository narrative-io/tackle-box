<template lang="pug">
  .nio-alert(
    :class="[`nio-alert-${alertType}`, {'nio-visible': visible || !dismissable, 'custom': usingDefaultSlot }]"
  )
    template(v-if="usingDefaultSlot")
      slot
    template(v-else)
      .graphic(v-if="alertType === 'warning'")
        NioIcon(
          name="utility-exclamation"
          color="white"
          size="10"
        )
      .message.nio-h4.text-white(v-if="alertType === 'info'") 
        span.nio-bold(v-if="messageTitle") {{ messageTitle }}
        span {{ message }} {{ linkText }}
        a(v-if="linkText && linkHref" :href="linkHref") {{ formatLinkText(linkText) }}
      .message.nio-p.text-primary-dark(v-if="alertType === 'warning'")
        span.nio-bold.text-primary-darker(v-if="messageTitle") {{ messageTitle }}
        span {{ message }}
        a(v-if="linkText && linkHref" :href="linkHref" target="_blank") {{ formatLinkText(linkText) }}
    NioIcon.dismiss(
      v-if="dismissable"
      name="utility-times"
      :color="usingDefaultSlot ? customIconColor : 'white' "
      size="14"
      @click="dismiss"
    )
    
    
</template>

<script>

import NioIcon from './icon/Icon'
import { getThemeColor } from '@/modules/app/theme/theme'

export default {
  name: 'nio-alert',
  props: {
    "visible": { type: Boolean, required: false, default: false },
    "message": { type: String, required: false, default: '' },
    "messageTitle": { type: String, required: false },
    "linkText": { type: String, required: false },
    "linkHref": { type: String, required: false },
    "dismissable": { type: Boolean, required: false, default: true }
  },
  data() {
    return {
      alertType: 'info'
    }
  },		
  computed: {
    usingDefaultSlot() {
      return !!this.$slots.default
    },
    customIconColor() {
      return getThemeColor('primaryLighter')
    }
  },
  mounted() {
    this.applyHelperAttributes()
  },
  methods: {
    formatLinkText(text) {
      return ` ${text.toUpperCase()}`
    },
    applyHelperAttributes() {
      const attributes = this.$el.attributes
      if (attributes.getNamedItem('info')) {
        this.alertType = 'info'
      }
      if (attributes.getNamedItem('warning')) {
        this.alertType = 'warning'
      }
      if (attributes.getNamedItem('error')) {
        this.alertType = 'error'
      }
    },
    
    dismiss() {
      this.$emit('dismiss')
    }
  },
  components: { NioIcon }
}
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_alert'  
</style>