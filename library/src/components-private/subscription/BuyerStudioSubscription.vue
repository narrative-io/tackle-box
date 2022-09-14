<template lang="pug">
  .nio-buyer-studio-subscription
    .split-row   
      .display-row.display-table
        .display-column
          .nio-h4.text-primary-darker Description
          .nio-p.text-primary-dark.description(v-if="subscription.description") {{ subscription.description }}
          .nio-p.text-primary-dark.empty(v-else) None provided   
      .display-row.display-table
        .display-column
          .nio-h4.text-primary-darker Subscription ID
          .nio-p.text-primary-dark.description {{ subscription.id }}             
    .split-row
      .display-row.display-table
        .display-column
          .nio-h4.text-primary-darker Monthly Budget
          .nio-p.text-primary-dark {{ computeBudget(subscription) }}  
      .display-row.price-cap
          .display-column.full-width
            .nio-h4.text-primary-darker Max cost per 1000 records
            .nio-p.text-primary-dark {{ getCPM(subscription.details.pricing.micro_cents_usd) }}
    .display-row.display-table.included-filters(v-if="subscription.status === 'active' || subscription.status === 'kickoff' || subscription.status === 'pending'" )
      .display-column.full-width
        .nio-h4.text-primary-darker(style="margin-bottom: 8px") Included Filters
        .applied-filters(v-if="appliedFilters && appliedFilters.length > 0")
          NioFilterGroup(
            v-if="appliedFilters"
            :filters="appliedFilters"
            :summary="true"
          )
            template(v-slot:filter-header-name-custom="slotProps")
              NioPrettySchemaPath(
                :path="slotProps.filter.customTitle"
                display-only
              )
        .nio-p.text-primary-dark.empty(v-else) No filters applied
    .display-row.display-table(v-if="subscription.status === 'active' || subscription.status === 'kickoff' || subscription.status === 'pending'")
      .display-column.full-width
        .nio-h4.text-primary-darker(style="margin-bottom: 8px") Deliverable attributes
        .attributes
          .loading-attributes(v-if="!attributes")
            v-progress-circular.progress(
              size="40" 
              color="#1438F5"
              indeterminate 
            )
          .attributes-list(v-else)
            NioExpansionPanels(
              multiple
            )
              NioExpansionPanel(
                v-for="(field, index) of getExportedFields(subscription)"
                :key="index"
              )
                template(v-slot:header) 
                  NioPrettySchemaPath(:path="field.path" :displayOnly="true")
                template(v-slot:content)
                  .display-row.display-table
                    .display-column.type
                      .nio-h4.text-primary-darker Type
                      .nio-p.text-primary-dark {{ getPropertyType(field.property) }}
                  .display-row.display-table
                    .display-column.enum
                      .nio-h4.text-primary-darker Supported Values
                      .nio-p.text-primary-dark(v-if="field.property.enum") 
                        .pills
                          NioPill(
                            v-for="value of field.property.enum"
                            tag
                          ) {{ value }}
                      .nio-p.text-primary-dark(v-else) Any value
    .split-row
      .display-row.display-table(v-if="subscription.status === 'active' || subscription.status === 'kickoff' || subscription.status === 'pending' || subscription.status === 'completed'")
        .display-column.full-width
          .nio-h4.text-primary-darker(style="margin-bottom: 8px") Deduplication
          .deduplication(v-if="subscription.details && subscription.details.data_rules && subscription.details.data_rules.deduplication")   
            .nio-p.text-primary-dark Buy only unique records <span class="nio-bold">every {{ makeReadablePeriod(subscription.details.data_rules.deduplication.period) }}</span> based on these data points:
              .pills(v-if="sellerCompanies")
                NioPill(
                  v-for="dataPoint of makeDeduplication(subscription.details.data_rules.deduplication)"
                  tag
                ) {{ makeDataPointPath(dataPoint) }}
          .no-deduplication(v-else)
            .nio-p.text-primary-dark.empty Buy all data points     
      .display-row.providers
        .display-column
          .nio-h4.text-primary-darker Providers
          .nio-p.text-primary-dark(v-if="subscription.details && subscription.details.company_constraint") {{ makeCompanyConstraint(subscription.details.company_constraint) }}
            .pills(v-if="sellerCompanies")
              template(v-for="companyId of subscription.details.company_constraint.company_ids")
                NioPill(
                  v-if="getCompanyNameById(companyId)"
                  tag
                ) {{ getCompanyNameById(companyId) }}
          .nio-p.text-primary-dark.empty(v-else) Buy from all sellers
    .split-row
      .display-row.display-table.destinations
        .display-column
          .nio-h4.text-primary-darker Delivery Destinations
          .subscription-destinations
            NioSubscriptionDestinations(
              :subscription-id="subscription.id"
              :open-api-token="openApiToken"
              :open-api-base-url="openApiBaseUrl"
            )
      .display-row.display-table.file-download
        .display-column
          .nio-h4.text-primary-darker Delivered File Download
          .show-downloads
            .nio-p.text-primary-dark.mobile-message File downloads not supported in mobile browsers
            NioButton(
              v-if="!filesVisible"
              normal-secondary
              @click="filesVisible = true"
            ) Show Downloads
            NioButton(
              v-if="filesVisible"
              normal-secondary
              @click="filesVisible = false"
            ) Hide Downloads
    .display-row.display-table(v-show="filesVisible")
      .display-column
        NioSubscriptionFileDownload(
          :subscription="subscription"
          :open-api-token="openApiToken"
          :open-api-base-url="openApiBaseUrl"
        )   
    .split-row
      .display-row.display-table
        .display-column
          .nio-h4.text-primary-darker Delivery Cadence
          .nio-p.text-primary-dark {{ makeCadence(subscription) }}
      .display-row.display-table.frequency
        .display-column
          .nio-h4.text-primary-darker Frequency Filter
          .filter-value(v-if="frequencyFilter")
            .selected-filter-value
              NioIcon(
                name="utility-check-circle"
                color="#43B463"
                size="14"
              )
              .text.nio-p.text-prim-darker {{ frequencyFilter.value }}
            template(v-if="frequencyFilter.value === 'Custom'")
              .nio-p.text-primary-dark Only receive a record that appears 
              .nio-p.text-primary-dark At least a minimum of <span class="nio-bold text-primary-darker">{{ frequencyFilter.min }}</span> times
              .nio-p.text-primary-dark Up to a maximum of <span class="nio-bold text-primary-darker">{{ frequencyFilter.max }}</span> times
              .nio-p.text-primary-dark For these data points:
              .selected-details
                .frequency-fields
                  NioPill(
                    v-for="field of frequencyFilter.fields"
                    tag
                  ) {{ field }}
    .subscription-footer
      .subscription-actions(v-if="subscription.status !== 'archived'")
        NioButton(
          caution-text 
          @click="deactivateSubscription"
        ) Stop Subscription
