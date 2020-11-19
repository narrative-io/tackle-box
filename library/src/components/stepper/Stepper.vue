<template lang="pug">
  v-expansion-panels.nio-stepper(v-model="activeStep")
    slot    
</template>

<script>

import NioStepHeader from './StepHeader'
import NioStepBody from './StepBody'

export default {
  name: 'nio-stepper',
  props: {
    "steps": { type: Array, required: true},
    "currentStep": { type: String, required: false, default: false}
  },
  data: () => ({

  }),
  mounted() {

},
  methods: {
    
  },
  components: { NioStepHeader, NioStepBody }
}
</script>

<style lang="sass" scoped>
  @import '../../styles/mixins/stepper/_stepper'  
</style>