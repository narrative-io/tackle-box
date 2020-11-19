<template lang="pug">
  .test-stepper
    
</template>

<script>

import NioStepper from '../components/stepper/Stepper'

export default {
  components: {
    NioStepper
  },
  data: () => ({
		steps: ['source', 'match', 'destination', 'budget']
  })
};
</script>

<style lang="sass" scoped>
.test-stepper
</style>