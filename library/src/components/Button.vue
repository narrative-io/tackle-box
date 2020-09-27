<template lang="pug">
  v-btn.nio-button(
    :ripple="false" 
    :class="[`nio-button-${ sizeAttr ? sizeAttr : size }`, `nio-button-${ variantAttr ? variantAttr : variant }`, { 'nio-button-caps': caps }, { 'nio-button-prepend': prependAttr }, { 'nio-button-append': appendAttr }, { 'nio-button-icon': icon || iconAttr}]"
    :icon="icon || iconAttr"
    v-bind="$attrs"
    v-on="$listeners" 
    ref="nio-button-ref"
  )
    v-icon(v-if="prependAttr || iconAttr" :size="iconSize") {{ iconName }}
    slot
    v-icon(v-if="appendAttr" :size="iconSize") {{ iconName }}
    template(v-for="(index, name) in $scopedSlots" v-slot:[name]="data")
      slot(:name="name" v-bind="data") 
</template>

<script>
  
  export default {
    name: 'nio-button',
    props: {
      "variant": { type: String, required: false, default: "primary" },
      "size": { type: String, required: false, default: "extra-large"},
      "caps": { type: Boolean, required: false, default: true },
      "icon": { type: Boolean, required: false, default: false },
      "iconName": { type: String, required: false, default: null }
    },
    computed: {
      iconSize() {
        const size = this.sizeAttr ? this.sizeAttr : this.size
        
        switch (size) {
          case 'extra-large':
            return this.iconAttr ? '16' : '24'
            break;
          case 'large':  
            return this.iconAttr ? '16' : '20'
            break;
          case 'normal':  
            return '16'
            break;  
          case 'small':  
            return '14'
            break;
          case 'extra-small':  
            return '12'
            break;    
          default:
            return '16'
            break;
        }
      }
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
        if (attributes.getNamedItem('normal-primary-prepend')) {
          this.variantAttr = 'primary'
          this.sizeAttr = 'normal'
          this.prependAttr = true
        }
        if (attributes.getNamedItem('normal-secondary-prepend')) {
          this.variantAttr = 'secondary'
          this.sizeAttr = 'normal'
          this.prependAttr = true
        }
        if (attributes.getNamedItem('normal-tertiary-prepend')) {
          this.variantAttr = 'tertiary'
          this.sizeAttr = 'normal'
          this.prependAttr = true
        }
        if (attributes.getNamedItem('normal-primary-append')) {
          this.variantAttr = 'primary'
          this.sizeAttr = 'normal'
          this.appendAttr = true
        }
         if (attributes.getNamedItem('normal-secondary-append')) {
          this.variantAttr = 'secondary'
          this.sizeAttr = 'normal'
          this.appendAttr = true
        }
         if (attributes.getNamedItem('normal-tertiary-append')) {
          this.variantAttr = 'tertiary'
          this.sizeAttr = 'normal'
          this.appendAttr = true
        }
        if (attributes.getNamedItem('jumbo-primary')) {
          this.variantAttr = 'primary'
          this.sizeAttr = 'extra-large'
        }
        if (attributes.getNamedItem('jumbo-secondary')) {
          this.variantAttr = 'secondary'
          this.sizeAttr = 'extra-large'
        }
        if (attributes.getNamedItem('jumbo-icon')) {
          this.iconAttr = true
          this.sizeAttr = 'extra-large'
          this.variantAttr = 'primary'
        }
        if (attributes.getNamedItem('normal-icon')) {
          this.iconAttr = true
          this.sizeAttr = 'normal'
          this.variantAttr = 'secondary'
        }
      }
    },
    data: () => ({
      sizeAttr: undefined,
      variantAttr: undefined,
      prependAttr: false,
      appendAttr: false,
      iconAttr: false
    }),
    mounted() {
      this.applyHelperAttributes()
    }
  }
</script>

<style lang="sass">
  @import '../styles/mixins/_button'  
</style>