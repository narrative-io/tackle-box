<template lang="pug">
  .nio-pill(:class="text") 
    .nio-pill-content-wrapper
      .nio-pill-content.text-c-white {{ text }}
</template>

<script>
 
  export default {
    name: 'nio-pill',
    data: () => ({
     
    }),
    props: {
      "text": { type: String, required: true },
      "backgroundColor": { type: String, required: false }
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
  @import '../styles/mixins/_pill'  
</style>
