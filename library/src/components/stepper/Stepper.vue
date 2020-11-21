<template lang="pug">
  v-expansion-panels.nio-stepper(v-model="activeStep")
    slot(v-if="orderedSteps")
</template>

<script>

import NioStep from './Step'

export default {
  name: 'nio-stepper',
  props: {
    "orderedSteps": { type: Array, required: true },
		"currentStep": { type: String, required: false, default: false },
		"completedSteps": { type: Array, required: false, default: [] },
  },
  data: () => ({
    activeStep: 0
  }),
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
    getStepIndex(stepName) {
      return this.orderedSteps.indexOf(stepName)
    }
  },
  watch: {
    currentStep() {
      this.activeStep = this.getStepIndex(this.currentStep)
    }
  },
  components: { NioStep }
}
</script>

<style lang="sass" scoped>
@import '../../styles/mixins/stepper/_stepper'  
</style>