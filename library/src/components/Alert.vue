<template lang="pug">
  .nio-alert(
    :class="[`nio-alert-${alertType}`, {'nio-visible': visible || !dismissable }]"
  )
    .graphic(v-if="alertType === 'warning'")
      NioIcon(
        name="utility-exclamation"
        color="white"
        size="10"
      )
    .message.nio-h4.text-white(v-if="alertType === 'info'") 
      span.nio-bold(v-if="messageTitle") {{ messageTitle }}
      span {{ message }}
    .message.nio-p.text-primary-dark(v-if="alertType === 'warning'")
      span.nio-bold.text-primary-darker(v-if="messageTitle") {{ messageTitle }}
      span {{ message }}
    NioIcon.dismiss(
      v-if="dismissable"
      name="utility-times"
      color="white"
      size="14"
      @click="dismiss"
    )
</template>

<script>

import NioIcon from './icon/Icon'

export default {
  name: 'nio-alert',
  props: {
    "visible": { type: Boolean, required: false, default: false },
    "message": { type: String, required: false, default: '' },
    "messageTitle": { type: String, required: false },
    "dismissable": { type: Boolean, required: false, default: true }
  },
  data() {
    return {
      alertType: 'info'
    }
  },		
  mounted() {
    this.applyHelperAttributes()
  },
  methods: {
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