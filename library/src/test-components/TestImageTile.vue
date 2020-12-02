<template lang="pug">
  .test-image-tile
    NioImageTile(
      size="large"
      src="https://picsum.photos/96/96"
    )
    NioImageTile(
      size="normal"
      src="https://picsum.photos/96/96"
    )
    NioImageTile(
      size="small"
      src="https://picsum.photos/96/96"
    )
    NioImageTile(
      size="extra-small"
      src="https://picsum.photos/96/96"
    )
</template>

<script>

import NioImageTile from '../components/ImageTile'

export default {
  components: {
    NioImageTile
  },
  data: () => ({
   
  })
};
</script>

<style lang="sass" scoped>
.test-image-tile
  display: flex
  & > * + * 
    margin-left: 20px
  
</style>