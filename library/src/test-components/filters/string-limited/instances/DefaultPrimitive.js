import LimitedItemsPrimitive from '../data/LimitedItemsPrimitive'

const DefaultPrimitive = {
  name: "single",
  type: "stringLimited",
  title: "Default Primitive",
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
      items: LimitedItemsPrimitive
    },
    value: {
      items: [LimitedItemsPrimitive[0]]
    }	
  },
  tooltip: {
    message: "Tooltip with just a message. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
}

export default DefaultPrimitive