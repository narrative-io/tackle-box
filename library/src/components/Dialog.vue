<template lang="pug">
  .nio-dialog(v-if="model")
    .nio-dialog-content(:style="{maxWidth: maxWidth}")
      .nio-dialog-content-body
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
    }),
    methods: {
      
    },
    mounted() {	
      this.$emit('mounted')
    },
    destroyed() {
      this.$emit('destroyed')
    },
    // watch: {
    //   'max-width': {
    //     handler(val) {
    //       console.log(val)
    //     }
    //   }
    // }
  }
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_dialog'  
</style>
