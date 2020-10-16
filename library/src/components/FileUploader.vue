<template lang="pug">
  .nio-file-uploader(
    :class="`state-${ currentState }`"
  )
    .graphic
      NioIcon(
        v-if="currentState === 'initial'"
        name="display-upload" 
        color="#415298"
        size="48"
      )
      NioIcon(
        v-if="currentState === 'selected'"
        name="display-file" 
        color="#415298"
        size="48"
      )
      NioIcon(
        v-if="currentState === 'error'"
        name="display-warning" 
        color="#415298"
        size="48"
      )
    .details
      .nio-h3.text-primary-darker Drag and Drop
      .nio-p.text-primary-dark {{ instructions }}
      .spacer
        .left
        .nio-h6.text-primary-dark OR
        .right
    .actions
      NioButton(
        v-if="currentState === 'initial'"
        normal-secondary 
        @click="browseClicked"
      ) Browse Files
      NioButton(
        v-if="currentState === 'selected'"
        normal-secondary
        @click="actionClicked"
      ) {{ actionLabel }}
      NioButton(
        v-if="currentState === 'working'"
        caution-outlined
        @click="cancelClicked"
      ) {{ actionLabel }}

</template>

<script>

import NioButton from './Button'
import NioIcon from './icon/Icon'

export default {
  name: 'nio-file-uploader',
  props: {
    "instructions": { type: String, required: false, default: "Choose a file" },
    "actionLabel": { type: String, required: false, default: "Go" },
    "state": { type: String, required: false, default: "initial" }
  },
  data: () => ({
    currentState: 0
  }),
  methods: {
    browseClicked() {
      this.$emit('browseClicked')
    },
    actionClicked() {
      this.$emit('browseClicked')
    },
    cancelClicked() {
      this.$emit('browseClicked')
    }
  },
  mounted() {	
    this.$emit('mounted')
  },
  destroyed() {
    this.$emit('destroyed')
  },
  watch: {
    state(val) {
      this.currentState = val
    }
  },
  components: { NioButton, NioIcon }
}

</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_file-uploader'  
</style>
