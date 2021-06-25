<template lang="pug">
  .test-slider
    NioSlider(
      v-model="model1"
      :min="10"
      :max="100"
      :value="15"
      prepend
      currency
    ) 
    //- NioSlider(
    //-   v-model="model1"
    //-   :min="10"
    //-   :max="100"
    //-   :value="15"
    //-   prepend
    //- ) 
    //- NioSlider(
    //-   v-model="model1"
    //-   :min="10"
    //-   :max="100"
    //-   :value="15"
    //- ) 
    //- .test {{ model1 }}
    //- NioSlider(
    //-   v-model="model2"
    //-   :min="10"
    //-   :max="100"
    //- ) 
    //- .test {{ model2 }}
    //- NioSlider(
    //-   range
    //-   v-model="rangeModel"
    //-   :min="10"
    //-   :max="100"
    //- ) 
    //- NioSlider(
    //-   range
    //-   currency
    //-   v-model="rangeModel"
    //-   :min="10"
    //-   :max="100"
    //- )
    .test {{ rangeModel }}
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
    rangeModel: [20, 40]
  })
};
</script>

<style lang="sass" scoped>
.test-slider
	.nio-slider
		margin-bottom: 100px
  
</style>