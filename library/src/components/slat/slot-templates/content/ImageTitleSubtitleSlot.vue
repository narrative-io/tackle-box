<template lang="pug">
  .image-title-subtitle-slot
    NioIconFramer.nio-slat-image(
      v-if="iconName"
      :icon-name="iconName"
      small
    )
    NioImageTile.nio-slat-image(
      v-else-if="imgSrc"
      :src="imgSrc"
      :size="imageSize ? imageSize : size"
      :img-background="imgBackground"
    )
    .nio-slat-title-subtitle
      .nio-slat-title
        slot(name="title")
      .nio-slat-subtitle
        slot(name="subtitle")
</template>

<script>

import NioSlat from '../../Slat'
import NioIconFramer from '../../../icon/IconFramer'
import NioImageTile from '../../../ImageTile'

export default {
  name: 'image-title-subtitle-slot',
  components: { NioSlat, NioIconFramer, NioImageTile },
  props: {
    "imgSrc": { type: String, required: false },
    "iconName": { type: String, required: false },
    "imgBackground": { type: String, required: false },
    "size": { type: String, required: false, default: 'normal' }
  },
  data: () => ({
    imageSize: null
  }),
  mounted() {
    this.applyHelperAttributes()
  },
  methods: {
    applyHelperAttributes() {
      const attributes = this.$el.attributes
      if (attributes.getNamedItem('small')) {
        this.imageSize = 'small'
      }
    },	
    click() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="sass" scoped>
  @import '../../../../styles/mixins/slat/slot-templates/_image-title-subtitle-slot'
</style>