</template>

<script>

import numeral from 'numeral'
import { getReadableType, getAttributeFromPath } from '@/modules/app/schema/attributeModule'
import { makeSummaryFilterGroup } from './filtersSummary'
import NioFilterGroup from '../../components/filter/FilterGroup'
import NioPrettySchemaPath from '../schema/PrettySchemaPath'
import NioExpansionPanels from '../../components/ExpansionPanels'
import NioExpansionPanel from '../../components/ExpansionPanel'
import NioPill from '../../components/Pill'
import NioButton from '../../components/Button'
import NioIcon from '../../components/icon/Icon'
import NioSubscriptionDestinations from '../../components/connectors/destination/subscription-destinations/SubscriptionDestinations'
import NioSubscriptionFileDownload from './SubscriptionFileDownload'

export default {
  name: 'nio-buyer-studio-subscription',
  components: {
    NioFilterGroup,
    NioPrettySchemaPath,
    NioExpansionPanels,
    NioExpansionPanel,
    NioPill,
    NioButton,
    NioIcon,
    NioSubscriptionDestinations,
    NioSubscriptionFileDownload
  },
  props: {
    subscription: { type: Object, required: true },
    attributes: { type: Array, required: true },
    datasets: { type: Array, required: true },
    sellerCompanies: { type: Array, required: true },
    openApiToken: { type: String, required: true },
    openApiBaseUrl: { type: String, required: true }
  },
  data: () => ({
    filesVisible: false,
    appliedFilters: null,
    frequencyFilter: null
  }),	
  mounted() {
    this.appliedFilters = makeSummaryFilterGroup(this.subscription, this.attributes, this.datasets)
    this.makeFrequencyFilter()
  },
  methods: {
    computeBudget(item) {
      return `${item.budget.amount.currency === 'USD' ? '$' : ''}${numeral(item.budget.amount.value.toFixed(2)).format('0,0')} ${item.budget.amount.currency !== 'USD' ? item.budget.amount.currency : ''}`
    },
    getPropertyType(property) {
      return getReadableType(property)
    },
    getDatasetById(id) {
      return this.datasets.find(dataset => dataset.id === id)
    },
    getExportedFields(subscription) {
      return this.findExportedFields(subscription, this.attributes, 'deliverable')
    },
    makeCompanyConstraint(companyConstraint) {
      if (companyConstraint.type === 'inclusion') {
        return `Buy only from sellers:`
      } else {
        return `Buy from all sellers except:`
      }
    },
    getCompanyNameById(companyId) {
      return this.sellerCompanies.find(company => company.id === companyId) ? this.sellerCompanies.find(company => company.id === companyId).name : undefined
    },
    getCPM(microcents) {
      return `${numeral((microcents / 1000000) * 1000 / 100).format('$0.00')}`
    },
    makeFilterValue(filter) {
      if (filter && filter.expressions && filter.expressions.length > 0) {
        return 'Custom Spark SQL'
      } else if (filter === 'include_only_if_not_null_filter') {
        return 'Optional Attribute'
      } else if (Object.keys(filter).length > 0) {
        return 'Custom'
      }
    },
    makeDeduplication(deduplication) {
      return deduplication.attribute_references.reduce((acc, attributeRef) => {
        return [...acc, ...attributeRef.column_names]
      }, [])
    },
    makeReadablePeriod(period) {
      let str = period.replace('P', '')
      if (str.indexOf('D') > -1) {
        return `${str.replace('D', '')} days`
      } else if (str.indexOf('W') > -1) {
        return `${str.replace('W', '')} weeks`
      } else if (str.indexOf('M') > -1) {
        return `${str.replace('M', '')} months`
      }
    },
    makeDataPointPath(dataPoint) {
      const path = dataPoint.split('.')
      path[0] = this.attributes.find(attribute => attribute.name === path[0]).display_name
      return path.join(' > ')
    },
    makeCadence(item) {
      switch (item.cadence) {
        case 'once':
          return 'One Time'
        case 'hourly':
          return 'Hourly'
        case 'daily':
          return 'Daily'
        case 'weekly': 
          return 'Weekly'
        case 'monthly':
          return 'Monthly'
        default:
          return 'Weekly'
      }
    },
    makeFrequencyFilter() {
      const frequencyFilter = {}
      if (this.subscription.details.data_rules && this.subscription.details.data_rules.frequency_filter) {
        const filter = this.subscription.details.data_rules.frequency_filter
        frequencyFilter.value = 'Custom'
        frequencyFilter.min = filter.min_inclusive
        frequencyFilter.max = filter.max_inclusive
        if (filter.attribute_references && filter.attribute_references.length > 0) {
          frequencyFilter.fields = filter.attribute_references.reduce((acc, attributeRef) => {
            return [
              ...acc, 
              ...attributeRef.column_names.map(column => column.replace('.', ' > '))
            ]
          }, [])
        }
      } else {
        frequencyFilter.value = 'Include all values'
      }
      this.frequencyFilter = frequencyFilter
    },
    findExportedFields(subscription, attributes, type) {
      const results = []
      let attributeUndefined = false
      subscription.details.data_rules.attributes.forEach(attribute => {
        attribute.fields.forEach(field => {
          if ((type === 'deliverable' && field.exported) || (type === 'filterable' && field.filter)) {
            const path = this.makeArrayPathFromString(field.field, attributes)
            if (!path) { // short circuit and return undefined if an attribute has been deleted
              attributeUndefined = true
              return undefined
            }
            const parentAttribute = attributes.find(attribute => attribute.id === path[0].id)		
            const result = {
              path: path,
              property: getAttributeFromPath(path, parentAttribute),
            }
            if (type === 'filterable') {
              
              result.filter = field.filter
            }
            results.push(result)
          }
        })
      })
      if (attributeUndefined) {
        return undefined
      }
      return results
    },
    makeArrayPathFromString(stringPath, attributes) {
      const resultPath = []
      const pathSegments = stringPath.split('.')
      const parentAttribute = attributes.find(attribute => attribute.name === pathSegments[0])
      if (parentAttribute) {
        resultPath.push({
          id: parentAttribute.id,
          name: parentAttribute.name,
          displayName: parentAttribute.display_name
        })
      
        pathSegments.shift()
        return [...resultPath, ...pathSegments]
      } else {
        return undefined
      }
    },
    deactivateSubscription() {
      this.$emit('deactivateSubscription', this.subscription.id)
    }
  }
}
</script>

<style lang="sass">

@import "../../styles-private/subscription/_buyer-studio-subscription"

</style>