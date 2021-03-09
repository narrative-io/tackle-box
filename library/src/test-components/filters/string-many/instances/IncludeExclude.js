import Columns from '../data/Columns'
import Items from '../data/Items'

const IncludeExclude = {
	name: "stringMany",
	type: "stringMany",
	title: "Include Exclude",
	description: "Test description 2",
	value: "default",
	options: [
		{
			label: `All Resource IDs`,
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
			list: {
				columns: Columns,
				items: Items,
				searchableProps: ['name']
			}
		},
		value: {
			listType: 'include',
			entryType: 'list',
			items: [],
			manualEntry: 'stuff'
		}
	}
}

export default IncludeExclude