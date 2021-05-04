<template lang="pug">
  v-expansion-panels
    v-expansion-panel
      v-expansion-panel-header
        slot(name="header")
      v-expansion-panel-content
        slot(name="content")
   
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

