<template lang="pug">
  v-expansion-panel-content.nio-step-content
    .nio-step-content-body
      slot(name="content")
    NioDivider(horizontal-solo)
    .nio-step-content-actions(v-if="!isLastStep")
      NioButton(
        normal-secondary 
        @click="previousStep"
        :disabled="isFirstStep"
      ) Back
      NioButton(
        normal-primary 
        @click="nextStep"
        :disabled="!valid"
      ) Continue
    .nio-step-content-actions(v-if="isLastStep")
      NioButton(
        normal-primary 
        @click="nextStep"
        :disabled="!valid"
      ) Complete
</template>

<script>

import NioButton from '../Button'
import NioDivider from '../Divider'

export default {
  name: 'nio-step-content',
  props: {
    "stepName": { type: String, required: true },
		"complete": { type: Boolean, required: false, default: false },
    "valid": { type: Boolean, required: false, default: true },
    "isFirstStep": { type: Boolean, required: false, default: false },
    "isLastStep": { type: Boolean, required: false, default: false }
  },
  data: () => ({
  }),
  mounted() {
  },
  methods: {
    previousStep() {
      this.$emit('previousStep')
    },
    nextStep() {
      this.$emit('nextStep')
    }
  },
  components: { NioButton, NioDivider }
}
</script>

<style lang="sass" scoped>
  @import '../../styles/mixins/stepper/_step-content'  
</style>