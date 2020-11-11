<template lang="pug">
    v-text-field.nio-text-field(
      :class="{small: smallAttr, 'prepend-icon-small': smallAttr && prependIconAttr }"
      outlined 
      flat
      @input="$emit('update', $event)"
      :model="model" 
      :rules="parsedRules"
      v-bind="$attrs"
      v-on="$listeners" 
      ref="nio-text-field-ref"
    )
      template(
        v-if="prependAttr || prependIconAttr"
        v-slot:prepend-inner
      )
        NioIcon(
          v-if="iconName || prependIconAttr"
          :name="prependIconAttr ? prependIconAttr : iconName"
          size="16"
          @click="clickPrepend"
        )
      template(
        v-if="appendAttr"
        v-slot:append
      )
        NioIcon(
          v-if="iconName"
          @click="clickAppend"
          :name="iconName"
          size="16"
        )
      template(v-for="(index, name) in $scopedSlots" v-slot:[name]="data")
        slot(:name="name" v-bind="data")   
      slot  
</template>

<script>
import { VTextField } from 'vuetify/lib'
import NioIcon from './icon/Icon'

export default {
  name: 'nio-text-field',
  props: {
    "model": { required: false },
    "rules": { required: false },
    "iconName": { type: String, required: false, default: null }
  },
  model: {
    prop: "model",
    event: "update"
  },
  data: () => ({
    parsedRules: [],
    appendAttr: false,
    prependAttr: false,
    prependIconAttr: null,
    smallAttr: false
  }),
  methods: {
    focus() {
      this.$refs['nio-text-field-ref'].focus()
    },
    parseRules() {
      if (this.rules) {
        this.rules.map((rule, index) => {
          let func = rule.toString()
          let funcBody = func.slice(func.indexOf("{") + 1, func.lastIndexOf("}"))
          this.parsedRules[index] = new Function("value", funcBody)
        });
      }
    },
    applyHelperAttributes() {
      const attributes = this.$el.attributes
      if (attributes.getNamedItem('append')) {
        this.appendAttr = true
      }	
      if (attributes.getNamedItem('prepend')) {
        this.prependAttr = true
      }	
      if (attributes.getNamedItem('small')) {
        this.smallAttr = true
      }
      if (attributes.getNamedItem('search-small')) {
        this.smallAttr = true
        this.prependIconAttr = 'utility-search'
      }
    },
    clickAppend() {
      this.$emit('click:append')
    },
    clickPrepend() {
      this.$emit('click:prepend')
    }
  },
  mounted() {	
    this.parseRules()
    this.applyHelperAttributes()
    this.$emit('mounted')
  },
  destroyed() {
    this.$emit('destroyed')
  },
  watch: {
    rules() {
      this.parseRules()
    }
  },
  components: { VTextField, NioIcon }
}
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_text-field'  
</style>

