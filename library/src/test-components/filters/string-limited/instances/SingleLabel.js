import LimitedItems from '../data/LimitedItems'

const Single = {
	name: "singleLabel",
	type: "stringLimited",
	title: "Single with Label",
	description: "Description",
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
			selectLabel: "Custom label:",
			items: LimitedItems
		},
		value: [{ 
			value: 'US',
			label: 'US'
		}]
	}
}

export default Single