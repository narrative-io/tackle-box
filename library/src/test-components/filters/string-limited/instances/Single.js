const Single = {
	name: "single",
	type: "stringLimited",
	title: "Single",
	description: "Descscription",
	value: "default",
	options: [
		{
			label: `All filter values`,
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
			items: null
		},
		value: [{ 
			value: 'US',
			label: 'US'
		}]
	}
}

export default Single