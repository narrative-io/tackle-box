<template lang="pug">
  NioLinkSlat.nio-image-tile-link-slat
    ImageTitleSubtitleSlot(
      :size="size"
      :imgSrc="imgSrc"
      :imgBackground="imgBackground"
      v-bind="$attrs"
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
    "imgSrc": { type: String, required: false },
    "imgBackground": { type: String, required: false },
    "size": { type: String, required: false, default: 'normal' }
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