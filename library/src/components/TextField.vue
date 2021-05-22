<template lang="pug">
    v-text-field.nio-text-field(
      :class="{'small': smallAttr, 'prepend-icon-small': smallAttr && prependIconAttr, 'currency': currencyAttr }"
      outlined 
      flat
      :solo="soloAttr || smallAttr || prependAttr || currencyAttr"
      @input="update($event)"
      :model="model"
      :rules="parsedRules"
      v-bind="$attrs"
      v-on="$listeners"
      ref="nio-text-field-ref"
    )
      template(
        v-if="prependAttr || prependIconAttr || currencyAttr"
        v-slot:prepend-inner
      )
        .currency(v-if="currencyAttr")
          NioIcon(name="utility-dollar-sign" :size="14")
        NioIcon(
          v-else-if="iconName || prependIconAttr"
          @click="clickPrepend"
          :name="prependIconAttr ? prependIconAttr : iconName"
          :color="iconColor ? iconColor : defaultIconColor"
          :size="iconSize ? iconSize : defaultIconSize"
        )
      template(
        v-if="appendAttr"
        v-slot:append
      )
        NioIcon(
          v-if="iconName"
          @click="clickAppend"
          :name="iconName"
          :color="iconColor ? iconColor : defaultIconColor"
          :size="iconSize ? iconSize : defaultIconSize"
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
    "iconName": { type: String, required: false, default: null },
    "iconColor": { type: String, required: false },
    "iconSize": { type: Number, required: false }
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
    soloAttr: false,
    smallAttr: false,
    currencyAttr: false,
    defaultIconColor: '#1438F5',
    defaultIconSize: 16
  }),
  methods: {
		update(val) {
			this.$emit('update', this.currencyAttr ? parseFloat(val).toFixed(2) : val)
		},
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
      if (attributes.getNamedItem('solo')) {
        this.soloAttr = true
      }  
      if (attributes.getNamedItem('search-small-subdued')) {
        this.smallAttr = true
        this.prependIconAttr = 'utility-search'
        this.defaultIconColor = '#AEB9E8'
      }
      if (attributes.getNamedItem('currency')) {
        this.currencyAttr = true
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

