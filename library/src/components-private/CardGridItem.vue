<template lang="pug">
  .nio-card-grid-item(
    v-bind="$attrs"
    v-on="$listeners"
  )
    .nio-card
      slot
      .hover-controls
        .actions
          slot(name="hover-controls") 
</template>

<script>
  export default {
    name: 'nio-card-grid-item',
    mounted() {	
      this.$emit('mounted')
    },
    destroyed() {
      this.$emit('destroyed')
    }
  }
</script>

<style lang="sass" scoped>
  @import '../styles-private/_card-grid-item'  
</style>

