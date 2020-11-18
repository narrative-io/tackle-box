<template lang="pug">
  NioLinkSlat.nio-image-tile-link-slat
    ImageTitleSubtitleSlot(
      imgSrc="https://picsum.photos/48/48"
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
  name: 'nio-image-tile-link-slat',
  props: {
    "imgSrc": { type: String, required: false }
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

@import '../../../styles/mixins/slat/assembled/_image-tile-link-slat'

</style>