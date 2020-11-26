<template lang="pug">
  .test-slat
    NioSlatGroup
      NioIconLinkSlat(
        iconName="display-new"
      )
        template(v-slot:title) Item 1 title
        template(v-slot:subtitle) Item 1 subtitle
      NioImageTileLinkSlat(
        imgSrc="https://picsum.photos/64/64"
      )
        template(v-slot:title) Item 1 title
        template(v-slot:subtitle) Item 1 subtitle  
      NioImageTileLinkSlat(
        imgSrc="https://picsum.photos/64/64"
      )
        template(v-slot:title) Item 1 title
      NioImageTileLinkSlat(
        imgSrc="https://picsum.photos/64/64"
        small
      )
        template(v-slot:title) Item 1 title
        template(v-slot:subtitle) Item 1 subtitle  
      NioImageTileLinkSlat(
        imgSrc="https://picsum.photos/464/64"
        small
      )
        template(v-slot:title) Item 1 title  
      NioImageTileLinkSlat
        .test Content
</template>

<script>

import NioSlatGroup from '../components/slat/SlatGroup'
import NioLinkSlat from '../components/slat/types/LinkSlat'
import NioIconLinkSlat from '../components/slat/assembled/IconLinkSlat'
import NioImageTileLinkSlat from '../components/slat/assembled/ImageTileLinkSlat'

export default {
  components: {
    NioSlatGroup,
    NioLinkSlat,
    NioIconLinkSlat,
    NioImageTileLinkSlat
  },
  data: () => ({
    
  })
};
</script>

<style lang="sass" scoped>
.test-slat
</style>