import axios from 'axios'
import localApps from './localApps'

let makeDestinationOptions = (openApiBaseUrl, requestHeaders) => {
	return new Promise((resolve, reject) => {
		const narrativeDownload = [{
			index: 0,
			name: 'Narrative Download',
			icon: 'https://cdn.narrative.io/data-studio/images/narrative-placeholder-primary.svg',
			selected: true
		}]
	
		axios.get(`${openApiBaseUrl}/installations?app_category=destination_connector`, requestHeaders).then(resp => {
			const connectorInstallations = resp.data.records
			Promise.all(connectorInstallations.map((installation, index) => makeDestinationConnectorSettings(installation, index + 1, openApiBaseUrl, requestHeaders))).then(settings => {
				resolve([...narrativeDownload, ...settings.filter(setting => setting !== null)])
			})
		})
		.catch(err => {
			// Notify user that something went wrong...
		})
	})
}

let makeDestinationConnectorSettings = (installation, index, openApiBaseUrl, requestHeaders) => {
	return new Promise((resolve, reject) => {
		Promise.all([
			axios.get(`${openApiBaseUrl}/apps`, requestHeaders), 
		  axios.get(`${openApiBaseUrl}/installations/${installation.id}/profiles`, requestHeaders)
		]).then(([appsResp, profilesResp]) => {
			const apps = appsResp.data.records
			const profiles = profilesResp.data.records.filter(profile => profile.status === 'enabled').map(profile => {
				return {
					...profile,
					disabled: false
				}
			})
			const manifest = apps.find(app => app.id === installation.app_id).manifest
			if (profiles.length > 0) {
				resolve({
					index: index,
					appId: installation.app_id,
					name: manifest.name,
					icon: localApps.find(localApp => localApp.id === installation.app_id).icons[0],
					profiles: profiles,
					quickSettings: manifest.tiers.find(tier => tier.id === installation.tier_id).quick_settings.map(setting => {
						return {
							...setting, 
							value: null
						}
					}),
					selected: false,
					selectedProfile: profiles[0].id,
				})
			} else {
				resolve(null)
			}
		})	
	})
}

let getSubscriptionDestinations = (subscriptionId, openApiBaseUrl, requestHeaders) => {
	const	selectedDestinations = []
	return new Promise((resolve, reject) => {
		axios.get(`${openApiBaseUrl}/destinations?subscription_id=${subscriptionId}`, requestHeaders).then(resp => {
			makeDestinationOptions(openApiBaseUrl, requestHeaders).then(destinations => {     
				selectedDestinations.push(destinations.find(destination => destination.name === 'Narrative Download'))
				resp.data.records.forEach(selectedProfile => {
					destinations.filter(destination => destination.name !== 'Narrative Download').forEach(destination => {
						const selection = destination.profiles.find(profile => profile.id === selectedProfile.profile_id)
						if (selection) {
							selectedDestinations.push({
								...destination,
								selectedProfile: selection.id
							})
						}		
					})
				})
				resolve(selectedDestinations)
			})
		})
	})
}

export {
	makeDestinationOptions,
	getSubscriptionDestinations
}