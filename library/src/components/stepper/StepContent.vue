<template lang="pug">
  v-expansion-panel-content.nio-step-content
    .nio-step-content-body
      slot
    .nio-step-content-actions
      NioButton(normal-secondary @click="backClicked") Back
      NioButton(normal-primary @click="continueClicked") Continue

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
    backClicked() {
      this.$emit('back')
    },
    continueClicked() {
      this.$emit('continue')
    }
  },
  components: { NioButton }
}
</script>

<style lang="sass" scoped>
@import '../../styles/mixins/stepper/_step-content'  
</style>