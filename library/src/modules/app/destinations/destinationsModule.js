
let makeDestinationOptions = (openApi) => {
		return new Promise((resolve, reject) => {
			const narrativeDownload = [{
				index: 0,
				name: 'Narrative Download',
				icon: 'https://cdn.narrative.io/data-studio/images/narrative-placeholder-primary.svg',
				selected: true
			}]
			
			openApi.get(`installations?app_category=destination_connector`).then(resp => {
				const connectorInstallations = resp.data.records
				Promise.all(connectorInstallations.map((installation, index) => this.makeDestinationConnectorSettings(installation, openApi, index + 1))).then(settings => {
					resolve([...narrativeDownload, ...settings.filter(setting => setting !== null)])
				})
			})
			.catch(err => {
				// Notify user that something went wrong...
			})
		})
	}

  let makeDestinationConnectorSettings = (installation, openApi, index) => {
		return new Promise((resolve, reject) => {
			Promise.all([
				openApi.get(`apps`), 
				openApi.get(`installations/${installation.id}/profiles`, reqHeaders)
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
						// icon: [].find(localApp => localApp.id === installation.app_id).icons[0],
						icon: null,
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