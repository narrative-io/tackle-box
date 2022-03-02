<template lang="pug">
  v-expansion-panels.nio-stepper(v-model="activeStep")
    slot(v-if="orderedSteps")
</template>

<script>

import NioStep from './Step'

export default {
  name: 'nio-stepper',
  components: { NioStep },
  props: {
    "orderedSteps": { type: Array, required: true },
    "currentStep": { type: String, required: false, default: false },
    "completedSteps": { type: Array, required: false, default: [] },
    "nextStepLabel": { type: String, required: false, default: "continue"},
    "previousStepLabel": { type: String, required: false, default: "back"},
    "finalStepLabel": { type: String, required: false, default: "finish"}
  },
  data: () => ({
    activeStep: 0
  }),
  watch: {
    currentStep() {
      this.activeStep = this.getStepIndex(this.currentStep)
    }
  },
  mounted() {
    this.activeStep = this.getStepIndex(this.currentStep)
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
    },
    getStepIndex(stepName) {
      return this.orderedSteps.indexOf(stepName)
    },
    stepSelected(stepName) {
      this.$emit('stepSelected', stepName)
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../../styles/mixins/stepper/_stepper'  
</style>