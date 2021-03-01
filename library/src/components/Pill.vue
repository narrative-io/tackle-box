<template lang="pug">
  .nio-pill(:class="[supportedVariantClass, {'selected-value': selectedValueAttr, 'tag': tagAttr}]" :style="{backgroundColor: backgroundColor}") 
    .nio-pill-content-wrapper
      .nio-pill-content {{ text }}
</template>

<script>
 
  export default {
    name: 'nio-pill',
    data: () => ({
      selectedValueAttr: false,
      tagAttr: false,
      supportedVariants: ['new', 'coming', 'updated', 'alpha', 'beta']
    }),
    props: {
      "text": { type: String, required: true },
      "backgroundColor": { type: String, required: false }
    },
    computed: {
      supportedVariantClass() {
        return this.supportedVariants.includes(this.text) ? this.text : ''
      }
    },
    methods: {
      applyHelperAttributes() {
        const attributes = this.$el.attributes
        if (attributes.getNamedItem('selected-value')) {
          this.selectedValueAttr = true
        }	
        if (attributes.getNamedItem('tag')) {
          this.tagAttr = true
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
