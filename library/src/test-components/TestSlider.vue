<template lang="pug">
  .test-slider
    NioSlider(
      v-model="model1"
      :min="10"
      :max="100"
      prepend
      currency
    ) 
    NioSlider(
      v-model="model1Step"
      :min="10"
      :max="100"
      :step="0.01"
      prepend
      currency
    ) 
    NioSlider(
      v-model="model2"
      :min="10"
      :max="100"
      prepend
    ) 
    NioSlider(
      v-model="model2Step"
      :min="10"
      :max="100"
      :step="0.01"
      prepend
    ) 
    NioSlider(
      range
      currency
      v-model="rangeModel1"
      :min="1.00"
      :max="10.00"
      :step="0.01"
    )
    NioSlider(
      range
      currency
      v-model="rangeModel2"
      :min="0.05"
      :max="4.00"
      :step="0.05"
    )
    NioSlider(
      range
      currency
      v-model="rangeModel3"
      :min="10"
      :max="100"
    )
    NioSlider(
      range
      currency
      v-model="rangeModel4"
      :min="10"
      :max="100"
      :step="0.01"
    )
</template>

<script>

import NioSlider from '../components/Slider'

export default {
  components: {
    NioSlider
  },
  data: () => ({
    model1: 15,
    model2: 15,
    model1Step: 25,
    model2Step: 25,
    rangeModel1: [2.00, 4.00],
    rangeModel2: [1.00, 1.50],
    rangeModel3: [20, 40],
    rangeModel4: [20, 40]
  })
};
</script>

<style lang="sass" scoped>
.test-slider
  .nio-slider
    margin-bottom: 100px
  
</style>