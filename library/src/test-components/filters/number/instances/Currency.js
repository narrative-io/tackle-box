const Default = { 
	name: "age",
	type: "number",
	title: "Currency",
	description: "Number",
	value: 'default',
	options: [
			{
			label: `Include all ages 13 and up`,
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
	customOption: {
		config: {
			min: 10,
			max: 100,
			currency: true
		},
		value: 20
	}
}

export default Default 