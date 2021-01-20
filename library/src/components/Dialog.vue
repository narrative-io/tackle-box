<template lang="pug">
  .nio-dialog(v-if="model" :class="{visible: model}")
    .nio-dialog-scrim
    transition(appear)
      .nio-dialog-content(v-if="model && visible" :style="{maxWidth: maxWidth}")
        slot
</template>

<script>
  export default {
    name: 'nio-dialog',
    props: {
      "model": { required: false },
      "maxWidth": { type: String, required: false, default: '100%' }
    },
    model: {
      prop: "model"
    },
    data: () => ({
      visible: false
    }),
    methods: {
      
    },
    mounted() {	
      this.visible = true
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
