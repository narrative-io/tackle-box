<template lang="pug">
  .test-stepper
    NioStepper(
      :orderedSteps="steps"
      :currentStep="currentStep"
      :completedSteps="completedSteps"
      @nextStep="nextStep"
      @previousStep="previousStep"
    )
      NioStep(
        stepName="source"
      )
        template(v-slot:header-complete)
        template(v-slot:content) source content
      NioStep(
        stepName="match"
      )
        template(v-slot:header-complete)
        template(v-slot:content) match content
      NioStep(
        stepName="destination"
      )
        template(v-slot:header-complete)
        template(v-slot:content) destination content
      NioStep(
        stepName="budget"
      )
        template(v-slot:header-complete)
        template(v-slot:content) budget content
      NioStep(
        stepName="payment"
      )
        template(v-slot:header-complete)
        template(v-slot:content) payment content
      NioStep(
        stepName="confirmation"
      )
        template(v-slot:header-complete)
        template(v-slot:content) confirmation content        
</template>

<script>

import NioStepper from '../components/stepper/Stepper'
import NioStep from '../components/stepper/Step'
import NioStepHeader from '../components/stepper/StepHeader'
import NioStepContent from '../components/stepper/StepContent'

export default {
  components: {
    NioStepper,
    NioStep,
    NioStepHeader,
    NioStepContent
  },
  data: () => ({
    steps: ['source', 'match', 'destination', 'budget', 'payment', 'confirmation'],
		currentStep: 'source',
		completedSteps: ['source', 'match']
  }),
  methods: {
    nextStep() {
      this.currentStep = this.steps[this.steps.indexOf(this.currentStep) + 1]
    },
    previousStep() {
      this.currentStep = this.steps[this.steps.indexOf(this.currentStep) - 1]
    }
  }
};
</script>

<style lang="sass" scoped>
.test-stepper
</style>