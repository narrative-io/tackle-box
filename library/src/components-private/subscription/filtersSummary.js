import { getAttributeFromPath, makePathString } from '@/modules/app/schema/attributeModule'
import { toCamelCase } from '@/modules/helpers'

const defaultOption = {
  label: `Optional Attribute`,
  value: 'default',
}

const includeIfPresentOption = {
  label: "Required Attribute",
  value: 'ifPresent',
}

const customOption = {
  label: 'Custom Filtering',
  value: 'custom',
}

const joinOption = {
  label: 'Join to Dataset',
  value: 'join'
}

let makeSummaryFilterGroup = (subscription, attributes, datasets) => {
  let filters = []
  const dataRules = subscription.details.data_rules
  if (dataRules.attributes && dataRules.attributes.length > 0) {
    dataRules.attributes.forEach(attribute => {
      if (attribute.fields && attribute.fields.length > 0) {
        const parentAttribute = attributes.find(attr => attr.id === attribute.attribute_id)
        attribute.fields.forEach(field => {
          const fieldElements = field.field.split('.')
          fieldElements.shift()
          const path = fieldElements.reduce((acc, el) => {
            return [...acc, el]
          }, [{
            id: parentAttribute.id,
            name: parentAttribute.name,
            displayName: parentAttribute.display_name
          }])
          const targetAttribute = getAttributeFromPath(path, parentAttribute)
          if (field.filter && targetAttribute && !path.includes('items')) {
            filters.push(makeFilter(field.filter, path, targetAttribute))
          }
        })
      }
    })
  }
  if (dataRules.dataset_filter) {
    const datasetFilterPath = makePathFromDatasetFilter(dataRules.dataset_filter, attributes)
    const parentAttributeId = dataRules.dataset_filter.parent ? dataRules.dataset_filter.parent.attribute_id : dataRules.dataset_filter.attribute.attribute_id
    const parentAttribute = attributes.find(attr => attr.id === parentAttributeId)
    const targetAttribute = getAttributeFromPath(datasetFilterPath, parentAttribute)
    const targetDataset = datasets.find(dataset => dataset.id === dataRules.dataset_filter.dataset_id)
    if (targetDataset) {
      const filterObj = {
        name: toCamelCase(makePathString(datasetFilterPath).replaceAll('->', '')),
        type: makeFilterType(targetAttribute),
        title: '',
        customTitle: datasetFilterPath,
        path: datasetFilterPath,
        description: '',  
        value: 'join'
      }
      makeFilterOptions(filterObj, targetAttribute)
      filterObj.options.push(joinOption)
      filterObj.joinOption = {
        config: {
          datasets: [targetDataset],
          targetAttribute: null,
          field: null
        },
        value: {
          selectedDataset: dataRules.dataset_filter.dataset_id
        }
      }
      if (targetAttribute.type === 'binary' && targetAttribute.format === 'geometry') {
        filterObj.joinOption.config.datasets[0].format = 'geometry'
        filterObj.joinOption.value.geometryType = dataRules.dataset_filter.predicate === 'st_intersects' ? 'Intersects' : 'Contains'
      } else {
        filterObj.joinOption.value.joinType = dataRules.dataset_filter.inclusion
      }
      filters.push(filterObj)
    }
  }
  return filters
}

