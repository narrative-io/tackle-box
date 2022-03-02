<template lang="pug">
  .nio-slat-group(:class="{'summary-slat-group': summarySlat}")
    slot
</template>

<script>

export default {
  name: 'nio-slat-group',
  data: () => ({
    summarySlat: false
  }),
  methods: {
    applyHelperAttributes() {
      const attributes = this.$el.attributes
      if (attributes.getNamedItem('summary')) {
        this.summarySlat = true
      }
    }	
  }
}
</script>

<style lang="sass" scoped>
  @import '../../styles/mixins/slat/_slat-group'  
</style>