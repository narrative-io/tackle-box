const Range = { 
	name: "age",
	type: "number",
	title: "Range",
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
			range: true,
			min: 10,
			max: 100
		},
		value: [20, 40]
	}
}

export default Range