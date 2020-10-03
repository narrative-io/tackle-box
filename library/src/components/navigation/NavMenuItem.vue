<template lang="pug">
	.nio-nav-menu-item
</template>

<script>
  export default {
    name: 'nio-nav-menu-item',
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
  @import '../styles/mixins/navigation/_nav-menu-item.sass'  
</style>
