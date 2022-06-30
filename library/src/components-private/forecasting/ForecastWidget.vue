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
import axios from 'axios'
import { getForecast } from '@/modules/app/forecast/forecastModule'

export default {
  components: { NioPill, NioTooltip, NioButton },
  name: 'nio-forecast-widget',
  props: {
    openApiToken: { type: String, required: true },
    openApiBaseUrl: { type: String, required: true }
  },
  data: () => ({
    state: 'initial',
    reqHeaders: null,
    forecastResult: null,
    costForecastResult: null
  }),
  computed: {
    progressColor() {
      return getThemeColor('primaryDark')
    }
  },
  mounted() {
    this.reqHeaders = {
      headers: {
        'Authorization': `Bearer ${this.openApiToken}`
      }
    }
  },
  methods: {
    runForecast() {
      this.state = 'running'
      axios.get(`${this.openApiBaseUrl}/data-shops/subscriptions/${this.subscription.id}/deliveries`, this.reqHeaders).then(resp => {
        this.fileDeliveries = resp.data.records
        this.loading = false
      })


      this.forecastResults = 'loading'
      this.costForecastResults = 'loading'
      getForecast(this.forecastParams, 'forecasts', this.openApiBaseUrl, this.openApiToken).then(res => {
        this.forecastResults = res
      })
      getForecast(this.forecastParams, 'cost-forecasts', this.openApiBaseUrl, this.openApiToken).then(res => {
        this.costForecastResults = res
      })
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