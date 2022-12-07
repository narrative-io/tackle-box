import axios from 'axios'

let getForecast = async (payload, forecastType, openApiBaseUrl, requestHeaders) => {
  const endTime = Number(new Date()) + 6000000 // 60 minute timeout
  const result = await fetchForecast(payload, forecastType, endTime, openApiBaseUrl, requestHeaders)
  return result
}

let timeout = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let fetchForecast = async (payload, endpoint, endTime, openApiBaseUrl, requestHeaders) => {
  try {
    let response
    if (payload.details) {
      response = await axios.post(`${openApiBaseUrl}/data-shops/subscriptions/${endpoint}`, payload, requestHeaders)			
    } else {
      response = await axios.get(`${openApiBaseUrl}/data-shops/subscriptions/${endpoint}/${payload.id}`, requestHeaders)
    }
    if (Number(new Date()) < endTime && response && (response.data === null || (response.status === 404))) { // TODO remove once 404 issue is fixed
      await timeout(1000)
      return await fetchForecast({ id: payload.id }, endpoint, endTime, openApiBaseUrl, requestHeaders)
    } else if (!response || !response.data) {
      return Promise.resolve({
        state: 'failed'
      })
    } else if (response.data.state === 'completed' || response.data.state === 'failed') {
      return Promise.resolve(response.data)
    } else {
      if (Number(new Date()) < endTime && (response.data.state == 'pending' || response.data.state === 'running')) {
        await timeout(1000)
        return await fetchForecast({ id: response.data.id }, endpoint, endTime, openApiBaseUrl, requestHeaders)
      } else {
        return Promise.resolve({
          state: 'failed'
        })
      }
    }
  } catch {
    return Promise.resolve({
      state: 'failed'
    })
  }
}

export {
  getForecast
}