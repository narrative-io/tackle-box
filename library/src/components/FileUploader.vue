<template lang="pug">
  .nio-file-uploader(
    :class="`state-${ state[currentState] }`"
  )
    .graphic
      NioIcon(
        v-if="currentState === state.initial"
        name="display-upload" 
        color="#415298"
        size="48"
      )
      NioIcon(
        v-if="currentState === state.selected"
        name="display-file" 
        color="#415298"
        size="48"
      )
      NioIcon(
        v-if="currentState === state.error"
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
        v-if="currentState === 0"
        normal-secondary 
        @click="browseClicked"
      ) Browse Files
      NioButton(
        v-if="currentState === 1"
        normal-secondary
        @click="actionClicked"
      ) {{ actionLabel }}
      NioButton(
        v-if="currentState === 2"
        caution-outlined
        @click="cancelClicked"
      ) {{ actionLabel }}

</template>

<script>

const state = {
  0: 'initial',
  1: 'selected',
  2: 'working',
  3: 'success',
  4: 'error',
  'initial': 0,
  'selected': 1,
  'working': 2,
  'success': 3,
  'error': 4
}

import NioButton from './Button'
import NioIcon from './icon/Icon'

export default {
  name: 'nio-file-uploader',
  props: {
    "instructions": { type: String, required: false, default: "Choose a file" },
    "actionLabel": { type: String, required: false, default: "Go" }
  },
  data: () => ({
    currentState: 0,
    state: state
  }),
  methods: {
    browseClicked() {

    },
    actionClicked() {

    },
    cancelClicked() {

    }
  },
  mounted() {	
    this.$emit('mounted')
  },
  destroyed() {
    this.$emit('destroyed')
  },
  components: { NioButton, NioIcon }
}

</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_file-uploader'  
</style>
