<template lang="pug">
	.nio-side-nav-menu
</template>

<script>
  export default {
    name: 'nio-side-nav-menu',
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
  @import '../styles/mixins/navigation/_side-nav-menu.sass'  
</style>
