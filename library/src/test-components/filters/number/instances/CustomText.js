const CustomText = { 
	name: "age",
	type: "number",
	title: "Custom Text",
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
			text: "Custom label text",
			min: 10,
			max: 100
		},
		value: 20
	}
}

export default CustomText