<template lang="pug">
  .nio-select-destination SELECT DESTINATION
  
</template>

<script>


export default {
  name: 'nio-select-destination',
  props: {
    
  },
  data: () => ({
  }),
  computed: {
    
  },
  mounted() {
    
  },
  methods: {
   
  }, 
  destroyed() {
    this.$emit('destroyed')
  },
  components: {  }
}
</script>

<style lang="sass" scoped>
  @import '../../../../styles/mixins/connectors/destination/select-destination/_select-destination'
</style>