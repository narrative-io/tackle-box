const GeometryJoin = {
	name: "stringMany",
	type: "stringMany",
	title: "Geometry join",
	description: "Test description 2",
	value: "join",
	options: [
		{
			label: `Optional Attribute`,
			value: 'default',
		},
		{
			label: "Required Attribute",
			value: 'ifPresent',
		},
		{
			label: 'Custom',
			value: 'custom',
		},
    {
      label: 'Join Dataset',
      value: 'join',
    }
	],
  joinOption: {
    config: {
      datasets: [{
        id: 1,
        name: 'Joined Dataset',
        format: 'geometry'
      }],
      targetAttribute: null,
      field: null
    },
    value: {
      selectedDataset: 1,
      geometryType: 'Contains'
    }
  }
}

const NonGeometryJoin = {
	name: "stringMany",
	type: "stringMany",
	title: "Non-geometry join",
	description: "Test description 2",
	value: "join",
	options: [
		{
			label: `Optional Attribute`,
			value: 'default',
		},
		{
			label: "Required Attribute",
			value: 'ifPresent',
		},
		{
			label: 'Custom',
			value: 'custom',
		},
    {
      label: 'Join Dataset',
      value: 'join',
    }
	],
  joinOption: {
    config: {
      datasets: [{
        id: 1,
        name: 'Joined Dataset',
      }],
      targetAttribute: null,
      field: null
    },
    value: {
      joinType: 'include',
      selectedDataset: 1
    }
  }
}

export default [
  GeometryJoin,
  NonGeometryJoin
]