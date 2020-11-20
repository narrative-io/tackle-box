<template lang="pug">
  v-expansion-panel.nio-step
    slot(v-if="orderedSteps")
      
</template>

<script>

import NioStepHeader from './StepHeader'
import NioStepContent from './StepContent'

export default {
  name: 'nio-step',
  props: {
    
  },
  data: () => ({
    orderedSteps: null
  }),
  mounted() {
    this.orderedSteps = this.$parent.$parent.orderedSteps
  },
  methods: {
    nioPreviousStep() {
      this.$parent.$parent.nioPreviousStep()
    },
    nioNextStep() {
      this.$parent.$parent.nioNextStep()
    }
  },
  components: { NioStepHeader, NioStepContent }
}
</script>

<style lang="sass" scoped>
@import '../../styles/mixins/stepper/_step'  
</style>