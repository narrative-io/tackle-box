const Default = { 
	name: "boolean",
	type: "boolean",
	title: "Default",
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
		value: false
	}
}

export default Default