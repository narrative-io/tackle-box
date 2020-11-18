<template lang="pug">
  .test-slat
    NioSlatGroup
      NioSlatLink
        .test Content
      NioSlatLink
        .test Content
</template>

<script>

import NioSlatGroup from '../components/slat/SlatGroup'
import NioSlatLink from '../components/slat/types/SlatLink'

export default {
  components: {
    NioSlatGroup,
    NioSlatLink
  },
  data: () => ({
    
  })
};
</script>

<style lang="sass" scoped>
.test-slat
</style>