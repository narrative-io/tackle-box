import Columns from '../data/Columns'
import Items from '../data/Items'

const Default = {
	name: "stringMany",
	type: "stringMany",
	title: "Default",
	description: "Default with Join",
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
		},
		{
			label: 'Join dataset',
			value: 'join',
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
	},
	joinOption: {
		config: {
			items: [
				{
					name: 'dataset1',
					id: 1
				},
				{
					name: 'dataset1',
					id: 2
				}
			]
		},
		value: null
	}
}

export default Default