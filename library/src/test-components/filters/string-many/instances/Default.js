import Columns from '../data/Columns'
import Items from '../data/Items'

const Default = {
	name: "stringMany",
	type: "stringMany",
	title: "Default",
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
			entryType: 'list',
			items: Items[0],
			manualEntry: 'stuff'
		}
	}
}

export default Default