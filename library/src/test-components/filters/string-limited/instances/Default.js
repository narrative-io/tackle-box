import LimitedItems from '../data/LimitedItems'

const Single = {
  name: "single",
  type: "stringLimited",
  title: "Default",
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
		// loading: true,
    config: {
      items: LimitedItems
    },
    value: {
      items: [LimitedItems[0]]
    }	
  },
  tooltip: {
    heading: "Tooltip with no link",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
}

export default Single