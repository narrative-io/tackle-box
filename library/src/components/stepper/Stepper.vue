<template lang="pug">
  v-expansion-panels.nio-stepper(v-model="currentStep")
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

  }),
  mounted() {

  },
  methods: {
    
  },
  components: { NioStep }
}
</script>

<style lang="sass" scoped>
@import '../../styles/mixins/stepper/_stepper'  
</style>