<template lang="pug">
  v-expansion-panel.nio-step
    slot(
      
    )
      
</template>

<script>

import NioStepHeader from './StepHeader'
import NioStepContent from './StepContent'

export default {
  name: 'nio-step',
  props: {
    
  },
  data: () => ({

  }),
  mounted() {
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