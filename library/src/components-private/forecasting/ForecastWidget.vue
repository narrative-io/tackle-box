<template lang="pug">
  .nio-forecast-widget
    .heading
      .nio-h3.text-white Volume Estimator
        NioTooltip.array-join-target(
          message=""
          content-class=""
        )
      NioPill(
        text="alpha"
      ) 
    .results
      .results-text
        .matched.nio-h4.text-white 3.5 million rows matched*
        .scanned.nio-h4.text-primary-light 5 million rows scanned
      .results-graphic
      .results-annotation.nio-h4.text-primary-light *Estimated matched rows based on applied filters
    .call-to-action
      NioButton(
        normal-secondary
      ) Scan Data
</template>

<script>

import NioPill from '@/components/Pill'
import NioTooltip from '@/components/Tooltip'
import NioButton from '@/components/Button'

export default {
  components: { NioPill, NioTooltip, NioButton },
  name: 'nio-forecast-widget',
  props: {
  
  },
  computed: {
    
  },
  methods: {
   
  }
};
</script>

<style lang="sass">
  @import "../../styles-private/forecasting/_forecast-widget"
</style>