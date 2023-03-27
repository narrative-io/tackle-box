<template lang="pug">
  .nio-forecast-widget(v-if="openApiBaseUrl && openApiToken")
    .d-flex
      .title-description.mr-16
        .filter-title.nio-h4.text-primary-darker Data Forecast 
          NioPill(
            text="Alpha"
            :background-color="getThemeColor('primaryDark')"
          )
        .description.nio-p.text-primary-dark Press the Generate Forecast button to scan providers' available datasets that meet your order's criteria and receive an estimate of the quantity of data you will receive.
      .d-flex.flex-column.full-width  
        .filter-value-container.full-width
          .filter-value
            .observed-data.module
              .module-content
                .nio-h6.text-primary-darker(v-if="appType === 'buyer'") Estimated Processing Cost
                .nio-h6.text-primary-darker(v-else) Data Scanned
                .result-value(v-if="costForecastResults === 'loading'")
                  v-progress-circular.progress(
                    size="32" 
                    color="#1438F5"
                    indeterminate 
                  )
                .result-value(v-else-if="costForecastResults === null || costForecastError")
                  .nio-h3.text-primary-light Not Available
                .result-value(v-else)
                  .nio-h3.text-primary-darker(v-if="appType === 'buyer'") {{ processingCost }}
                  .nio-h3.text-primary-darker(v-else) {{ rowsScanned }}
                  .nio-h5.text-primary-light {{ sizeScanned }}
            .delivered-data.module
              //- NioDivider(vertical-solo)
              .module-content
                .nio-h6.text-primary-darker Deliverable Data
                .result-value(v-if="forecastResults === 'loading'")
                  v-progress-circular.progress(
                    size="32" 
                    color="#1438F5"
                    indeterminate 
                  )
                .result-value(v-else-if="forecastResults === null || forecastError")
                  .nio-h3.text-primary-light Not Available
                .result-value(v-else)
                  .nio-h3.text-primary-darker {{ deliverableRows }}
                  .nio-h5.text-primary-light(v-if="!hideDataCost") {{ forecastCost }}
        NioDivider(
          v-if="!disableGroupBy"
          horizontal-solo
        )
        .group-by-forecast(v-if="!disableGroupBy")
          NioCheckbox(
            v-model="enableGrouping"
            label="Group results by attribute"
          )
          .enable-group(v-if="enableGrouping")
            NioSelect(
              v-model="groupBy"
              :items="selectOptions"
              item-text="label"
              item-value="value"
              small
            )
            .d-flex.justify-center(v-if="forecastResults === 'loading'")
              v-progress-circular.progress(
                size="32" 
                color="#1438F5"
                indeterminate 
              )
            .data-points(v-if="showResults")
              .d-flex.justify-space-between.data-point.py-3(v-for="group, i in currentGroup")
                p.nio-p.text-primary-dark.my-0 {{group.group}}
                h3.nio-h3.text-primary-dark.my-0 {{formatNumberVerbose(group.rows)}}
            
            .d-flex.justify-end.align-center.mb-4.mt-4(v-if="showResults && groupResult.length")
              .nio-h4.text-primary-darker {{ Math.min(page * perPage, groupResult.length) }} of {{ groupResult.length }}
              .d-flex
                NioButton(container @click="goPrevious()")
                  NioIcon(
                    name="utility-chevron-left",
                    :size="16",
                    color="#AEB9E8",
                  ) Previous
                NioButton(container, @click.prevent="goNext()")
                  NioIcon(name="utility-chevron-right", :size="16", color="#AEB9E8") Next
            NioButton.mt-4(normal-tertiary v-if="groupResult.length" @click="toggleResults = !toggleResults") {{toggleResults ? 'Hide' : 'Show'}} grouped results
    NioDivider(horizontal-solo)
    .fingerprint(v-if="fingerprint && hasForecasted")
      NioCopyToClipboard(
        :icon-name="'utility-fingerprint'"
        :text="fingerprint"
        ref="fingerprint"
      )
    .actions
      .forecast-stale-message
        .nio-p.text-warning(v-if="!hideStaleForecastMessage && forecastParamsStale && hasForecasted") <strong>Configuration changed:</strong> Please click "Generate Forecast" to get updated results.
      NioButton(
        normal-secondary
        :disabled="!canForecast"
        @click="generateForecast"
      ) Generate Forecast
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
import numeral from 'numeral'
import { getThemeColor } from '@/modules/app/theme/theme'
import { getForecast } from '@/modules/app/forecast/forecastModule'
import { makeDotDelimitedPropertyPath } from '../../modules/app/schema/attributeModule';
import NioCopyToClipboard from '../../components/CopyToClipboard.vue';

