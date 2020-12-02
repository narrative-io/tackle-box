<template lang="pug">
  .nio-expansion-panel(
  ) EpxansionPanel
   
</template>

<script>
  export default {
    name: 'nio-expansion-panel',
    data: () => ({
     
    }),
    mounted() {	
      this.$emit('mounted')
    },
    destroyed() {
      this.$emit('destroyed')
    },
    methods: {
		
		}
  }
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_expansion-panel'  
</style>

