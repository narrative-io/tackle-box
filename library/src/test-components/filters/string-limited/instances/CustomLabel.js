import LimitedItems from '../data/LimitedItems'

const CustomLabel = {
	name: "singleLabel",
	type: "stringLimited",
	title: "Single with Label",
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
			selectLabel: "Custom label:",
			items: LimitedItems
		},
		value: {
			items: [LimitedItems[0]]
		}	
	},
	tooltip: {
		heading: "Tooltip heading",
		message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		linkText: "More Info",
		linkHref: "http://www.google.com"
	}
}

export default CustomLabel