const Default = {
	name: "deduplication",
	type: "frequency",
	title: "Deduplication",
	description: "Detail how often you want to buy the same data point.",
	value: "default",
	options: [
		{
			label: `Inlclude all Data Points`,
			value: 'default',
		},
		{
			label: 'Custom',
			value: 'custom',
		}
	],
	customOption: {
		heading: 'Deduplication Strategy',
		description: 'Exclude irrelevant or redundant data even when you buy from multiple suppliers.',
		config: {
			periodOptions: [
				{
					label: 'Day(s)',
					value: 'D'
				},
				{
					label: 'Week(s)',
					value: 'W'
				},
				{
					label: 'Month(s)',
					value: 'M'
				}
			]  
		},
		value: [30, 'D'],
		supportingOption: {
			config: {
        text: 'Only receive a unique record once per period for the selected combination of data points',
        selectLabel: 'Data Points',
				items: [
					{
						label: "offered_product_v2 > product > brand",
						value: 1
					},
					{
						label: "offered_product_v2 > product > id",
						value: 2
					},
					{
						label: "offered_product_v2 > product > a really long property name",
						value: 3
					},
					{
						label: "offered_product_v2 > product > stuff",
						value: 4
					}
				]
			},
			value: null
		}
	}
}

export default Default