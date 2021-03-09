import LimitedItems from '../data/LimitedItems'

const Multiple = {
	name: "multiple",
	type: "stringLimited",
	title: "Multiple",
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
			multiple: true,
			items: LimitedItems
		},
		value: [{ 
			value: 'US',
			label: 'US'
		}]
	}
}

export default Multiple