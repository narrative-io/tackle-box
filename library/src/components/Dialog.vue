<template lang="pug">
  .nio-dialog(v-if="model" :class="{visible: model}")
    .nio-dialog-scrim
    transition(appear)
      .nio-dialog-content(
        v-if="model && visible" 
        ref="dialog"
        :style="{maxWidth: maxWidth}")
        slot
</template>

<script>

import { makeRandomId } from '@/modules/helpers'

export default {
  name: 'nio-dialog',
  props: {
    "model": { required: false },
    "maxWidth": { type: String, required: false, default: '100%' }
  },
  model: {
    prop: "model"
  },
  data: () => ({
    visible: false,
    dialogId: null,
    tracked: false
  }),
  watch: {
    model(val) {
      if (val === true && this.tracked === false) {
        this.$nextTick(() => {
          this.tracked = true
          this.nioAddHeightTrackedElement(this.dialogId, this.$refs.dialog) 
        })	
      } else if (val === false && this.tracked === true) {
        this.tracked = false
        this.nioRemoveHeightTrackedElement(this.dialogId) 
      }
    }
  },
  mounted() {
    this.dialogId = makeRandomId()
    this.visible = true
    this.$emit('mounted')
  },
  destroyed() {
    this.nioRemoveHeightTrackedElement(this.dialogId)
    this.$emit('destroyed')
  }
}
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_dialog'
</style>
