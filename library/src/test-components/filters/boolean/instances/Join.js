const Default = { 
	name: "boolean",
	type: "boolean",
	title: "Default with Join",
	description: "Default description",
	value: 'default',
	options: [
			{
			label: `Inlcude all values`,
			value: 'default',
		},
		{
			label: "Include if present",
			value: 'ifPresent',
		},
		{
			label: 'Custom',
			value: 'custom',
		},
		{
			label: 'Join dataset',
			value: 'join'
		}
	],
	customOption: {
		value: false
	},
	joinOption: {	
		config: {
			datasets: [
				{
					name: 'dataset1',
					id: 1
				},
				{
					name: 'dataset2',
					id: 2
				}
			]
		},
		value: {
			joinType: 'include',
			selectedDataset: null
		}
	}
}

export default Default