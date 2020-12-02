<template lang="pug">
  NioSlat.nio-summary-slat
    template(v-slot:content)
      .summary
        NioImageTile(
          :src="imageSrc"
        )
        .nio-h4.text-primary-darker {{ title }}
      .details
        .nio-h7.text-primary-dark(v-if="detailsLabel") {{ detailsLabel }}
        .nio-h4.text-primary-darker(v-if="detailsValue") {{ detailsValue }}
        .nio-p-small.text-primary-dark(v-if="detailsAnnotation") {{ detailsAnnotation }}
</template>

<script>

import NioSlat from '../Slat'
import NioImageTile from '../../ImageTile'

export default {
  name: 'nio-icon-link-slat',
  props: {
    "imageSrc": { type: String, required: false },
    "title": { type: String, required: false },
    "detailsLabel": { type: String, required: false },
    "detailsValue": { type: String, required: false },
    "detailsAnnotation": { type: String, required: false }
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
  components: { NioSlat, NioImageTile }
}
</script>

<style lang="sass" scoped>
  @import '../../../styles/mixins/slat/types/_summary-slat'
</style>