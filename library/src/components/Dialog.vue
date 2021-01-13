<template lang="pug">
  .nio-dialog(v-if="model")
    .nio-dialog-content
      slot
</template>

<script>
  export default {
    name: 'nio-dialog',
    props: {
      "model": { required: false },
    },
    model: {
      prop: "model"
    },
    data: () => ({
    }),
    methods: {
    
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
  @import '../styles/mixins/_dialog'  
</style>
