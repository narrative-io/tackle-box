import LimitedItems from '../data/LimitedItems'
import LimitedItemsPrimitive from '../data/LimitedItemsPrimitive'

const Multiple = {
	name: "multiple",
	type: "stringLimited",
	title: "Multiple Primitive",
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
			items: LimitedItemsPrimitive
		},
		value: {
			items: [LimitedItemsPrimitive[0]]
		}	
	}
}

export default Multiple