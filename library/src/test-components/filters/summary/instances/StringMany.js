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
	]
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
        '',
        'value 1 sdf',
        'value 2 sdf',
        'value 3 sdf',
        'value 4 sdf',
        'value 5 sdf',
        'value 6 sdf',
        'value 7 sdf',
        'value 8 sdf',
        'value 9 sdf',
        'value 1 sdf0',
        'value 1 sdf1',
        'value 1 sdf2',
        'value 1 sdf',
        'value 2 sdf',
        'value 3 sdf',
        'value 4 sdf',
        'value 5 sdf',
        'value 6 sdf',
        'value 7 sdf',
        'value asd 8 ',
        'value asd 9',
        'value asd 10',
        'value asd 11',
        'value asd 12',
        'value asd 1',
        'value asd 2',
        'value asd 3',
        'value asd 4',
        'value asd 5',
        'value asd 6',
        'value asd 7',
        'value asd 8',
        'value asd 9',
        'value asd 10',
        'value asd 11',
        'value asd 12'
      ]
		}
	}
}

export default [
  Default,
  CustomSingleEntry,
  CustomMultipleEntry
]