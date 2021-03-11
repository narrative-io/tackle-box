import { LeftItems, RightItems} from '../data/MappingItems'

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
				items: LeftItems
			},
			value: []
		},
		right: {
			config: {
				items: RightItems
			},
			value: []
		},
		mapping: {
			value: false
		}
	}
}

export default Default