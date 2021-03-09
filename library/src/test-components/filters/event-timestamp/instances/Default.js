const Default = {
	name: "filter2",
	type: "eventTimestamp",
	title: "Default",
	description: "Define the timestamps you want included in your subscription.",
	text: {
		dateRange: {
			heading: "Date Range",
			description: "Pick a start and end date of event timestamps to include."
		},
		rollingLookback: {
			heading: "Rolling Lookback",
			description: "From your start date, define how far back in time you'd like to include."
		}
	},
	value: {
		dateRange: "default",
		rollingLookback: "default"
	},
	customOption: {
		dateRange: {			
			config: {
				startMin: "2021-01-01",
				startMax: "2021-03-30",
				stopMin: "2021-02-30",
				stopMax: "2021-12-30"
			},
			value: ["2021-02-24", "2021-03-21"]
		},
		rollingLookback: {
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
		}
	},
	valid: true
}

export default Default