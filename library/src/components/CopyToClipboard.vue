<template lang="pug">
  .nio-copy-to-clipboard
    NioButton.copy-to-clipboard-button(
      v-if="text"
      :class="{copied: textCopied}"
      normal-tertiary
      @click="copyToClipboard"
    ) {{ textCopied ? 'Copied to clipboard!' : 'Copy' }} 
</template>

<script>

import NioButton from './Button.vue'

export default {
  name: 'nio-copy-to-clipboard',
  components: { NioButton },
  props: {
    text: { type: String | Object, required: true },
  },
  data() {
    return {
      textCopied: false
    }
  },
  mounted() {	
    this.$emit('mounted')
  },
  destroyed() {
    this.$emit('destroyed')
  },
  methods: {
    copyToClipboard() {
      const text = this.text
      const dummy = document.createElement("textarea");
      document.body.appendChild(dummy)
      dummy.value = text
      dummy.select()
      document.execCommand("copy")
      document.body.removeChild(dummy)
      this.textCopied = true
      setTimeout(() => { this.textCopied = false }, 2000)
    }
  }
}
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_copy-to-clipboard'  
</style>

