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
        v-progress-linear(
          intdeterminate
          v-if="state === 'running'"
          :color="progressColor"
        )
      .results-annotation.nio-h4.text-primary-light *Estimated matched rows based on applied filters
    .call-to-action
      NioButton(
        normal-secondary
        @click="runForecast"
      ) Scan Data
</template>

<script>

import NioPill from '@/components/Pill'
import NioTooltip from '@/components/Tooltip'
import NioButton from '@/components/Button'
import { getThemeColor } from '@/modules/app/theme/theme'

export default {
  components: { NioPill, NioTooltip, NioButton },
  name: 'nio-forecast-widget',
  props: {
  
  },
  data: () => ({
    state: 'initial'
  }),
  computed: {
    progressColor() {
      return getThemeColor('primaryDark')
    }
  },
  methods: {
    runForecast() {
      this.state = 'running'
    },
    forecastCompleted() {
      this.state = 'completed'
    }
  }
};
</script>

<style lang="sass">
  @import "../../styles-private/forecasting/_forecast-widget"
</style>