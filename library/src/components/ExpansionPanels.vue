<template lang="pug">
  v-expansion-panels
    slot
</template>

<script>

export default {
  name: 'nio-expansion-panels',
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
  @import '../styles/mixins/_expansion-panels'  
</style>

