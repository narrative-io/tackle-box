<template lang="pug">
  NioSlat.nio-link-slat(v-on="$listeners")
    template(v-slot:content)
      slot
    template(v-slot:action)
      NioIcon(
        name="utility-chevron-right"
        color="#415298"
        v-if="!displayOnly"
      )
    template(v-for="(index, name) in $scopedSlots" v-slot:[name]="data")
      slot(:name="name" v-bind="data")
</template>

<script>

import NioSlat from '../Slat'
import NioIcon from '../../icon/Icon'

export default {
  name: 'nio-link-slat',
  props: {
    "displayOnly": { type: Boolean, required: false, default: false }
  },
  data: () => ({
  }),
  mounted() {
  },
  methods: {
    click() {
      this.$emit('click')
    }     
  },
  components: { NioSlat, NioIcon }
}
</script>

<style lang="sass" scoped>
  @import '../../../styles/mixins/slat/types/_link-slat'
</style>