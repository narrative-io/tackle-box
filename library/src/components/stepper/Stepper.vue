<template lang="pug">
  v-expansion-panels.nio-stepper(v-model="activeStep")
    slot
</template>

<script>

import NioStep from './Step'

export default {
  name: 'nio-stepper',
  props: {
    "steps": { type: Array, required: true},
    "currentStep": { type: String, required: false, default: false}
  },
  data: () => ({
    activeStep: 0
  }),
  mounted() {
    this.activeStep = this.getStepIndex(this.currentStep)
  },
  methods: {
    nioPreviousStep() {
      this.$emit('previousStep')
    },
    nioNextStep() {
      this.$emit('nextStep')
    },
    getStepIndex(stepName) {
      return this.steps.indexOf(stepName)
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