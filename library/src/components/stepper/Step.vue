<template lang="pug">
  .nio-step
      
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
    
  },
  components: { NioStepHeader, NioStepContent }
}
</script>

<style lang="sass" scoped>
  @import '../../styles/mixins/stepper/_step'  
</style>