import Columns from '../data/Columns'
import Items from '../data/Items'

const Default = {
	name: "stringMany",
	type: "stringMany",
	title: "Default with Join",
	description: "Default with Join",
	value: "default",
	options: [
		{
			label: `All Resource IDs`,
			value: 'default'
		},
		{
			label: "Include if present",
			value: 'ifPresent'
		},
		{
			label: 'Custom',
			value: 'custom'
		},
		{
			label: 'Join dataset',
			value: 'join'
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
			datasets: [
				{
					name: 'dataset1',
					id: 1
				},
				{
					name: 'dataset2',
					id: 2
				}
			]
		},
		value: {
			joinType: 'include',
			selectedDataset: null
		}
	}
}

export default Default