const Default = { 
	name: "age",
	type: "number",
	title: "Number Default",
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
	]
}

const CustomMinOnly = { 
	name: "age",
	type: "number",
	title: "Number Custom Min Only",
	description: "Number",
	value: 'custom',
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
		value: [5, null]
	}
}

const CustomMaxOnly = { 
	name: "age",
	type: "number",
	title: "Number Custom Max Only",
	description: "Number",
	value: 'custom',
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
		value: [null, 5]
	}
}

const CustomMinMax = { 
	name: "age",
	type: "number",
	title: "Number Custom Min and Max",
	description: "Number",
	value: 'custom',
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
		value: [3, 5]
	}
}

export default [
  Default,
  CustomMinOnly,
  CustomMaxOnly,
  CustomMinMax
]