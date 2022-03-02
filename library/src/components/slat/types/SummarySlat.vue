<template lang="pug">
  NioSlat.nio-summary-slat(
    v-if="$scopedSlots['custom-content']"
    :class="{'active': active}" 
  )
    template(v-slot:custom-content)
      slot(name="custom-content")
  NioSlat.nio-summary-slat(:class="{'active': active}" v-else)
    template(
      v-for="(index, name) in $scopedSlots" 
      v-slot:[name]="data"
    )
      slot(
        v-bind="data"
        :name="name" 
      ) 	
    template(v-slot:content)
      .summary
        NioImageTile(
          v-if="imageSrc"
          :src="imageSrc"
          :img-background="imageBackground"
        )
        .title-subtitle
          .nio-h4.text-primary-darker(v-if="title") {{ title }}
          .nio-p-small.text-primary-dark(v-if="subtitle") {{ subtitle }}
      .details
        .nio-h7.text-primary-dark(v-if="!loading && detailsLabel") {{ detailsLabel }}
        .nio-h4.text-primary-darker(v-if="!loading && detailsValue") {{ detailsValue }}
        .nio-h4.text-primary-dark(v-if="loading") {{ loadingMsg }}
        .nio-p-small.text-primary-dark(v-if="!loading && detailsAnnotation") {{ detailsAnnotation }}
</template>

<script>

import NioSlat from '../Slat'
import NioImageTile from '../../ImageTile'

export default {
  name: 'nio-icon-link-slat',
  components: { NioSlat, NioImageTile },
  props: {
    "imageSrc": { type: String, required: false },
    "imageBackground": { type: String, required: false },
    "title": { type: String, required: false },
    "subtitle": { type: String, required: false },
    "detailsLabel": { type: String, required: false },
    "detailsValue": { type: String, required: false },
    "detailsAnnotation": { type: String, required: false },
    "loading": { type: Boolean, required: false, default: false },
    "loadingMsg": { type: String, required: false, default: 'loading'},
    "active": { type: Boolean, required: false, default: false }
  },
  methods: {
    click() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="sass" scoped>
  @import '../../../styles/mixins/slat/types/_summary-slat'
</style>