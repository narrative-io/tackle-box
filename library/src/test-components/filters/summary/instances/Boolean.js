const Boolean = { 
	name: "boolean",
	type: "boolean",
	title: "Boolean Default",
	description: "Default description",
	value: 'default',
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
	customOption: {
		value: ''
	}
}

const BooleanRequired = { 
	name: "boolean",
	type: "boolean",
	title: "Boolean Required",
	description: "Default description",
	value: 'ifPresent',
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
	customOption: {
		value: ''
	}
}

const BooleanCustom = { 
	name: "boolean",
	type: "boolean",
	title: "Boolean Custom",
	description: "Default description",
	value: 'custom',
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
	customOption: {
		value: false
	}
}

export default [
  Boolean,
  BooleanRequired,
  BooleanCustom
]