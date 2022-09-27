<template lang="pug">
    v-text-field.nio-text-field(
      ref="nio-text-field-ref"
      v-model="tempModel"
      v-bind="$attrs"
      v-on="$listeners"
      :class="{'small': smallAttr, 'prepend-icon-small': smallAttr && prependIconAttr, 'currency': currencyAttr, 'percent': percentAttr}"
      :solo="soloAttr || smallAttr || prependAttr || currencyAttr || percentAttr"
      :rules="rules ? rules : parsedRules"
      outlined 
      flat
      @input="update($event)"
    )
      template(
        v-if="prependAttr || prependIconAttr || currencyAttr"
        v-slot:prepend-inner
      )
        .currency(v-if="currencyAttr")
          NioIcon(name="utility-dollar-sign" :size="14")
        NioIcon(
          v-else-if="iconName || prependIconAttr"
          :name="prependIconAttr ? prependIconAttr : iconName"
          :color="iconColor ? iconColor : defaultIconColor"
          :size="iconSize ? iconSize : defaultIconSize"
          @click="clickPrepend"
        )
      template(
        v-if="appendAttr || percentAttr"
        v-slot:append
      )
        .percent(v-if="percentAttr")
          NioIcon(name="utility-percent" :size="14")
        NioIcon(
          v-else-if="iconName"
          :name="iconName"
          :color="iconColor ? iconColor : defaultIconColor"
          :size="iconSize ? iconSize : defaultIconSize"
          @click="clickAppend"
        )
      template(
        v-for="(index, name) in $scopedSlots" 
        v-slot:[name]="data"
      )
        slot(
          v-bind="data"
          :name="name" 
        )
      slot  
</template>

<script>

import { VTextField } from 'vuetify/lib'
import NioIcon from './icon/Icon'

export default {
  name: 'nio-text-field',
  components: { VTextField, NioIcon },
  props: {
    "model": { required: false },
    "rules": { required: false },
    "rulesWithContext": { required: false },
    "iconName": { type: String, required: false, default: null },
    "iconColor": { type: String, required: false },
    "iconSize": { type: Number, required: false }
  },
  model: {
    prop: "model",
    event: "update"
  },
  data: () => ({
    tempModel: null,
    parsedRules: [],
    appendAttr: false,
    prependAttr: false,
    prependIconAttr: null,
    soloAttr: false,
    smallAttr: false,
    currencyAttr: false,
    percentAttr: false,
    defaultIconColor: '#1438F5',
    defaultIconSize: 16
  }),
  watch: {
    rules() {
      this.parseRules()
    },
    tempModel(val) {
      this.update(val)
    },
    model(val) {
      this.tempModel = val
    }
  },
  mounted() {	
    this.tempModel = this.model
    this.parseRules()
    this.applyHelperAttributes()
    this.$emit('mounted')
  },
  destroyed() {
    this.$emit('destroyed')
  },
  methods: {
    update(val) {
      this.$emit('update', val)
    },
    focus() {
      this.$refs['nio-text-field-ref'].focus()
    },
    parseRules() {
      if (this.rulesWithContext) {
        this.rulesWithContext.map((rule, index) => {
          const paramNames = this.getParamNames(rule)
          let func = rule.toString()
          let funcBody = func.slice(func.indexOf("{") + 1, func.lastIndexOf("}"))
          this.parsedRules[index] = new Function(paramNames[0], funcBody)
        });
      }
    },
    getParamNames(func) {
      var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
      var ARGUMENT_NAMES = /([^\s,]+)/g;
      var fnStr = func.toString().replace(STRIP_COMMENTS, '');
      var result = fnStr.slice(fnStr.indexOf('(')+1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
      if(result === null)
        result = [];
      return result;
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
      if (attributes.getNamedItem('percent')) {
        this.percentAttr = true
      }  
    },
    clickAppend() {
      this.$emit('click:append')
    },
    clickPrepend() {
      this.$emit('click:prepend')
    }
  }
}
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_text-field'  
</style>

