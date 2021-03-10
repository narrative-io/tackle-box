import LimitedItems from '../data/LimitedItems'

const IncludeExcludeCustomText = {
	name: "includeExclude",
	type: "stringLimited",
	title: "Include/Exclude with Custom Text",
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
			items: LimitedItems,
			text: {
				include: 'Select the companies you want to buy from.',
				exclude: 'Select the companies you don’t want to buy from.'
			}
		},
		value: {
			listType: 'include', 
			items: [LimitedItems[0]]
		}	
	}
}

export default IncludeExcludeCustomText