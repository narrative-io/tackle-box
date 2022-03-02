<template lang="pug">
  NioCard.nio-card-grid-item(
    v-bind="$attrs"
    v-on="$listeners"
  )
    slot(name="informational")
    .nio-card
      slot
      .hover-controls
        .actions
          slot(name="hover-controls") 
</template>

<script>
import NioCard from '../components/Card'

export default {
  name: 'nio-card-grid-item',
  components: { NioCard },
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

