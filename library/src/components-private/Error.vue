<template lang="pug">
  .container.pt-5.pb-10.error-page
    .d-flex.justify-end
      nio-button(caution-text @click="close") Close
    .d-flex.justify-center
      img.error-image(:src="imageUrl")
    .heading.nio-h1.text-primary-darker.text-center.mt-5.mb-5 Oh no!
    p.text-primary-dark.text-center.mb-0 There was an issue with this request. It's us, it's not you.
    p.text-primary-dark.text-center.mt-0.mb-5 However please reach out to support and show them the error message below.
    
    NioTextArea.error-textarea.text-left.p-0(v-model="textError")
    .d-flex.justify-center.mt-5
      NioButton.copy-button(
        normal-secondary
        @click="copyToClipboard('tagKey')" ) {{ textCopied.tagKey ? 'Copied to clipboard!' : 'Copy' }}

      a.mail-to(href="mailto:support@narrative.io")
        NioButton.ml-5(
          normal-secondary
        ) Mail to support@narrative.io 

</template>

<script>
import NioCardGridItem from './CardGridItem'
import NioButton from '../components/Button'
import NioTextArea from '../components/Textarea.vue'
export default {
  components: {
    NioCardGridItem,
    NioButton,
    NioTextArea
  },
  data() {
    return {
      textCopied: {
        tagKey: false
      },
      textError: ''
    }
  },
  props: {
    error: {
      type: String,
      default: 'Unknown Error'
    },
    imageUrl: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.textError = this.error
  },
  methods: {
    close() {
      this.$emit('close')
    },
    copyToClipboard(element) { 
      const textArea = document.querySelector('.error-textarea textarea')
      textArea.select()
      document.execCommand("copy")
      textArea.blur()
      this.textCopied[element] = true
      setTimeout(() => { 
        this.textCopied[element] = false
       }, 2000) 
    },
  },
}
</script>

<style lang="sass" scoped>
.error-page
  .error-text
    align-self: flex-start
  ::v-deep .v-input__slot
    textarea
      min-height: 400px
      resize: none
  .mail-to
    text-decoration: none
  .error-image
    max-width: 50%
    margin: 0 auto
</style>