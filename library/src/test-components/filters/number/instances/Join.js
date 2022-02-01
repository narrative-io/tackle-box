const Default = {
	name: "deduplication",
	type: "frequency",
	title: "Default with Join",
	description: "Description",
	value: "default",
	options: [
		{
			label: `Inlclude all Data Points`,
			value: 'default',
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
		heading: 'Deduplication Strategy',
		description: 'Exclude irrelevant or redundant data even when you buy from multiple suppliers.',
		config: {
			periodOptions: [
				{
					label: 'Days',
					value: 'day'
				},
				{
					label: 'Weeks',
					value: 'week'
				},
				{
					label: 'Months',
					value: 'months'
				}
			]  
		},		
		value: [15, {
			label: 'Days',
			value: 'day'
		}]
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