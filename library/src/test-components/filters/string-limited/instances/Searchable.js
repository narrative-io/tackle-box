import LimitedItems from '../data/LimitedItems'

const Searchable = {
	name: "single",
	type: "stringLimited",
	title: "Searchable",
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
			selectLabel: 'Test Label',
			multiple: true,
			searchable: true,
			items: LimitedItems
		},
		value: {
			items: [LimitedItems[0]]
		}	
	}
}

export default Searchable