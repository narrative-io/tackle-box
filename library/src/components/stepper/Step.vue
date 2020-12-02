<template lang="pug">
  v-expansion-panel.nio-step(
    :disabled="isLocked"
  )
    NioStepHeader(
      :stepName="stepName"
      :complete="isComplete"
      :locked="isLocked"
      :stepIndex="stepIndex"
      :isFirstStep="isFirstStep"
      :isLastStep="isLastStep"
      :summary="summary"
    )
      template(v-for="(index, name) in $scopedSlots" v-slot:[name]="data")
        slot(:name="name" v-bind="data") 
    NioStepContent(
      :stepName="stepName"
      :complete="isComplete"
      :isFirstStep="isFirstStep"
      :isLastStep="isLastStep"
      :valid="valid"
      :nextStepLabel="nextStepLabel"
      :previousStepLabel="previousStepLabel"
      :finalStepLabel="finalStepLabel"
      @previousStep="previousStep"
      @nextStep="nextStep"
    ) 
      template(v-for="(index, name) in $scopedSlots" v-slot:[name]="data")
        slot(:name="name" v-bind="data") 
</template>

<script>

import NioStepHeader from './StepHeader'
import NioStepContent from './StepContent'

export default {
  name: 'nio-step',
  props: {
    "stepName": { type: String, required: true },
    "valid": { type: Boolean, required: false, default: false },
    "summary": { type: Object, required: false }
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
    }
  },
  components: { NioStepHeader, NioStepContent }
}
</script>

<style lang="sass" scoped>
@import '../../styles/mixins/stepper/_step'  
</style>