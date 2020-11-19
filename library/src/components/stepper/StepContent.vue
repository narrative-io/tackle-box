<template lang="pug">
  v-expansion-panel-content.nio-step-content
    .nio-step-content-body
      slot
    .nio-step-content-actions
      NioButton(normal-secondary @click="nioPreviousStep") Back
      NioButton(normal-primary @click="nioNextStep") Continue

</template>

<script>

import NioButton from '../Button'

export default {
  name: 'nio-step-content',
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
  components: { NioButton }
}
</script>

<style lang="sass" scoped>
  @import '../../styles/mixins/stepper/_step-content'  
</style>