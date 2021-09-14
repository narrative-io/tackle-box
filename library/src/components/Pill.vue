<template lang="pug">
  .nio-pill(:class="[supportedVariantClass, {'selected-value': selectedValueAttr, 'tag': tagAttr, 'price': priceAttr, 'append-icon' : appendAttr}, {'disabled': disabled}]" :style="{backgroundColor: backgroundColor}") 
    .nio-pill-content-wrapper
      .nio-pill-content {{ text }}
        NioIcon.prepend(
          v-if="prependAttr && iconName"
          :name="iconName"
          :size="12"
          :color="iconColor"
          @click="$emit('prependClicked')"
        )
        slot
        NioIcon.append(
          v-if="appendAttr && iconName"
          :name="iconName"
          :size="12"
          :color="iconColor"
          @click="$emit('appendClicked')"
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
    prependAttr: false,
    listItemAttr: false,
    supportedVariants: ['new', 'coming', 'updated', 'alpha', 'beta']
  }),
  props: {
    "text": { type: String, required: false },
    "backgroundColor": { type: String, required: false },
    "iconName": { type: String, required: false, default: null },
    "iconColor": { type: String, required: false, default: '#000' },
    "disabled": { type: Boolean, required: false, default: false }
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
      if (attributes.getNamedItem('prepend-icon')) {
        this.prependAttr = true
      }
      if (attributes.getNamedItem('list-item')) {
        this.listItemAttr = true
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
