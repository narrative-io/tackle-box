<template lang="pug">
  .nio-buyer-studio-subscription
    .split-row
      .display-row.display-table
        .display-column
          .nio-h7.text-primary-dark Monthly Budget
          .nio-p.text-primary-dark {{ computeBudget(subscription) }}  
      .display-row.price-cap
          .display-column.full-width
            .nio-h7.text-primary-dark Max cost per 1000 records
            .nio-p.text-primary-dark {{ getCPM(subscription.details.pricing.micro_cents_usd) }}
    .split-row   
      .display-row.display-table
        .display-column
          .nio-h7.text-primary-dark Description
          .nio-p.text-primary-dark.description(v-if="subscription.description") {{ subscription.description }}
          .nio-p.text-primary-dark.empty(v-else) None provided               
      .display-row.providers
        .display-column
          .nio-h7.text-primary-dark Providers
          .nio-p.text-primary-dark(v-if="subscription.details && subscription.details.company_constraint") {{ makeCompanyConstraint(subscription.details.company_constraint) }}
            .pills(v-if="sellerCompanies")
              template(v-for="companyId of subscription.details.company_constraint.company_ids")
                NioPill(
                  tag
                  v-if="getCompanyNameById(companyId)"
                ) {{ getCompanyNameById(companyId) }}
          .nio-p.text-primary-dark.empty(v-else) Buy from all sellers
    .display-row.display-table.included-filters(v-if="subscription.status === 'active' || subscription.status === 'kickoff'")
      .display-column.full-width
        .nio-h7.text-primary-dark(style="margin-bottom: 8px") Included Filters
        .applied-filters(v-if="getAppliedFilters(subscription).length || getDatasetFilter(subscription)")
          .applied-filter(
            v-for="filter of getAppliedFilters(subscription)"
          )
            NioPrettySchemaPath(:path="filter.path" :displayOnly="true")
            .selected-filter-value 
              NioIcon(
                name="utility-check-circle"
                color="#43B463"
                size="14"
              )
              .text.nio-p.text-primary-darker {{ makeFilterValue(filter.filter) }}
          .applied-filter.join-filter(v-if="getDatasetFilter(subscription)")
            NioPrettySchemaPath(:path="getDatasetFilter(subscription).path" :displayOnly="true")
            .selected-filter-value 
              NioIcon(
                name="utility-check-circle"
                color="#43B463"
                size="14"
              )
              .text.nio-p.text-primary-darker Join to Dataset
            //- .text.nio-p.text-primary-darker.nio-bold Dataset Name:

            //- .text.nio-p.text-primary-darker Dataset Name: {{ getDatasetById(getDatasetFilter(subscription).dataset_id).name }}
        .nio-p.text-primary-dark.empty(v-else) No filters applied
    .display-row.display-table(v-if="subscription.status === 'active' || subscription.status === 'kickoff'")
      .display-column.full-width
        .nio-h7.text-primary-dark(style="margin-bottom: 8px") Deliverable attributes
        .attributes
          .loading-attributes(v-if="!attributes")
            v-progress-circular.progress(size="40" indeterminate color="#1438F5")
          .attributes-list(v-else)
            NioExpansionPanels(
              multiple
            )
              NioExpansionPanel(
                v-for="(field, index) of findExportedFields(subscription)"
                :key="index"
              )
                template(v-slot:header) 
                  NioPrettySchemaPath(:path="field.path" :displayOnly="true")
                template(v-slot:content)
                  .display-row.display-table
                    .display-column.type
                      .nio-h7.text-primary-dark Type
                      .nio-p.text-primary-dark {{ getPropertyType(field.property) }}
                  .display-row.display-table
                    .display-column.enum
                      .nio-h7.text-primary-dark Supported Values
                      .nio-p.text-primary-dark(v-if="field.property.enum") 
                        .pills
                          NioPill(
                            tag
                            v-for="value of field.property.enum"
                          ) {{ value }}
                      .nio-p.text-primary-dark(v-else) Any value
    .display-row.display-table(v-if="subscription.status === 'active' || subscription.status === 'kickoff'")
      .display-column.full-width
        .nio-h7.text-primary-dark(style="margin-bottom: 8px") Deduplication
        .deduplication(v-if="subscription.details && subscription.details.data_rules && subscription.details.data_rules.deduplication")   
          .nio-p.text-primary-dark Buy only unique records <span class="nio-bold">every {{ makeReadablePeriod(subscription.details.data_rules.deduplication.period) }}</span> based on these data points:
            .pills(v-if="sellerCompanies")
              NioPill(
                tag
                v-for="dataPoint of makeDeduplication(subscription.details.data_rules.deduplication)"
              ) {{ makeDataPointPath(dataPoint) }}
        .no-deduplication(v-else)
          .nio-p.text-primary-dark.empty Buy all data points     
    .display-row.display-table
      .display-column
        .nio-h7.text-primary-dark Delivery Cadence
        .nio-p.text-primary-dark {{ makeCadence(subscription) }}
    .display-row.display-table.destinations
      .display-column
        .nio-h7.text-primary-dark Delivery Destinations
        SubscriptionDestinations(
          :subscriptionId="subscription.id"
        )
