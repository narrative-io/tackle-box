<template lang="pug">
  .nio-pill(:class="[supportedVariantClass, {'selected-value': selectedValueAttr, 'tag': tagAttr, 'price': priceAttr, 'append-icon' : appendAttr}]" :style="{backgroundColor: backgroundColor}") 
    .nio-pill-content-wrapper
      .nio-pill-content {{ text }}
        slot
        NioIcon.append(
          v-if="appendAttr && iconName"
          :name="iconName"
          :size="12"
        )

</template>

<script>
 
import NioIcon from './icon/Icon'

export default {
  name: 'nio-pill',
  data: () => ({
    selectedValueAttr: false,
    tagAttr: false,
    priceAttr: false,
    appendAttr: false,
    supportedVariants: ['new', 'coming', 'updated', 'alpha', 'beta']
  }),
  props: {
    "text": { type: String, required: false },
    "backgroundColor": { type: String, required: false },
    "iconName": { type: String, required: false, default: null }
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
      if (attributes.getNamedItem('price')) {
        this.priceAttr = true
      }	
      if (attributes.getNamedItem('append-icon')) {
        this.appendAttr = true
      }
      
    }
  },
  mounted() {	
    this.applyHelperAttributes()
    this.$emit('mounted')
  },
  destroyed() {
    this.$emit('destroyed')
  },
  components: { NioIcon }
}
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_pill'  
</style>
