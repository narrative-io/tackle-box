<template lang="pug">
  .nio-card(
    v-bind="$attrs"
    v-on="$listeners"
  )
    slot
</template>

<script>
  export default {
    name: 'nio-card',
    mounted() {	
      this.$emit('mounted')
    },
    destroyed() {
      this.$emit('destroyed')
    }
  }
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_card'  
</style>

