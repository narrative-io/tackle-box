<template lang="pug">
  v-select.nio-select(
    :items="items"
    :class="{ small: smallAttr, 'hide-selections': hideSelections, 'selection-pills': selectionPills, 'fluid-width': fluidWidthAttr }"
    :solo="smallAttr"
    :model="model"
    :menu-props="{contentClass: 'nio-select-menu', offsetY: true, nudgeBottom: 10  }"
    outlined
    :attach="attach ? node : undefined"
    v-bind="$attrs"
    v-on="$listeners"
    @input="updateModel($event)"
    ref="nio-select-ref"
    :value="value"
    :item-value="valueKey"
    :item-text="textKey"
    :id="elementId"
  )
    template(v-for="(index, name) in $scopedSlots" v-slot:[name]="data")
      slot(:name="name" v-bind="data") 
    template(v-slot:append)
      svg(style="width:24px;height:24px" viewBox="0 0 24 24")
        path(fill="#425290" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z")
    template(v-slot:selection="{ item, index }" v-if="hideSelections")
      span(v-if="index === 0") {{ labelText }}
    template(v-slot:selection="{ item, index }" v-else-if="selectionPills && !hideSelections")
      NioPill(
        :text="textKey ? item[textKey] : item"
        selected-value
      )
</template>


<script>

import { text } from '../plugins/fontawesome-svg-core'
import NioPill from './Pill'

export default {
  name: 'nio-select',
  props: {
    "model": { required: false },
    "rules": { required: false },
    "items": { required: true }
  },
  model: {
    prop: "model",
    event: "update"
  },
  data: () => ({
    elementId: null,
    node: null,
    smallAttr: false,
    attach: false,
    hideSelections: false,
    selectionPills: false,
    labelText: null,
    textKey: null,
    valueKey: null,
    value: null,
    fluidWidthAttr: false,
    internal: {
      inputControlEl: null,
      selectionEl: null

    }
  }),
  methods: {
    applyKeys() {
      const attributes = this.$el.attributes
      const textKey = attributes.getNamedItem('item-text') ? attributes.getNamedItem('item-text').value : undefined
      const valueKey = attributes.getNamedItem('item-value') ? attributes.getNamedItem('item-value').value : undefined
      if (this.items && this.items.length > 0) {
        if (!this.items[0].length && textKey) {
          this.textKey = textKey
        } else {
          this.textKey = undefined
        }
         if (!this.items[0].length && valueKey) {
          this.valueKey = valueKey
        } else {
          this.valueKey = undefined
        }
      } else {
        this.textKey = undefined
        this.valueKey = undefined
      }
    },
    applyHelperAttributes() {
      const attributes = this.$el.attributes
      if (attributes.getNamedItem('small')) {
        this.smallAttr = true
      }
      if (attributes.getNamedItem('attach-to-parent')) {
        this.attach = true
      }
      if (attributes.getNamedItem('hide-selections')) {
        this.hideSelections = true
      }
      if (attributes.getNamedItem('label')) {
        this.labelText = attributes.getNamedItem('label').value
      }
      if (attributes.getNamedItem('selection-pills')) {
        this.selectionPills = true
      }
      if (attributes.getNamedItem('fluid-width')) {
        this.fluidWidthAttr = true
      }
    },
    updateModel(event) {
      if (this.fluidWidthAttr) {
        this.updateInternalElements()
      }
      this.$emit('update', event)
    },
    updateInternalElements() {
      if (!HTMLCollection.prototype.find) {
        HTMLCollection.prototype.find = Array.prototype.find
      }
      if (!DOMTokenList.prototype.includes) {
        DOMTokenList.prototype.includes = Array.prototype.includes
      }
      if (this.fluidWidthAttr) {
        this.$nextTick(() => {
          this.internal.inputControlEl = this.$refs['nio-select-ref'].$vnode.elm.children
            .find(child => child.classList.includes('v-input__control'))
          if (this.internal.inputControlEl){
						this.internal.inputControlEl.style['width'] = 'unset'
						this.node.style['width'] = 'unset'
						this.internal.selectionEl = this.internal.inputControlEl.children
							.find(child => child.classList.includes('v-input__slot')).children
							.find(child => child.classList.includes('v-select__slot')).children
							.find(child => child.classList.includes('v-select__selections')).children
							.find(child => child.classList.includes('v-select__selection'))
						this.internal.labelEl = this.internal.selectionEl = this.internal.inputControlEl.children
							.find(child => child.classList.includes('v-input__slot')).children
							.find(child => child.classList.includes('v-select__slot')).children
						console.log(this.internal.labelEl)
						if (this.internal.selectionEl) {
							console.log(window.getComputedStyle(this.internal.selectionEl).width.replace('px', ''))
							const inputControlElWidth = parseInt(window.getComputedStyle(this.internal.selectionEl).width.replace('px', '')) + 70
							console.log(inputControlElWidth)
							this.internal.inputControlEl.style['width'] = `${inputControlElWidth}px`
							this.node.style['width'] = `${inputControlElWidth + 150}px`
							console.log(this.internal.inputControlEl.style['width'])
							console.log(this.node.style['width'])
							console.log("----")
						}
					}
        })
      }
    }
  },
  mounted() {
    this.node = this.$refs['nio-select-ref'].$vnode.elm
    this.applyHelperAttributes()
    this.applyKeys()
    this.updateModel(this.model)
    this.value = this.model
    this.$emit('mounted')
    
  },
  destroyed() {
    this.$emit('destroyed')
  },
  watch: {
    items(val) {
      this.applyKeys()
    }
  },
  components: { NioPill }
}
</script>

<style lang="sass">
  @import '../styles/mixins/_menu'
  
  .v-menu__content.nio-select-menu
    +nio-menu
</style>

<style lang="sass" scoped>
  @import '../styles/mixins/_select'  
</style>

