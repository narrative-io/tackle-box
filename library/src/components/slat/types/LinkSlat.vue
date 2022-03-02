<template lang="pug">
  NioSlat.nio-link-slat(v-on="$listeners")
    template(v-slot:content)
      slot
    template(v-slot:action)
      NioIcon(
        v-if="!displayOnly"
        name="utility-chevron-right"
        color="#415298"
      )
    template(
      v-for="(index, name) in $scopedSlots"
      v-slot:[name]="data"
    )
      slot(
        v-bind="data"
        :name="name" 
      )
</template>

<script>

import NioSlat from '../Slat'
import NioIcon from '../../icon/Icon'

export default {
  name: 'nio-link-slat',
  components: { NioSlat, NioIcon },
  props: {
    "displayOnly": { type: Boolean, required: false, default: false }
  },
  methods: {
    click() {
      this.$emit('click')
    }     
  }
}
</script>

<style lang="sass" scoped>
  @import '../../../styles/mixins/slat/types/_link-slat'
</style>