let makePathFromDatasetFilter = (filter, attributes) => {
  const path = []
  const targetPath = filter.attribute.field.split('.')
  let baseAttribute
  let parsedPath
  if (filter.parent) {
    const parentPath = filter.parent.field.split('.')
    targetPath.shift()
    parsedPath = [...parentPath, ...targetPath]
    baseAttribute = attributes.find(attribute => attribute.id === filter.parent.attribute_id)
  } else {
    parsedPath = targetPath
    baseAttribute = attributes.find(attribute => attribute.id === filter.attribute.attribute_id)
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
}

let makeFilter = (filter, path, attribute) => {
  const filterObj = {
    name: toCamelCase(makePathString(path).replaceAll('->', '')),
    title: '',
    customTitle: path,
    path: path,
    description: '',
  }
  if (filter.expressions) {
    filterObj.type = 'spark'
    filterObj.value = 'custom'
    filterObj.expressions = filter.expressions
    filterObj.options = [
      defaultOption,
      includeIfPresentOption,
      customOption
    ]
  } else {
    filterObj.type = makeFilterType(attribute)
    makeFilterOptions(filterObj, attribute)
    if (!filter || filter === 'include_all_values_including_nulls_filter') {
      filterObj.value = defaultOption.value
    } else if (filter === 'include_only_if_not_null_filter') {
      filterObj.value = includeIfPresentOption.value
    } else {
      filterObj.value = customOption.value
      makeFilterDetails(filterObj, filter, attribute)
    }  
  }

  return filterObj
}

let makeFilterType = (attribute) => {
  switch (attribute.type) {
    case 'array':
      return 'array'
    case 'string':
      return attribute.enum ? 'stringLimited' : 'stringMany'  
    case 'long':
    case 'double': 
      return 'number'
    case 'boolean':
      return 'boolean'
    case 'timestamptz':
      return 'simpleTimestamp'
    case 'binary':
      return 'binary'
    default:
      break;
  }
}

let makeFilterDetails = (filterObj, filter, attribute) => {
  switch (attribute.type) {
    case 'array':
      break;
    case 'string':
      if (attribute.enum) {
        filterObj.customOption = {
          config: {
            multiple: true,
            items: filter.list.sort().map(item => { 
              return  {
                value: item,
                label: item
              }
            })
          },
          value: {
            items: filter.list.sort().map(item => { 
              return  {
                value: item,
                label: item
              }
            })
          }
        }
      } else {
        filterObj.customOption = {
          config: {
            manualEntryOnly: true
          },
          value: {
            listType: filter.type,
            manualEntry: filter.list.sort().filter(val => val.length && val.length > 0)
          }
        }
      }
      break;
    case 'long':
      filterObj.customOption = {
        config: {
          unconstrained: true
        },
        value: [filter.min && filter.min.value ? parseInt(filter.min.value) : null, filter.max && filter.max.value ? parseInt(filter.max.value) : null]
      }
      break;
    case 'double':
      filterObj.customOption = {
        config: {
          unconstrained: true
        },
        value: [filter.min && filter.min.value ? parseFloat(filter.min.value) : null, filter.max && filter.max.value ? parseFloat(filter.max.value) : null]
      }
      break;
    case 'boolean':
      const val = [filter.list[0]]
      filterObj.customOption = {
        value: val === 'true' ? true : false
      }
      break;
    case 'timestamptz':
      let recencyPeriod, recencyValue
      if (filter.recency) {
        let recency = filter.recency.substring(1)
        recencyPeriod = recency.substring(recency.length - 1)
        recencyValue = parseInt(recency.substring(0, recency.length - 1))
      }
      filterObj.customOption = {
        config: {
          periodOptions: [
            {
              label: 'Day(s)',
              value: 'D'
            },
            {
              label: 'Week(s)',
              value: 'W'
            },
            {
              label: 'Month(s)',
              value: 'M'
            }
          ]  
        },
        value: {
          recency: {
            enabled: filter.recency ? true : false,
            period: filter.recency && recencyPeriod ? recencyPeriod : null,
            value: filter.recency && recencyValue ? recencyValue : null
          },
          start: {
            enabled: filter.from ? true : false,
            inclusive: filter.from && filter.from.type === 'inclusive' ? true : false,
            timestamp: filter.from && filter.from.value ? filter.from.value : null
          },
          end: {
            enabled: filter.to ? true : false,
            inclusive: filter.to && filter.to.type === 'inclusive' ? true : false,
            timestamp: filter.to && filter.to.value ? filter.to.value : null,
          } 
        }
      }
      break;
    case 'binary':
      break;
    default:
      break;
  }
}

let makeFilterOptions = (filterObj, attribute) => {
  switch (attribute.type) {
    case 'array':
      filterObj.options = [
        defaultOption,
        includeIfPresentOption
      ]
    case 'string':
      filterObj.options = [
        defaultOption,
        includeIfPresentOption,
        customOption
      ]
      break;
    case 'long':
    case 'double':
      filterObj.options = [
        defaultOption,
        includeIfPresentOption,
        customOption
      ]
      break;
    case 'boolean':
      filterObj.options = [
        defaultOption,
        includeIfPresentOption,
        customOption
      ]
      break;
    case 'timestamptz':
      filterObj.options = [
        defaultOption,
        includeIfPresentOption,
        customOption
      ]
      break;
    case 'binary':
      filterObj.options = [
        defaultOption
      ]
      break;
    default:
      break;
  }
}

export {
  makeSummaryFilterGroup
}