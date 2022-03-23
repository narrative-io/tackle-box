<template lang="pug">
  v-select.nio-select(
    ref="nio-select-ref"
    v-model="tempModel"
    v-bind="$attrs"
    v-on="$listeners"
    :items="items"
    :class="{ small: smallAttr, 'hide-selections': hideSelections, 'selection-pills': selectionPills, 'fluid-width': fluidWidthAttr }"
    :solo="smallAttr"
    :menu-props="{contentClass: contentClass, offsetY: true, nudgeBottom: 10 }"
    :attach="attach ? node : undefined"
    :item-value="valueKey"
    :item-text="textKey"
    :id="elementId"
    outlined
    @input="updateModel($event)"
  )
    template(
      v-for="(index, name) in $scopedSlots" 
      v-slot:[name]="data"
    )
      slot(
        v-bind="data"
        :name="name" 
      )
    template(v-slot:append)
      svg(style="width:24px;height:24px" viewBox="0 0 24 24")
        path(fill="#425290" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z")
    template(v-slot:selection="{ item, index }" v-if="hideSelections && !hasScopedSlot('selection')")
      span(v-if="index === 0") {{ labelText }}
    template(v-slot:selection="{ item, index }" v-else-if="selectionPills && !hideSelections && !hasScopedSlot('selection')")
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
  components: { NioPill },
  props: {
    "model": { required: false },
    "rules": { required: false },
		"items": { required: true },
		"additionalContentClass": { type: String, required: false }
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
		tempModel: null,
		contentClass: 'nio-select-menu'
  }),
  watch: {
    items(val) {
      this.applyKeys()
    },
    model: {
      deep: true,
      handler(val) {
        this.tempModel = val
      }
    }
  },
  mounted() {
    this.tempModel = this.model
    this.node = this.$refs['nio-select-ref'].$vnode.elm
    this.applyHelperAttributes()
    this.applyKeys()
    if (this.fluidWidthAttr) {
      this.updateInternalElements()
		}
    if (this.additionalContentClass) {
			this.contentClass += ` ${this.additionalContentClass}`
		}
    this.$emit('mounted')
  },
  destroyed() {
    this.$emit('destroyed')
  },
  methods: {
    hasScopedSlot(slotName) {
      return this.$scopedSlots[slotName] !== undefined
    },
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
           const inputControlEl = this.$refs['nio-select-ref'].$vnode.elm.children
            .find(child => child.classList.includes('v-input__control'))
          if (inputControlEl){
            inputControlEl.style['width'] = 'unset'
            this.node.style['width'] = 'unset'
            const labelEl = inputControlEl.children
              .find(child => child.classList.includes('v-input__slot')).children
              .find(child => child.classList.includes('v-select__slot')).children
              .find(child => child.nodeName === "LABEL")
            if (labelEl) {
              setTimeout(() => {
                const labelWidth = parseInt(window.getComputedStyle(labelEl).width.replace('px', ''))
                this.node.style['width'] = `${labelWidth + 55}px`
              }, 10);
            }
          }
        })
      }
    }
  }
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

