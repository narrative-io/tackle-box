<template lang="pug">
  NioSlatLink.nio-icon-link-slat
    ImageTitleSubtitleSlot(
      :iconName="iconName"
    )
      template(v-slot:title)
        slot(name="title")
      template(v-slot:subtitle)
        slot(name="subtitle")
      slot
</template>

<script>

import NioSlatLink from '../types/SlatLink'
import ImageTitleSubtitleSlot from '../slot-templates/content/ImageTitleSubtitleSlot'

export default {
  name: 'nio-icon-link-slat',
  props: {
    "iconName": { type: String, required: false }
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
  components: { NioSlatLink, ImageTitleSubtitleSlot }
}
</script>

<style lang="sass" scoped>
  @import '../../../styles/mixins/slat/assembled/_icon-link-slat'
</style>