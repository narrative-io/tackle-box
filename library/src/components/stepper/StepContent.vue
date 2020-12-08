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
      ) {{ previousStepLabel }}
      NioButton(
        normal-primary 
        @click="nextStep"
        :disabled="!valid"
      ) {{ nextStepLabel }}
    .nio-step-content-actions.final-step(v-if="isLastStep")
      NioButton(
        normal-primary 
        @click="submit"
        :disabled="!valid"
      ) {{ finalStepLabel }}
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
		"isLastStep": { type: Boolean, required: false, default: false },
		"nextStepLabel": { type: String, required: true},
		"previousStepLabel": { type: String, required: true },
		"finalStepLabel": { type: String, required: true }
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
		},
		submit() {
			this.$emit('submit')
		}
  },
  components: { NioButton, NioDivider }
}
</script>

<style lang="sass" scoped>
  @import '../../styles/mixins/stepper/_step-content'  
</style>