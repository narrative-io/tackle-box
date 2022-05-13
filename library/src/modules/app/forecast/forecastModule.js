let getForecast = async (params, openApi, forecastType) => {
  const endTime = Number(new Date()) + 6000000 // 60 minute timeout
  const payload = { details: params }
  const result = await fetchForecast(payload, forecastType, endTime, openApi)
  return result
}

let timeout = (ms) => {
	return new Promise(resolve => setTimeout(resolve, ms));
}

let fetchForecast = async (payload, endpoint, endTime, openApi) => {
	try {
		let response
		if (payload.details) {
			response = await openApi.post(`data-shops/subscriptions/${endpoint}`, payload)			
		} else {
			response = await openApi.get(`data-shops/subscriptions/${endpoint}/${payload.id}`)
		}
		if (Number(new Date()) < endTime && response && (response.data === null || (response.status === 404))) { // TODO remove once 404 issue is fixed
			await timeout(1000)
			return await fetchForecast({ id: payload.id }, endpoint, endTime, openApi)
		} else if (!response || !response.data) {
			return Promise.resolve({
				state: 'failed'
			})
		} else if (response.data.state === 'completed' || response.data.state === 'failed') {
			return Promise.resolve(response.data)
		} else {
			if (Number(new Date()) < endTime && (response.data.state == 'pending' || response.data.state === 'running')) {
				await timeout(1000)
				return await fetchForecast({ id: response.data.id }, endpoint, endTime, openApi)
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