const Default = {
	name: "filter2",
	type: "simpleTimestamp",
	title: "Simple Timestamp Default",
	description: "Define the timestamps you want included in your subscription.",
	text: {
		heading: "Date Range",
		description: "Pick a start and end date of event timestamps to include."
	},
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
		}
	],
	value: "default",
	customOption: {
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
					value: 'month'
				}
			]  
		},
		value: {
			recency: {
				enabled: false,
				period: 'day',
				value: 30
			},
			start: {
				enabled: true,
				timestamp: "2021-02-24",
			},
			end: {
				enabled: true,
				timestamp: "2021-03-21"
			} 
		}
	}
}

const Custom = {
	name: "filter2",
	type: "simpleTimestamp",
	title: "Simple Timestamp Custom",
	description: "Define the timestamps you want included in your subscription.",
	text: {
		heading: "Date Range",
		description: "Pick a start and end date of event timestamps to include."
	},
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
		}
	],
	value: "custom",
	customOption: {
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
					value: 'month'
				}
			]  
		},
		value: {
			recency: {
				enabled: false,
				period: 'day',
				value: 30
			},
			start: {
				enabled: true,
				timestamp: "2021-02-24",
			},
			end: {
				enabled: true,
				timestamp: "2021-03-21"
			} 
		}
	}
}

export default [
  Default,
  Custom
]