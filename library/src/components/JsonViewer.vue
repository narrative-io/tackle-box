<template lang="pug">
  .json-viewer.mb-0.mt-0(v-if="json")
    
    p.mt-0.mb-0(v-if="isObjectOrArray(json)") 
      span.expander.mr-1(@click="expanded= !expanded") {{ expanded ? '&#9660' : '&#9658'}}
      span.key {{ parentKey }}: 
      
      span.details(v-if="isObject(json)") {} {{length}} key{{length > 1 ? 's': ''}}
      span.details(v-else) [] {{length}} items

    .content(v-if="expanded")
      div(v-if="isObject(json)")
        .mt-0.mb-0(v-for="[key, value], i in getChildren(json)" :key="depth + key")
          .d-flex(v-if="!isObjectOrArray(value)")
            p.ml-3.mt-0.mb-0.key {{ key }} :
            p.ml-3.mt-0.mb-0.value(:class="{[getType(value)]: true}") {{ formatValueForType(value) }}{{ length - 1  !== i  ? ',' : ''}}

          div.ml-3.mt-0.mb-0(v-if="isObjectOrArray(value)")
            JsonViewer(:json="value" :parentKey="key" :depth="depth + 1")

      div.mt-0.mb-0(v-if="isArray(json)")
        .mt-0.mb-0(v-for="value, i in getChildren(json)")
          .d-flex(v-if="!isObjectOrArray(value)")
            p.ml-3.mt-0.mb-0.key {{ i }} :
            p.nio-p.mt-0.mb-0.value(v-if="!isObjectOrArray(value)") {{ value }}{{ length - 1  !== i  ? ',' : ''}}

          div.ml-3.mt-0.mb-0(v-if="isObjectOrArray(value)")
            JsonViewer(:json="value", :parentKey="i" :depth="depth + 1")




</template>

<script>
export default {
  name: 'JsonViewer',
  computed: {
    length() {
      return Object.entries(this.json || []).length || 0
    },
  },
  methods: {
    getType(value) {
      return typeof value
    },
    formatValueForType(value) {
      if (this.getType(value) === "string") {
        return `"${value}"`
      }
      return value
    },
    isObject(node) {
      return typeof node === 'object' && !Array.isArray(node)
    },
    isArray(node) {
      return Array.isArray(node)
    },
    isObjectOrArray(node) {
      return this.isObject(node) || this.isArray(node)
    },
    getChildren(node) {
      if(!node) return []
      if(this.isObject(node)) {
        return Object.entries(node)
      }
      return node
    }
  },
  data() {
    return {
      expanded: this.defaultExpand,
    }
  },
  props: {
    json: {
      type: [Object, Array],
      default: null
    },
    depth: {
      type: Number,
      default: 0
    },
    parentKey: {
      type: [String, Number],
      default: 'root'
    },
    defaultExpand: {
      type: Boolean,
      default: true
    }
  }
}
</script>


<style lang="sass" scoped>
  @import '../styles/mixins/_jsonviewer.sass'  
</style>
