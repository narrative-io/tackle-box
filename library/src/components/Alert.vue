<template lang="pug">
  .nio-alert(
    :class="[`nio-alert-${alertType}`, {'nio-visible': visible}]"
  )
    .graphic(v-if="alertType === 'warning'")
      NioIcon(
        name="utility-exclamation"
        color="white"
        size="10"
        @click="dismiss"
      )
    .message.nio-h4.text-white(v-if="alertType === 'info'") {{ message }}
    .message.nio-p.text-primary-dark(v-if="alertType === 'warning'") {{ message }}
    NioIcon.dismiss(
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
    "visible": { type: Boolean, required: false, default: false},
    "message": { type: String, required: false, default: '' } 
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