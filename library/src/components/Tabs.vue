<template lang="pug">
    .nio-tabs tabs
</template>

<script>
  export default {
    name: 'nio-tabs',
    props: {
      "activeTab": { required: false },
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
  @import '../styles/mixins/_tabs'  
</style>
