import LimitedItems from '../../string-limited/data/LimitedItems'

const Default = {
  name: "single",
  type: "stringLimited",
  title: "String Limited Default",
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
      items: LimitedItems
    },
    value: {
      items: [LimitedItems[0]]
    }	
  }
}

const CustomSingle = {
  name: "single",
  type: "stringLimited",
  title: "String Limited Custom Single Selection",
  description: "Description",
	value: "custom",
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
      items: LimitedItems
    },
    value: {
      items: [LimitedItems[0]]
    }	
  }
}

const CustomMultiple = {
  name: "single",
  type: "stringLimited",
  title: "String Limited Custom Multiple Selection",
  description: "Description",
	value: "custom",
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
      items: LimitedItems
    },
    value: {
      items: [LimitedItems[0], LimitedItems[1]]
    }	
  }
}

export default [
  Default,
  CustomSingle,
  CustomMultiple
]