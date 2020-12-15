<template lang="pug">
  NioLinkSlat.nio-icon-link-slat(:class="{'disabled': displayOnly}")
    template(v-for="(index, name) in $scopedSlots" v-slot:[name]="data")
      slot(:name="name" v-bind="data")
    ImageTitleSubtitleSlot(
      :iconName="iconName"
      :displayOnly="displayOnly"
    )
      template(v-slot:title)
        slot(name="title")
      template(v-slot:subtitle)
        slot(name="subtitle")
      slot
</template>

<script>

import NioLinkSlat from '../types/LinkSlat'
import ImageTitleSubtitleSlot from '../slot-templates/content/ImageTitleSubtitleSlot'

export default {
  name: 'nio-icon-link-slat',
  props: {
    "iconName": { type: String, required: false },
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
  components: { NioLinkSlat, ImageTitleSubtitleSlot }
}
</script>

<style lang="sass" scoped>
  @import '../../../styles/mixins/slat/assembled/_icon-link-slat'
</style>