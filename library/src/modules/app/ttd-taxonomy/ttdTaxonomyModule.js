import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'

const RateTypeToItemKeyMapping = {
  "Partner": "partnerRateCard",
  "Advertiser": "advertiserRateCard",
  "System": "systemRateCard"
}

const PathDelimiter = "nioChild>"

let attachFullPathsToTaxonomy = async (taxonomy) => {
  try {
    taxonomy.forEach(item => {
      if (!item.fullPath) {
        const fullPath = computeItemFullPath(item, taxonomy)
        if (!fullPath) {
          throw new Error(`Could not compute full path for item with provider_element_id = ${item.id}`)
        }
        item.fullPath = fullPath
      }
    })
  } catch (e) {
    return Promise.reject(e)
  } 
}

let computeItemFullPath = (item, taxonomy, path = '',) => {
  if (item.parentElementId === 'ROOT') {
    return path.length > 0 ? `${item.displayName}${PathDelimiter}${path}` : item.displayName
  } else {
    path = path.length > 0 ? `${item.displayName}${PathDelimiter}${path}` : item.displayName
    const parentElement = taxonomy.find(currItem => currItem.id === item.parentElementId)
    if (!parentElement) {
      return undefined
    } else {
      return computeItemFullPath(parentElement, taxonomy, path)
    }
  }
}

let replaceIdsWithUUIDs = (taxonomy) => {
  const uuidMappings = {}
  taxonomy.forEach(item => {
    if (uuidMappings[item.id]) {
      item.id = uuidMappings[item.id]
    } else {
      const newUUID = uuidv4()
      uuidMappings[item.id] = newUUID
      item.id = newUUID
    }
    if (item.parentElementId && item.parentElementId !== 'ROOT') {
      if (uuidMappings[item.parentElementId]) {
        item.parentElementId = uuidMappings[item.parentElementId]
      } else {
        const newUUID = uuidv4()
        uuidMappings[item.parentElementId] = newUUID
        item.parentElementId = newUUID
      }    
    }
  })
}

let getExistingTTDTaxonomy = async (headers, baseUrl, companyId) => {
  let taxonomyData, taxonomyRateDetails
  try {
    taxonomyData = await fetchTaxonomy(headers, baseUrl)
    if (!taxonomyData || taxonomyData.length === 0) {
      return Promise.resolve(undefined)
    }
  } catch (e) {
    return Promise.resolve(undefined)
  }  
  try {
    taxonomyRateDetails = await fetchTaxonomyRateDetails(taxonomyData, headers, baseUrl)
  } catch (error) {
    return Promise.reject({
      type: 'existingTaxonomy',
      messages: [error]
    })
  }
  if (taxonomyRateDetails) {
    try {
      attachRateCardsToTaxonomy(taxonomyData, taxonomyRateDetails)
    } catch (error) {
      return Promise.reject({
        type: 'existingTaxonomy',
        messages: [error]
      })
    }
  }
  let convertedTaxonomy = taxonomyData.map(item => {
    return {
      id: item.provider_element_id,
      companyId: companyId,
      parentElementId: item.parent_element_id,
      buyable: item.buyable,
      displayName: item.display_name,
      description: item.description,
      effectivePrice: null, // TODO
      fullPath: null,
      audience_size: null,
      receivedIdsCount: item.received_ids_count,
      activeIdsCount: item.active_ids_count,
      activeIdsCountExpanded: item.active_ids_count_expanded,
      dataStreamId: item.nio_data_stream_id,
      isContainer: itemIsContainer(item, taxonomyData),
      synced: true,
      hasChanged: false
    }
  })
  try {
    attachFullPathsToTaxonomy(convertedTaxonomy)
  } catch (error) {
    return Promise.reject({
      type: 'existingTaxonomy',
      messages: [error]
    })
  }
  replaceIdsWithUUIDs(convertedTaxonomy)
  return Promise.resolve(convertedTaxonomy.sort((a,b) => a.fullPath.localeCompare(b.fullPath)))
}

let fetchTaxonomy = async (headers, baseUrl) => {
  try {
    const resp = await axios.get(`${baseUrl}/taxonomy`, headers)
    if (resp.status === 200 && resp.data && resp.data.length > 0) {
      return Promise.resolve(resp.data)
    } 
    return Promise.reject(resp)
  } catch (error) {
    console.log(error)
    return Promise.reject(error)
  }
}

let fetchTaxonomyRateDetails = async (taxonomyData, headers, baseUrl) => {
  try {
    const body = {
      rate_level: "Partner",
      provider_element_ids: taxonomyData.map(item => item.provider_element_id),
      include_inherited_rates: false,
      page_start_index: 0,
      page_size: 1000 // TODO either paginate or fetch all
    }
    const resp = await axios.post(`${baseUrl}/data-rates/query`, body, headers)
    if (resp.status === 200 && resp.data?.result?.length > 0) {
      return Promise.resolve(resp.data.result)
    } 
    return Promise.resolve([])
  } catch(error) {
    console.log(error)
    return Promise.reject(error)
  }
}

let attachRateCardsToTaxonomy = (taxonomyData, taxonomyRateDetails) => {
  try {
    taxonomyRateDetails.forEach(rateDetail => {
      const taxonomyItem = taxonomyData.find(item => item.provider_element_id === rateDetail.provider_element_id)
      if (!taxonomyItem) {
        throw new Error(`Could not find taxonomy item with provider_element_id = ${rateDetail.provider_element_id}`)
      }
      if (taxonomyItem[RateTypeToItemKeyMapping[rateDetail.rate_level]]) {
        if (rateDetail.rate_level === 'Partner') {
          taxonomyItem[RateTypeToItemKeyMapping[rateDetail.rate_level]].ids.push(rateDetail.partnerId)
        } else if (rateDetail.rate_level === 'Advertiser') {
          taxonomyItem[RateTypeToItemKeyMapping[rateDetail.rate_level]].ids.push(rateDetail.advertiserId)
        }
      } else {
        taxonomyItem[RateTypeToItemKeyMapping[rateDetail.rate_level]] = {
          revenueShare: rateDetail.percent_of_media_cost_rate * 100,
          cpmCap: rateDetail.cpm_rate.amount
        }
        if (rateDetail.rate_level === 'Partner') {
          taxonomyItem[RateTypeToItemKeyMapping[rateDetail.rate_level]].ids = [rateDetail.partnerId]
        } else if (rateDetail.rate_level === 'Advertiser') {
          taxonomyItem[RateTypeToItemKeyMapping[rateDetail.rate_level]].ids = [rateDetail.advertiserId]
        }
      }
    })
    return Promise.resolve()
  } catch (error) {
    return Promise.reject(error)
  }
}

let fullPathText = (fullText) => {
  var regex = new RegExp(PathDelimiter, "g")
  return fullText.replace(regex, " > ")
}

let itemIsContainer = (item) => {
  return !item.buyable
}

export {
  getExistingTTDTaxonomy,
  attachFullPathsToTaxonomy,
  attachRateCardsToTaxonomy,
  computeItemFullPath,
  replaceIdsWithUUIDs,
  fullPathText,
  itemIsContainer, 
  RateTypeToItemKeyMapping,
}