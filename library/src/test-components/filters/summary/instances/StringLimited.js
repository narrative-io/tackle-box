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
  ]
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
      searchable: true,
      multiple: true,
      items: LimitedItems
    },
    value: {
      items: ['value 1']
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
      searchable: true,
      multiple: true,
      items: LimitedItems
    },
    value: {
      items: [
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
  CustomSingle,
  CustomMultiple
]