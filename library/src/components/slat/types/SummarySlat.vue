<template lang="pug">
  NioSlat.nio-summary-slat
    template(v-slot:content)
      NioImageTile(
        :src="imageSrc"
      )
      .details
        .nio-h7.text-primary-dark(v-if="label") {{ label }}
        .nio-h4.text-primary-darker(v-if="value") {{ value }}
        .nio-p-small.text-primary-dark(v-if="annotation") {{ annotation }}
</template>

<script>

import NioSlat from '../Slat'
import NioImageTile from '../../ImageTile'

export default {
  name: 'nio-icon-link-slat',
  props: {
    "imageSrc": { type: String, required: false },
    "label": { type: String, required: false },
    "value": { type: String, required: false },
    "annotation": { type: String, required: false }
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