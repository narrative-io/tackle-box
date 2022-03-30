import LimitedItems from '../data/LimitedItems'

const Multiple = {
	name: "multiple",
	type: "stringLimited",
	title: "Multiple",
	description: "Description",
	value: "default",
	disabled: true,
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
		value: {
			items: [LimitedItems[0]]
		}	
	}
}

export default Multiple