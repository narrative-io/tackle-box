<template lang="pug">
  NioLinkSlat.nio-image-tile-link-slat
    ImageTitleSubtitleSlot(
      v-bind="$attrs"
      :size="size"
      :img-src="imgSrc"
      :img-background="imgBackground"
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
  components: { NioLinkSlat, ImageTitleSubtitleSlot },
  props: {
    "imgSrc": { type: String, required: false },
    "imgBackground": { type: String, required: false },
    "size": { type: String, required: false, default: 'normal' }
  },
  methods: {
    click() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="sass" scoped>

@import '../../../styles/mixins/slat/assembled/_image-tile-link-slat'

</style>