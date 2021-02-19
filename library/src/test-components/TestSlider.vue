<template lang="pug">
  .test-slider
    NioSlider(
      v-model="model1"
      :min="10"
      :max="100"
      :value="15"
    ) 
    .test {{ model1 }}
    NioSlider(
      v-model="model2"
      :min="10"
      :max="100"
    ) 
    .test {{ model2 }}
   
</template>

<script>

import NioSlider from '../components/Slider'

export default {
  components: {
    NioSlider
  },
  data: () => ({
    model1: 15,
    model2: 15
  })
};
</script>

<style lang="sass" scoped>
.test-slider
  
</style>