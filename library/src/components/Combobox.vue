<template lang="pug">
  .nio-combobox Combobox
   
</template>

<script>


export default {
  name: 'nio-combobox',
  props: {
    "model": { required: false },
  },
  model: {
    prop: "model"
  },
  data: () => ({
   
  }),
  watch: {
   
  },
  mounted() {
    this.$emit('mounted')
  },
  destroyed() {
    this.$emit('destroyed')
  }
}
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_combobox'
</style>
