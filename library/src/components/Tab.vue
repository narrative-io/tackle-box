<template lang="pug">
    v-tab.nio-tab(
    ) 
      slot
</template>

<script>
  export default {
    name: 'nio-tab',
    props: {
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
  @import '../styles/mixins/_tab'  
</style>
