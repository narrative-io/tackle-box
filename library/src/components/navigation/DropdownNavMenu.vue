<template lang="pug">
	.nio-dropdown-nav-menu
</template>

<script>
  export default {
    name: 'nio-dropdown-nav-menu',
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
  @import '../styles/mixins/navigation/_dropdown-nav-menu.sass'  
</style>
