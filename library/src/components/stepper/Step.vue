<template lang="pug">
  v-expansion-panel.nio-step(
    :disabled="isLocked"
    :class="stepClass"
    @change="stepSelected"
  )
    NioStepHeader(
      :step-name="stepName"
      :complete="isComplete"
      :locked="isLocked"
      :step-index="stepIndex"
      :is-first-step="isFirstStep"
      :is-last-step="isLastStep"
      :summary="summary"
      :simple-summary="simpleSummary"
      :custom-summary="customSummary"
    )
      template(v-for="(index, name) in $scopedSlots" v-slot:[name]="data")
        slot(:name="name" v-bind="data") 
    NioStepContent(
      :step-name="stepName"
      :complete="isComplete"
      :is-first-step="isFirstStep"
      :is-last-step="isLastStep"
      :valid="valid"
      :next-step-label="nextStepLabel"
      :previous-step-label="previousStepLabel"
      :final-step-label="finalStepLabel"
      @previousStep="previousStep"
      @nextStep="nextStep"
      @submit="submit"
      :loading="loading"
    ) 
      template(
        v-for="(index, name) in $scopedSlots" 
        v-slot:[name]="data"
      )
        slot(
          v-bind="data"
          :name="name" 
        ) 
</template>

<script>

import NioStepHeader from './StepHeader'
import NioStepContent from './StepContent'
import { toKebabCase } from '@/modules/helpers'

export default {
  name: 'nio-step',
  components: { NioStepHeader, NioStepContent },
  props: {
    "stepName": { type: String, required: true },
    "valid": { type: Boolean, required: false, default: false },
    "summary": { type: Object, required: false },
    "simpleSummary": { type: Boolean, required: false, default: false },
    "customSummary": { type: Boolean, required: false, default: false },
  },
  data: () => ({
    orderedSteps: null
  }),
  computed: {
    stepIndex() {
      return this.orderedSteps && this.orderedSteps.indexOf(this.stepName) > -1 ? this.orderedSteps.indexOf(this.stepName) : undefined
    },
    isFirstStep() {
      return this.orderedSteps && this.orderedSteps.indexOf(this.stepName) === 0
    },
    isLastStep() {
      return this.orderedSteps && this.orderedSteps.indexOf(this.stepName) === this.orderedSteps.length - 1
    },
    isComplete() {
      return this.$parent.$parent.completedSteps.includes(this.stepName)
    },
    isLocked() {
      if (!this.orderedSteps) {
        return true
      }
      const lastCompletedStep = this.$parent.$parent.completedSteps.reduce((maxIndex, completedStep) => {
        if (this.orderedSteps.indexOf(completedStep) > maxIndex) {
          maxIndex = this.orderedSteps.indexOf(completedStep)
        }
        return maxIndex
      }, 0)
      if (this.orderedSteps.indexOf(this.stepName) > lastCompletedStep + 1 || (this.$parent.$parent.completedSteps.length === 0 && this.orderedSteps.indexOf(this.stepName) === 1)) {
        return true
      }
      return false
    },
    nextStepLabel() {
      return this.$parent.$parent.nextStepLabel
    },
    previousStepLabel() {
      return this.$parent.$parent.previousStepLabel
    },
    finalStepLabel() {
      return this.$parent.$parent.finalStepLabel
    },
    stepClass() {
      return `nio-step-name-${toKebabCase(this.stepName)}`
    },
    loading() {
      return this.$parent.$parent.loading
    }
  },
  mounted() {
    this.orderedSteps = this.$parent.$parent.orderedSteps
  },
  methods: {
    previousStep() {
      this.$parent.$parent.previousStep()
    },
    nextStep() {
      this.$parent.$parent.nextStep()
    },
    submit() {
      this.$parent.$parent.submit()
    },
    stepSelected() {
      this.$parent.$parent.stepSelected(this.stepName)
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../../styles/mixins/stepper/_step'  
</style>