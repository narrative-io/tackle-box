<template lang="pug">
  .test-stepper
    NioStepper(
      :orderedSteps="steps"
      :currentStep="currentStep"
      :completedSteps="completedSteps"
      finalStepLabel="Activate Subscription"
      @nextStep="nextStep"
      @previousStep="previousStep"
    )
      NioStep(
        stepName="source"
        :valid="valid.source"
      )
        template(v-slot:content)
          .test        
            NioButton(normal-primary v-if="!valid.source" @click="valid.source = true") Set Valid
            NioButton(normal-secondary v-if="valid.source" @click="valid.source = false") Set Invalid
      NioStep(
        stepName="match"
        :valid="valid.match"
      )
        template(v-slot:header-complete)
        template(v-slot:content) 
          .test
            NioButton(normal-primary v-if="!valid.match" @click="valid.match = true") Set Valid
            NioButton(normal-secondary v-if="valid.match" @click="valid.match = false") Set Invalid
      NioStep(
        stepName="destination"
        :valid="valid.destination"
      )
        template(v-slot:header-complete)
        template(v-slot:content)
          .test
            NioButton(normal-primary v-if="!valid.destination" @click="valid.destination = true") Set Valid
            NioButton(normal-secondary v-if="valid.destination" @click="valid.destination = false") Set Invalid
      NioStep(
        stepName="budget"
        :valid="valid.budget"
      )
        template(v-slot:header-complete)
        template(v-slot:content)
          .test
            NioButton(normal-primary v-if="!valid.budget" @click="valid.budget = true") Set Valid
            NioButton(normal-secondary v-if="valid.budget" @click="valid.budget = false") Set Invalid
      NioStep(
        stepName="payment"
        :valid="valid.payment"
      )
        template(v-slot:header-complete)
        template(v-slot:content)
          .test
            NioButton(normal-primary v-if="!valid.payment" @click="valid.payment = true") Set Valid
            NioButton(normal-secondary v-if="valid.payment" @click="valid.payment = false") Set Invalid
      NioStep(
        stepName="confirmation"
        :valid="valid.confirmation"
      )
        template(v-slot:header-complete)
        template(v-slot:content)
          .test
            NioButton(normal-primary v-if="!valid.confirmation" @click="valid.confirmation = true") Set Valid
            NioButton(normal-secondary v-if="valid.confirmation" @click="valid.confirmation = false") Set Invalid     
</template>

<script>

import NioStepper from '../components/stepper/Stepper'
import NioStep from '../components/stepper/Step'
import NioStepHeader from '../components/stepper/StepHeader'
import NioStepContent from '../components/stepper/StepContent'
import NioButton from '../components/Button'

export default {
  components: {
    NioStepper,
    NioStep,
    NioStepHeader,
    NioStepContent,
    NioButton
  },
  data: () => ({
    steps: ['source', 'match', 'destination', 'budget', 'payment', 'confirmation'],
    currentStep: 'source',
    completedSteps: [],
    valid: {
      source: false,
      match: false,
      destination: false, 
      budget: false,
      payment: false,
      confirmation: false
    }
  }),
  methods: {
    nextStep() {
      if (!this.completedSteps.includes(this.currentStep)) {
        this.completedSteps.push(this.currentStep)
      }
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