const ManualEntryOnlyIncludeExclude = {
	name: "stringMany",
	type: "stringMany",
	title: "Manual Entry Only Include Exclude",
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
			listType: 'include',
			manualEntry: 'stuff'
		}
	}
}

export default ManualEntryOnlyIncludeExclude