import LimitedItems from '../data/LimitedItems'

const Default = {
	name: "single",
	type: "mapping",
	title: "Default",
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
		left: {
			config: {
				items: LimitedItems
			},
			value: []
		},
		right: {
			config: {
				items: LimitedItems
			},
			value: []
		},
		mapping: {
			value: false
		}
	}
}

export default Default