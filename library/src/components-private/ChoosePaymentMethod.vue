<template lang="pug">
   .nio-choose-payment-method

</template>

<script>

export default {
  name: 'nio-choose-payment-method',
  mounted() {	
    this.$emit('mounted')
  },
  destroyed() {
    this.$emit('destroyed')
  },
  components: { }
}
</script>

<style lang="sass" scoped>
  @import '../styles-private/_choose-payment-method'  
</style>

