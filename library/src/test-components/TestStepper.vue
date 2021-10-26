<template lang="pug">
  .test-stepper
    NioStepper(
      :orderedSteps="steps"
      :currentStep="currentStep"
      :completedSteps="completedSteps"
      finalStepLabel="Activate Subscription"
      @nextStep="nextStep"
      @previousStep="previousStep"
      @submit="submit"
    )
      NioStep(
        stepName="source test"
        :valid="valid['source test']"
        :summary="stepSummary"
        simpleSummary
      )
        template(v-slot:content)
          .test        
            NioButton(normal-primary v-if="!valid['source test']" @click="valid['source test'] = true") Set Valid
            NioButton(normal-secondary v-if="valid['source test']" @click="valid['source test'] = false") Set Invalid
      NioStep(
        stepName="match"
        :valid="valid.match"
        :summary="stepSummary"
        customSummary
      )
        template(v-slot:custom-summary)
          .stuff Test
        template(v-slot:header-complete)
        template(v-slot:content) 
          .test
            NioButton(normal-primary v-if="!valid.match" @click="valid.match = true") Set Valid
            NioButton(normal-secondary v-if="valid.match" @click="valid.match = false") Set Invalid
      NioStep(
        stepName="destination test stuff"
        :valid="valid.destination"
        :summary="stepSummary"
      )
        template(v-slot:header-complete)
        template(v-slot:content)
          .test
            NioButton(normal-primary v-if="!valid.destination" @click="valid.destination = true") Set Valid
            NioButton(normal-secondary v-if="valid.destination" @click="valid.destination = false") Set Invalid
      NioStep(
        stepName="budget"
        :valid="valid.budget"
        :summary="stepSummary"
      )
        template(v-slot:header-complete)
        template(v-slot:content)
          .test
            NioButton(normal-primary v-if="!valid.budget" @click="valid.budget = true") Set Valid
            NioButton(normal-secondary v-if="valid.budget" @click="valid.budget = false") Set Invalid
      NioStep(
        stepName="payment"
        :valid="valid.payment"
        :summary="stepSummary"
      )
        template(v-slot:header-complete)
        template(v-slot:content)
          .test
            NioButton(normal-primary v-if="!valid.payment" @click="valid.payment = true") Set Valid
            NioButton(normal-secondary v-if="valid.payment" @click="valid.payment = false") Set Invalid
      NioStep(
        stepName="confirmation"
        :valid="valid.confirmation"
        :summary="stepSummary"
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
    steps: ['source test', 'match', 'destination test stuff', 'budget', 'payment', 'confirmation'],
    currentStep: 'source test',
    completedSteps: [],
    valid: {
      'source test': false,
      match: false,
      destination: false, 
      budget: false,
      payment: false,
      confirmation: false
    },
    stepSummary: {
      title: "My stellar new order",
      detailsLabel: "Unique Ids",
      detailsValue: "103,000",
      detailsAnnotation: "Hashed Emails"
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
    },
    submit() {
      console.log('submit')
    }
  }
};
</script>

<style lang="sass" scoped>
</style>