<template lang="pug">
  .test-slat
  
    NioSlatGroup
      NioIconLinkSlat(
        iconName="display-new"
        display-only
        key="1"
      )
        template(v-slot:title) Item 1 title
        template(v-slot:subtitle) Item 1 subtitle
        template(v-slot:action) Test
        template(v-slot:loading)
          .test
      NioIconLinkSlat(
        iconName="display-new"
        @click.native="testClick"
        key="2"
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
        imgSrc="https://cdn.narrative.io/data-studio/images/data-package-gender.svg"
        imgBackground="#654545"
        small
      )
        template(v-slot:title) Background test  
      NioImageTileLinkSlat
        .test Content

      NioSummarySlat(
        imageSrc="https://picsum.photos/64/64"
        title="Narrative Data Lake"
        detailsLabel="Available to Match"
        detailsValue="stuff"
        detailsAnnotation="IDs for matching"
      )  	
      NioSummarySlat(
        imageSrc="https://picsum.photos/64/64"
        title="Narrative Data Lake"
        detailsLabel="Available to Match"
        detailsValue="stuff"
        detailsAnnotation="IDs for matching"
        loading
        loadingMsg="Working on it.."
      )  	
      NioSummarySlat(
        active
        imageSrc="https://picsum.photos/64/64"
        title="Narrative Data Lake"
        subtitle="a subtitle"
        detailsLabel="Available to Match"
        detailsValue="stuff"
        detailsAnnotation="IDs for matching"
      )  	
        template(v-slot:loading)
          .test
      NioSummarySlat
        template(v-slot:custom-content)
          .custom Test
</template>

<script>

import NioSlatGroup from '../components/slat/SlatGroup'
import NioLinkSlat from '../components/slat/types/LinkSlat'
import NioIconLinkSlat from '../components/slat/assembled/IconLinkSlat'
import NioImageTileLinkSlat from '../components/slat/assembled/ImageTileLinkSlat'
import NioSummarySlat from '../components/slat/types/SummarySlat'

export default {
  components: {
    NioSlatGroup,
    NioLinkSlat,
    NioIconLinkSlat,
    NioImageTileLinkSlat,
    NioSummarySlat
  },
  data: () => ({
    
  }),
  methods: {
    testClick() {
      console.log("here")
    }
  }
};
</script>

<style lang="sass" scoped>
.test-slat
  .test
    width: 20px
    height: 20px
    background-color: red
</style>