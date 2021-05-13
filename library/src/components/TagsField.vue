<template lang="pug">
    .nio-tags-field
      
</template>

<script>
  export default {
    name: 'nio-tags-field',
    props: {
      // "model": { required: true },
    },
    data: () => ({
      value: ''
    }),
    mounted() {	
      this.value = this.model
      this.$emit('mounted') 
    },
    destroyed() {
      this.$emit('destroyed')
    }
  }
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_tags-field'  
</style>