</template>

<script>

import numeral from 'numeral'
import { getReadableType, replacePropertyRefs } from '@/modules/app/schema/attributeModule'


export default {
  name: 'nio-buyer-studio-subscription',
  props: {
		subscription: { type: Object, required: true },
		attributes: { type: Array, required: true },
		sellerCompanies: { type: Array, required: true }
	},
  data: () => ({
  }),	
  mounted() {
  },
  methods: {
    computeBudget(item) {
      return `${item.budget.amount.currency === 'USD' ? '$' : ''}${numeral(item.budget.amount.value.toFixed(2)).format('0,0')} ${item.budget.amount.currency !== 'USD' ? item.budget.amount.currency : ''}`
    },
    getPropertyType(property) {
      return getReadableType(property)
    },
    getDatasetFilter(subscription) {
      let filter
      if (subscription && subscription.details) {
        filter = subscription.details.data_rules.dataset_filter
      }
      if (filter) {
        filter.path = this.makePathFromDatasetFilter(filter)
      }
      return filter
    },
    makePathFromDatasetFilter(filter) {
      const path = []
      const targetPath = filter.attribute.field.split('.')
      let baseAttribute
      let parsedPath
      if (filter.parent) {
        const parentPath = filter.parent.field.split('.')
        targetPath.shift()
        parsedPath = [...parentPath, ...targetPath]
        baseAttribute = this.attributes.find(attribute => attribute.id === filter.parent.attribute_id)
      } else {
        parsedPath = targetPath
        baseAttribute = this.attributes.find(attribute => attribute.id === filter.attribute.attribute_id)
      }
      path.push({
        id: baseAttribute.id,
        displayName: baseAttribute.display_name
      })
      parsedPath.shift()
      if (parsedPath.length > 0) {
        parsedPath.forEach(property => {
          path.push(property)
        })
      }
      return path
    },
    getDatasetById(id) {
      return this.datasets.find(dataset => dataset.id === id)
    },
    getAppliedFilters(subscription) {
      return findExportedFields(subscription, this.attributes, 'filterable')
    },
    findExportedFields(subscription) {
      return findExportedFields(subscription, this.attributes, 'deliverable')
    },
    makeCompanyConstraint(companyConstraint) {
      if (companyConstraint.type === 'inclusion') {
        return `Buy only from sellers:`
      } else {
        return `Buy from all sellers except:`
      }
    },
    getCompanyNameById(companyId) {
      return this.sellerCompanies.find(company => company.id === companyId) ? his.sellerCompanies.find(company => company.id === companyId).name : undefined
    },
    getCPM(microcents) {
      return `${numeral((microcents / 1000000) * 1000 / 100).format('$0.00')}`
    },
    makeFilterValue(filter) {
      if (filter === 'include_only_if_not_null_filter') {
        return 'Include if present'
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
    findExportedFields(subscription, attributes, type) {
      const results = []
      let attributeUndefined = false
      subscription.details.data_rules.attributes.forEach(attribute => {
        attribute.fields.forEach(field => {
          if ((type === 'deliverable' && field.exported) || (type === 'filterable' && field.filter)) {
            const path = makeArrayPathFromString(field.field, attributes)
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
    }
  }
}
</script>

<style lang="sass">
  @import "../../styles-private/subscription/_buyer-studio-subscription"
</style>