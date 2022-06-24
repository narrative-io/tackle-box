const BinaryGeometryJoin = { 
	name: "Binary Geometry with Join Option",
	type: "binary",
	title: "Binary Geometry with Join Option",
	description: "Default description",
	value: 'default',
	options: [
			{
			label: `Include all values`,
			value: 'default',
		},
		{
			label: "Include if present",
			value: 'ifPresent',
		},
    {
			label: 'Join dataset',
			value: 'join'
		}
	],
  joinOption: {	
		config: {
			datasets: [
				{
					name: 'dataset1',
					id: 4,
          format: 'geometry'
				},
				{
					name: 'dataset2',
					id: 6,
          format: 'geometry'
				}
			]
		},
		value: {
			joinType: 'include',
			selectedDataset: null,
      geometryType: 'Intersects'
		}
	}
}

export default BinaryGeometryJoin