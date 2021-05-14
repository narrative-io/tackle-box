const Unconstrained = { 
	name: "age",
	type: "number",
	title: "Unconstrained",
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
			unconstrained: true
		},
		value: [20, 40]
	}
}

export default Unconstrained