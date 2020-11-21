<template lang="pug">
  v-expansion-panel.nio-step
    NioStepHeader(
      :stepName="stepName"
      :complete="isComplete"
      :stepIndex="stepIndex"
      :isFirstStep="isFirstStep"
      :isLastStep="isLastStep"
    )
      template(v-for="(index, name) in $scopedSlots" v-slot:[name]="data")
        slot(:name="name" v-bind="data") 
    NioStepContent(
      :stepName="stepName"
      :complete="isComplete"
      :stepIndex="stepIndex"
      :isFirstStep="isFirstStep"
      :isLastStep="isLastStep"
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
    "stepName": { type: String, required: true}
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