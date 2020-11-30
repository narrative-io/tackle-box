export const testSortOptions = [
  {
    label: 'Alphabetic [A-z]',
    itemProp: 'name',
    propType: 'String',
    order: 'ascending'
  },
  {
    label: 'Alphabetic [Z-A]',
    itemProp: 'name',
    propType: 'String',
    order: 'descending'
  },
  {
    label: 'Date [newest - oldest]',
    itemProp: 'expires',
    propType: 'Date',
    order: 'asscending'
  },
  {
    label: 'Date [oldest - newest]',
    itemProp: 'expires',
    propType: 'Date',
    order: 'descending'
  }
]