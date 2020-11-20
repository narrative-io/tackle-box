<template lang="pug">
  .test-stepper
    NioStepper(
      :orderedSteps="steps"
      :currentStep="currentStep"
      @nextStep="nextStep"
      @previousStep="previousStep"
    )
      NioStep
        NioStepHeader(
          stepName="source"
          :complete="true"
        )
        NioStepContent(
          
        ) source content
      NioStep
        NioStepHeader(
          stepName="match"
        )
        NioStepContent(
         
        ) match content
      NioStep
        NioStepHeader(
          stepName="destination"
        )
        NioStepContent(
         
        ) destination content
      NioStep
        NioStepHeader(
          stepName="budget"
        )
        NioStepContent(
         
        ) budget content
      NioStep
        NioStepHeader(
          stepName="payment"
        )
        NioStepContent(
         
        ) payment content
      NioStep
        NioStepHeader(
          stepName="confirmation"
        )
        NioStepContent(
         
        ) confirmation content        
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
    currentStep: 'source'
  }),
  methods: {
    nextStep() {
      console.log('nextStep')
    },
    previousStep() {
      console.log('previousStep')
    }
  }
};
</script>

<style lang="sass" scoped>
.test-stepper
</style>