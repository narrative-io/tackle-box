<template lang="pug">
  v-btn.nio-button(
    :ripple="false" 
    :class="[`nio-button-${sizeAttr ? sizeAttr : size}`, `nio-button-${variantAttr ? variantAttr : variant}`, {'nio-button-caps': caps}]"
    v-bind="$attrs"
    v-on="$listeners" 
    ref="nio-button-ref"
  )
    slot
    template(v-for="(index, name) in $scopedSlots" v-slot:[name]="data")
      slot(:name="name" v-bind="data") 
</template>

<script>
  
  export default {
    name: 'nio-button',
    props: {
      "variant": { type: String, required: false, default: "primary" },
      "size": { type: String, required: false, default: "extra-large"},
      "caps": { type: Boolean, required: false, default: true }

    },
    methods: {
      applyHelperAttributes() {
        const attributes = this.$el.attributes
        if (attributes.getNamedItem('normal-primary')) {
          this.variantAttr = 'primary'
          this.sizeAttr = 'normal'
        }
        if (attributes.getNamedItem('normal-secondary')) {
          this.variantAttr = 'secondary'
          this.sizeAttr = 'normal'
        }
        if (attributes.getNamedItem('normal-tertiary')) {
          this.variantAttr = 'tertiary'
          this.sizeAttr = 'normal'
        }
        if (attributes.getNamedItem('jumbo-primary')) {
          this.variantAttr = 'primary'
          this.sizeAttr = 'extra-large'
        }
        if (attributes.getNamedItem('jumbo-secondary')) {
          this.variantAttr = 'secondary'
          this.sizeAttr = 'extra-large'
        }
      }
    },
    data: () => ({
      sizeAttr: null,
      variantAttr: null,
    }),
    mounted() {
      this.applyHelperAttributes()
    }
  }
</script>

<style lang="sass">
  @import '../styles/mixins/_button'  
</style>