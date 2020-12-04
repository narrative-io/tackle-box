<template lang="pug">
  .nio-slat-group(:class="{'summary-slat-group': summarySlat}")
    slot
</template>

<script>

export default {
  name: 'nio-slat-group',
  props: {
  },
  data: () => ({
		summarySlat: false
  }),
  mounted() {
  },
  methods: {
		applyHelperAttributes() {
      const attributes = this.$el.attributes
      if (attributes.getNamedItem('summary')) {
        this.summarySlat = true
			}
		}	
  },
  components: { }
}
</script>

<style lang="sass" scoped>
  @import '../../styles/mixins/slat/_slat-group'  
</style>