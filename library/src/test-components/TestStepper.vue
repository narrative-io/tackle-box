<template lang="pug">
  .test-stepper
    NioStepper(
      :steps="steps"
      :currentStep="currentStep"
      @nextStep="nextStep"
      @previousStep="previousStep"
    )
      NioStep
        NioStepHeader(
          stepName="source"
          stepIndex="0"
        )
        NioStepContent(
          
        ) source content
      NioStep
        NioStepHeader(
          stepName="destination"
          stepIndex="1"
        )
        NioStepContent(
         
        ) destination content
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
    steps: ['source', 'match'],
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