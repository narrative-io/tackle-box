<template lang="pug">
  .nio-attributes-schema
    NioAttributesList(
      :attributes="attributes"
      :displayOnly="true"
    )
</template>


<script>

import NioAttributesList from './AttributesList'

export default {
  name: 'nio-attributes-schema',
  props: {
    "attributes": { type: Array, required: true }
  },
  
  components: { NioAttributesList }
}
</script>

<style lang="sass" scoped>
@import '../../../styles-private/schema/attributes/_attributes-schema'
</style>

