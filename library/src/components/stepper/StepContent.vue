<template lang="pug">
  v-expansion-panel-content.nio-step-content
    .nio-step-content-body
      slot(name="content")
    NioDivider(horizontal-solo)
    .nio-step-content-actions(v-if="!isLastStep")
      NioButton(
        :disabled="isFirstStep"
        normal-secondary 
        @click="previousStep"
      ) {{ previousStepLabel }}
      NioButton(
        :disabled="!valid"
        normal-primary 
        @click="nextStep"
      ) {{ nextStepLabel }}
    .nio-step-content-actions.final-step(v-if="isLastStep")
      NioButton(
        :disabled="!valid || loading"
        normal-primary 
        @click="submit"
      ) {{ finalStepLabel }}
</template>

<script>

import NioButton from '../Button'
import NioDivider from '../Divider'

export default {
  name: 'nio-step-content',
  components: { NioButton, NioDivider },
  props: {
    "stepName": { type: String, required: true },
    "complete": { type: Boolean, required: false, default: false },
    "valid": { type: Boolean, required: false, default: true },
    "isFirstStep": { type: Boolean, required: false, default: false },
    "isLastStep": { type: Boolean, required: false, default: false },
    "nextStepLabel": { type: String, required: true},
    "previousStepLabel": { type: String, required: true },
    "finalStepLabel": { type: String, required: true }
  },
  methods: {
    previousStep() {
      this.$emit('previousStep')
    },
    nextStep() {
      this.$emit('nextStep')
    },
    submit() {
      this.$emit('submit')
    }
  }
}
</script>

<style lang="sass" scoped>
  @import '../../styles/mixins/stepper/_step-content'  
</style>