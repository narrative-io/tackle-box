export const testSortOptions = [
  {
    label: 'Alphabetic [A-Z]',
    value: {
			itemProp: 'name',
			propType: 'String',
			order: 'ascending'
		}	
  },
  {
		label: 'Alphabetic [Z-A]',
		value: {
			itemProp: 'name',
			propType: 'String',
			order: 'descending'
		}	
  },
  {
		label: 'Date [newest - oldest]',
		value: {
			itemProp: 'expires',
			propType: 'Date',
			order: 'asscending'
		}	
  },
  {
		label: 'Date [oldest - newest]',
		value: {
			itemProp: 'expires',
			propType: 'Date',
			order: 'descending'
		}
	}
]