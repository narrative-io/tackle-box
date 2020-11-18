<template lang="pug">
  .test-slat
    NioSlatGroup
      NioIconLinkSlat(
        iconName="display-new"
      )
        template(v-slot:title) Item 1 title
        template(v-slot:subtitle) Item 1 subtitle
      NioImageTileLinkSlat(
        imgSrc="https://picsum.photos/48/48"
      )
        template(v-slot:title) Item 1 title
        template(v-slot:subtitle) Item 1 subtitle  
      NioSlatLink
        .test Content
</template>

<script>

import NioSlatGroup from '../components/slat/SlatGroup'
import NioSlatLink from '../components/slat/types/SlatLink'
import NioIconLinkSlat from '../components/slat/assembled/IconLinkSlat'
import NioImageTileLinkSlat from '../components/slat/assembled/ImageTileLinkSlat'

export default {
  components: {
    NioSlatGroup,
    NioSlatLink,
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