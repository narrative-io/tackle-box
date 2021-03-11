import { LeftItems, RightItems} from '../data/MappingItems'

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
        items: LeftItems
      },
      value: []
    },
    right: {
      config: {
        items: RightItems
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