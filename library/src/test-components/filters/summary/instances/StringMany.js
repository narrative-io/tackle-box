const Default = {
	name: "stringMany",
	type: "stringMany",
	title: "String Many Default",
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
			manualEntryOnly: true
		},
		value: {
			manualEntry: null
		}
	}
}

const CustomSingleEntry = {
	name: "stringMany",
	type: "stringMany",
	title: "String Many Single Entry",
	description: "Test description 2",
	value: "custom",
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
			manualEntryOnly: true
		},
		value: {
      listType: 'include',
			manualEntry: ['value 1']
		}
	}
}


const CustomMultipleEntry = {
	name: "stringMany",
	type: "stringMany",
	title: "String Many Multiple Entry",
	description: "Test description 2",
	value: "custom",
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
			manualEntryOnly: true
		},
		value: {
      listType: 'exclude',
			manualEntry: [
        'value 1',
        'value 2',
        'value 3',
        'value 4',
        'value 5',
        'value 6',
        'value 7',
        'value 8',
        'value 9',
        'value 10',
        'value 11',
        'value 12'
      ]
		}
	}
}

export default [
  Default,
  CustomSingleEntry,
  CustomMultipleEntry
]