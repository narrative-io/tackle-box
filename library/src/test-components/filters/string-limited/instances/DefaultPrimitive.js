import LimitedItemsPrimitive from '../data/LimitedItemsPrimitive'

const DefaultPrimitive = {
	name: "single",
	type: "stringLimited",
	title: "Default Primitive",
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
			items: LimitedItemsPrimitive
		},
		value: {
			items: [LimitedItemsPrimitive[0]]
		}	
	}
}

export default DefaultPrimitive