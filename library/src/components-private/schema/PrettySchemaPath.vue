<template lang="pug">
  .nio-pretty-schema-path
    .path-element.root.nio-p.text-primary-dark {{ path[0].displayName }}
    .path-element.child(
      v-for="childElement in childPathElements"
    ) 
      NioIcon.chevron(name="utility-chevron-right")
      .nio-p.large.text-primary-dark {{ childElement }}
    NioButton(
      v-if="!displayOnly"
      normal-tertiary-append 
      iconName="utility-times"
      @click="deleteAttribute(path)"  
    )
</template>

<script>

import NioButton from '../../components/Button'
import NioIcon from '../../components/icon/Icon'

export default {
	components: { NioButton, NioIcon },
	name: 'nio-pretty-schema-path',
  props: {
    "path": { type: Array, required: true },
    "displayOnly": { type: Boolean, required: false, default: false}
  },
  computed: {
    childPathElements() {
      const childElements = [...this.path]
      childElements.shift()
      return childElements
    },
    isArrayDescendant() {
      return this.path.includes('items')
    }
  },
  methods: {
    deleteAttribute(path) {
      this.$emit('delete', path)
    }
  }
};
</script>

<style lang="sass">
	@import "../../styles-private/schema/_pretty_schema_path"
</style>