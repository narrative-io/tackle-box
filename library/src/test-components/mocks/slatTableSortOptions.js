export const testSortOptions = [
  {
    label: 'Alphabetic [A-Z]',
    value: {
			itemProp: 'orderName',
			propType: 'String',
			order: 'ascending'
		}	
  },
  {
		label: 'Alphabetic [Z-A]',
		value: {
			itemProp: 'orderName',
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
	},
	{
		label: 'Order number (lowest first)',
		value: {
			itemProp: 'orderNumber',
			propType: 'Number',
			order: 'asscending'
		}	
  },
  {
		label: 'Order number (highest first)',
		value: {
			itemProp: 'orderNumber',
			propType: 'Number',
			order: 'descending'
		}
	}
]