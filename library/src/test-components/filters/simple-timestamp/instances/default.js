const Default = {
	name: "filter2",
	type: "simpleTimestamp",
	title: "Default",
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
			startMin: "2021-01-01",
			startMax: "2021-03-30",
			stopMin: "2021-02-30",
			stopMax: "2021-12-30"
		},
		value: {
			recency: {
				enabled: false,
				period: null,
				value: null
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
	},
	valid: true
}

export default Default