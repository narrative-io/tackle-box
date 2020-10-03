<template lang="pug">
	.nio-nav-menu
</template>

<script>
  export default {
    name: 'nio-nav-menu',
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
  @import '../styles/mixins/navigation/_nav-manu.sass'  
</style>
