<template lang="pug">
  .nio-forecast-widget
    .heading
      .nio-h3.text-white Volume Estimator {{ state }}
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
          indeterminate
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
import { formatNumberVerbose } from '@/modules/helpers'

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
    },
    rowsScannedMessage() {
      if (this.costForecastResults && this.costForecastResults.result.cost.rows === 0) {
        return "No matching rows"
      }
      return `${formatNumberVerbose(this.costForecastResults.result.cost.rows)} rows scanned`
    },
    deliverableRowsMessage() {
      if (this.forecastResults.result.rows === 0) {
        return "No matching rows"
      }
      return `${formatNumberVerbose(this.forecastResults.result.rows)} rows matched`
    },
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
      this.fetchForecast()
    },
    fetchForecast() {
      setTimeout(() => {
        this.forecastResult = null
        this.costForecastResults = null
        this.state = 'success'
      }, 2000)
      getForecast(this.forecastParams, 'forecasts', this.openApiBaseUrl, this.openApiToken).then(res => {
        this.forecastResults = res
        thie.$emit('forecastUpdated', res.data)
      })
      getForecast(this.forecastParams, 'cost-forecasts', this.openApiBaseUrl, this.openApiToken).then(res => {
        this.costForecastResults = res
        thie.$emit('costForecastUpdated', res.data)
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