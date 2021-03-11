import LimitedItems from '../data/LimitedItems'

const MutuallyExclusive = {
  name: "single",
  type: "mapping",
  title: "Mutually Exclusive",
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
    left: {
      config: {
        items: LimitedItems
      },
      value: []
    },
    right: {
      config: {
        items: LimitedItems
      },
      value: []
    },
    mapping: {
      mutuallyExclusive: true,
      value: false
    }
  }
}

export default MutuallyExclusive