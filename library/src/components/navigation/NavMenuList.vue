<template lang="pug">
	.nio-nav-menu-list NavMenuList
</template>

<script>
  export default {
    name: 'nio-nav-menu-list',
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
  // @import '../styles/mixins/navigation/_nav-menu-list.sass'  
</style>
