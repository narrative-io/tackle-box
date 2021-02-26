<template lang="pug">
  .nio-pill(:class="[text, {'selected-value': selectedValueAttr}]" :style="{backgroundColor: backgroundColor}") 
    .nio-pill-content-wrapper
      .nio-pill-content {{ text }}
</template>

<script>
 
  export default {
    name: 'nio-pill',
    data: () => ({
			selectedValueAttr: false
    }),
    props: {
      "text": { type: String, required: true },
      "backgroundColor": { type: String, required: false }
		},
		methods: {
			applyHelperAttributes() {
				const attributes = this.$el.attributes
				if (attributes.getNamedItem('selected-value')) {
					this.selectedValueAttr = true
				}	
			}
		},
    mounted() {	
			this.applyHelperAttributes()
      this.$emit('mounted')
    },
    destroyed() {
      this.$emit('destroyed')
    }
  }
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_pill'  
</style>
