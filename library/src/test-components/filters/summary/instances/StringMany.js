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
			manualEntry: [
        'value 1',
        'value 2',
        'value 3'
      ]
		}
	}
}

export default [
  Default,
  CustomSingleEntry,
  CustomMultipleEntry
]