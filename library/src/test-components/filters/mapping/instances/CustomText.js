import LimitedItems from '../data/LimitedItems'

const CustomText = {
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
				selectLabel: 'Custom Label',
				items: LimitedItems
			},
			value: []
		},
		right: {
			config: {
				selectLabel: 'Custom Label',
				items: LimitedItems
			},
			value: []
		},
		mapping: {
			label: "custom text",
			value: false
		}
	}
}

export default CustomText