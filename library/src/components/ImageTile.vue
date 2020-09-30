<template lang="pug">
  v-img(
    :class="[size]"
    v-bind="$attrs"
    v-on="$listeners" 
  )
</template>

<script>
  export default {
    name: 'nio-image-tile',
    props: {
      "size": { type: String, required: false, default: "normal" }
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
  @import '../styles/mixins/_image-tile'  
</style>
