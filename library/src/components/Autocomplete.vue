<template lang="pug">
    v-autocomplete.nio-autocomplete(
      :items="items"
      :model="model"
      :class="{ 'selection-pills': selectionPills, 'attached': attachAttr }"
      :attach="attachAttr ? node : undefined"
      :menu-props="{contentClass: 'nio-select-menu', offsetY: !attachAttr ? true : false, nudgeBottom: !attachAttr ? 10 : undefined  }"
      :searchInput.sync="searchInput"
      outlined
      v-bind="$attrs"
      v-on="$listeners"
      @input="updateModel($event)"
      ref="nio-autocomplete-ref"
      :item-value="valueKey"
      :item-text="textKey"
      :value="value"
    )
      template(v-slot:append)
        svg(style="width:24px;height:24px" viewBox="0 0 24 24")
          path(fill="#425290" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z")
      template(v-slot:selection="{ item, index }" v-if="selectionPills")
        NioPill(
          :text="textKey ? item[textKey] : item"
          selected-value
        )    
      template(v-for="(index, name) in $scopedSlots" v-slot:[name]="data")
        slot(:name="name" v-bind="data")    
      slot  
</template>

<script>

import NioPill from './Pill'

export default {
  name: 'nio-autocomplete',
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
    node: null,
    selectionPills: false,
    textKey: null,
    valueKey: null,
    attachAttr: false,
    value: null,
    searchInput: null
  }),
  methods: {
    applyHelperAttributes() {
      const attributes = this.$el.attributes
      if (attributes.getNamedItem('selection-pills')) {
        this.selectionPills = true
      }
      if (attributes.getNamedItem('attach-to-parent')) {
        this.attachAttr = true
      }
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
    updateModel(event) {
      this.searchInput = null
      this.$emit('update', event)
    }
  },
  mounted() {	
    this.applyHelperAttributes()
    this.applyKeys()
    this.updateModel(this.model)
    this.value = this.model
    this.$emit('mounted')
    this.node = this.$refs['nio-autocomplete-ref'].$vnode.elm
  },
  destroyed() {
    this.$emit('destroyed')
  },
  components: { NioPill }
}
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_autocomplete'  
</style>

