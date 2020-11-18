<template lang="pug">
  .test-slat
    NioSlatGroup
      NioSlat(type="link")
      NioSlat(type="link")
</template>

<script>

import NioSlatGroup from '../components/slat/SlatGroup'
import NioSlat from '../components/slat/Slat'

export default {
  components: {
    NioSlatGroup,
    NioSlat
  },
  data: () => ({
    
  })
};
</script>

<style lang="sass" scoped>
.test-slat
</style>