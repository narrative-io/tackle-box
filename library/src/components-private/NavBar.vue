<template lang="pug">
	.nio-nav-bar
</template>

<script>
  export default {
    name: 'nio-nav-bar',
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
  // @import '../styles/mixins/navigation/_nav-bar.sass'  
</style>
