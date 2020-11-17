<template lang="pug">
  .test-divider
    .horizontal
      img(src="https://picsum.photos/200/50")
      NioDivider(horizontal-solo)
      img(src="https://picsum.photos/200/50")
    .vertical
      img(src="https://picsum.photos/200/50")
      NioDivider(vertical-solo)
      img(src="https://picsum.photos/200/50")  
    .horizontal
      img(src="https://picsum.photos/200/50")
      NioDivider(horizontal-solo-emphasis)
      img(src="https://picsum.photos/200/50")
    .vertical
      img(src="https://picsum.photos/200/50")
      NioDivider(vertical-solo-emphasis)
      img(src="https://picsum.photos/200/50")    
    .horizontal
      img(src="https://picsum.photos/200/50")
      NioDivider(horizontal-or)
      img(src="https://picsum.photos/200/50")
    .vertical
      img(src="https://picsum.photos/200/50")
      NioDivider(vertical-or)
      img(src="https://picsum.photos/200/50")      
</template>

<script>

import NioDivider from '../components/Divider'

export default {
  components: {
    NioDivider
  },
  data: () => ({

  })
};
</script>

<style lang="sass" scoped>
.test-divider
  display: flex
  flex-direction: column
  align-items: center
  .horizontal
    width: 300px
    display: flex
    flex-direction: column
    align-items: center
    img
      width: 200px
      margin-bottom: 10px
      margin-top: 10px
  .vertical
    width: 150px
    height: 300px
    display: flex
    align-items: center
    img
      width: 50px
      height: 200px
      margin-left: 10px
      margin-right: 10px    
</style>