export default {
  name: 'nio-forecast-widget',
  components: { NioCopyToClipboard },
  props: {
    forecastParams: { type: Object, required: false },
    filters: {type: Array, default: () => []},
    openApiBaseUrl: { type: String, required: false },
    openApiToken: { type: String, required: false },
    appType: { type: String, required: false, default: 'default' },
    processingRate: { type: Number, required: false, default: 5 },
    disableGroupBy: { type: Boolean, default: false },
    forecastParamsStale: { type: Boolean, default: false },
    hideStaleForecastMessage: { type: Boolean, default: false },
    hideDataCost: { type: Boolean, default: false }
  },
  data() {
    return {
      enableGrouping: false,
      groupBy: '',
      groupResult: [],
      toggleResults: true,
      page: 0,
      perPage: 5,
      currentGroup: [],
      forecastResults: null,
      costForecastResults: null,
      fingerprint: null,
      hasForecasted: false
    }
  }, 
  watch: {
    forecastResults(val) {
      let result = (val?.result?.datasets || []).filter(({group}) => group)
      let groupResult = result.reduce((acc, result)  => {
        const { group } = result
        acc[group] =  acc[group] ? { ...acc[group], rows: acc[group].rows + result.rows } : result
        return acc
      }, {})
      this.groupResult = Object.values(groupResult)
      this.goNext()
    },
    groupBy(prev, val) {
      if(prev === val) return
      this.resetState()
    }
  },
  computed: {
    canForecast() {
      return this.forecastParams && (this.forecastParamsStale || !this.hasForecasted) && !(this.forecastResults === 'loading' || this.costForecastResults === 'loading')
    },
    showResults() {
      return this.forecastResults !== 'loading' && this.toggleResults
    },
    selectOptions() {
      const result = this.filters.filter(filter => filter.value === "ifPresent" || filter.value === "custom").map(({path}) =>  {
        let optionValue = `${path[0].name}${path.length > 1 ? '.' : ''}${makeDotDelimitedPropertyPath(path)}`
        let optionLabel = ''
        path.forEach((pathElement, index) => {
          if (index > 0) {
            optionLabel += ' > '
          }
          optionLabel += index === 0 ? pathElement.displayName : pathElement
        })
        return {label: optionLabel, value: optionValue}
      })
      return result
    },
    rowsScanned() {
      if (this.costForecastResults.result?.cost?.rows === 0) {
        return "No matching rows"
      }
      return this.formatNumberVerbose(this.costForecastResults.result.cost.rows)
    },
    processingCost() {
      if (this.costForecastResults.result?.cost?.size === 0) {
        return "N/A"
      }
      return this.formatCurrencyNoCents(this.costForecastResults.result.cost.size * this.processingRate / 1000000000)
    },
    sizeScanned() {
      if (this.costForecastResults.result?.cost?.size === 0) {
        return "0 B"
      }
      return this.readableSize(this.costForecastResults.result.cost.size)
    },
    deliverableRows() {
      if (this.forecastResults.result.rows === 0) {
        return "No matching rows"
      }
      return this.formatNumberVerbose(this.forecastResults.result.rows)
    },
    forecastCost() {
      if (this.forecastResults.result.rows === 0) {
        return ""
      }
      return this.formatCurrencyNoCents(this.forecastResults.result.cost / 100000000) + ' Estimated Data Cost'
    },
    forecastError() {
      return !this.forecastResults || 
        !this.forecastResults || 
        this.forecastResults.state !== 'completed'
    },
    costForecastError() {
      return !this.costForecastResults || 
        this.costForecastResults.state !== 'completed'
    }
  },
  mounted() {
    this.updateDefaultOption();
  },
  methods: {
    generateForecast() {
      this.$emit('forecastStarted')
      this.hasForecasted = true
      this.fingerprint = uuidv4()
      this.forecastResults = 'loading'
      this.costForecastResults = 'loading'
      const dimensions = {
        "distinct_counts": [],
        "group_by": this.groupBy
      }
      const payload = { details: this.forecastParams }
      if (this.enableGrouping && dimensions) {
        payload.dimensions = dimensions
      }
      let headers = {
        'Authorization': `Bearer ${this.openApiToken}`
      }
      payload.fingerprint = this.fingerprint
      getForecast(payload, 'forecasts', this.openApiBaseUrl, {headers: headers}).then(res => {
        this.forecastResults = res
        this.$emit('forecastComplete', res)
      })
      getForecast(payload, 'cost-forecasts', this.openApiBaseUrl, {headers: headers}).then(res => {
        this.costForecastResults = res
        this.$emit('costForecastComplete', res)
      })
    },
    resetState() {
      this.currentGroup = []
      this.groupResult = []
      this.page = 0
      this.perPage = 5
    },
    updateDefaultOption() {
      if(!this.selectOptions?.length) return
      const [option] = this.selectOptions
      this.groupBy = option.value
    },
    formatNumber(number) {
      if (isNaN(number))
        return 0
      if (number) {
        if (Math.abs(number) > 1000)
          return numeral(number).format('0.0a')
        else 
        return numeral(number).format('0,0')
      }
      else return number
    },
    formatNumberVerbose(number) {
      if (number > 0) {
        return this.formatNumber(number).replace('m', ' Million').replace('b', ' Billion').replace('b', ' Billion').replace('t', ' Trillion') + ' Rows'
      }
    },
    readableSize(number) {
      var i = Math.floor( Math.log(number) / Math.log(1024) )
      return ( number / Math.pow(1024, i) ).toFixed(0) * 1 + ' ' + ['B', 'KB', 'MB', 'GB', 'TB'][i]
    },
    formatCurrencyNoCents(number) {
      if (Math.abs(number) > 1000)
        return numeral(number).format('$0,0')
      else
        return numeral(number).format('$0')
    },
    getThemeColor(colorName) {
      return getThemeColor(colorName)
    },
    goPrevious() {
      if (this.page === 1) return
      this.page -= 1
      this.currentGroup = [...this.paginate(this.groupResult, this.page, this.perPage)]
    },
    paginate(data = [], page, perPage) {
      const start = perPage * (page - 1)
      const end = perPage * page
      return data.slice(start, end)
    },
    goNext() {
      if (this.page * this.perPage >= this.groupResult.length) {
        return
      }
      this.page += 1
      this.currentGroup = [...this.paginate(this.groupResult, this.page, this.perPage)]
    }
  }
};
</script>

<style lang="sass" scoped>
  @import "../../styles-private/forecasting/_forecast-widget"
</style>