import { getJoinOptionsByPath, replacePropertyRefs } from '../attributeModule.js'

let attributes

let deepCopy = (val) => JSON.parse(JSON.stringify(val))

let findAttributeById = (attributeId) => {
  return attributes.find(attribute => attribute.id === attributeId)
}

const allAttributes = [
	{
		id: 0,
		name: "unique_id",
		type: "object",
		filterable: true,
		properties: {
			context: {
				type: 'string'
			},
			value: {
				type: 'string',
				is_join_key: true

			},
			id: {
				type: 'string'
			} 
		}
	},
	{
		id: 1,
		name: "identifier_relation",
		type: "object",
		properties: {
			ids: {
				type: "array",
				items: {
					$ref: 0
				}
			},
			relation: {
				type: 'string'
			}
		}
	},
	{
		id: 2,
		name: 'something_else',
		type: 'string',
	}
]

const datasets = [
	{
		id: 0,
		name: 'Dataset 1',
		mappings: [
			{
				attribute_id: 0,
				dataset_id: 0,
				mapping: {
					type: "object_mapping",
					property_mappings: [
						{
							path: "value"
						}
					]
				},
				status: "active"
			}
		]
	},
	{
		id: 1,
		name: 'Dataset 1',
		mappings: [
			{
				attribute_id: 99,
				dataset_id: 1,
				mapping: {
					type: "object_mapping",
					property_mappings: [
						{
							path: "somethingIrrelevant",
							expression: "foo"
						}
					]
				},
				status: "active"
			}
		]
	},
	{
		id: 2,
		name: 'Dataset 2',
		mappings: [
			{
				attribute_id: 99,
				dataset_id: 2,
				mapping: {
					type: "object_mapping",
					property_mappings: [
						{
							path: "somethingIrrelevant"
						}
					]
				},
				status: "active"
			},
			{
				attribute_id: 0,
				dataset_id: 2,
				mapping: {
					type: "object_mapping",
					property_mappings: [
						{
							path: "value"
						}
					]
				},
				status: "active"
			}
		]
	},
	{
		id: 3,
		name: 'Dataset 3',
		mappings: []
	}
]

describe("getJoinableDatasets", function() {
  beforeEach(function() {
    attributes = deepCopy(allAttributes).map(attribute => replacePropertyRefs(attribute, allAttributes))
  });
  it("For primitive child of object, no refs", function() {
		const targetPath = [
			{
				id: 0
			},
			'value'
		]
		const actual = getJoinOptionsByPath(targetPath, findAttributeById(0), datasets)
		const expected = {
			attributeId: 0,
			field: 'unique_id.value',
			datasets: [
				datasets.find(dataset => dataset.id === 0),
				datasets.find(dataset => dataset.id === 2)
			]
		}
    expect(actual).toEqual(expected)
	})
	it("For array with is_join_key", function() {
		const targetPath = [
			{
				id: 1
			},
			'ids'
		]
		const actual = getJoinOptionsByPath(targetPath, findAttributeById(1), datasets)
		const expected = null
    expect(actual).toEqual(expected)
	})
	it("For array with is_join_key, child with is_join_key", function() {
		const targetPath = [
			{
				id: 1
			},
			'ids',
			'items',
			'value'
		]
		const actual = getJoinOptionsByPath(targetPath, findAttributeById(1), datasets)
		const expected = {
			attributeId: 0,
			field: 'unique_id.value',
			datasets: [
				datasets.find(dataset => dataset.id === 0),
				datasets.find(dataset => dataset.id === 2)
			],
			parentAttribute: {
				attributeId: 1,
				path: 'identifier_relation.ids'
			}
		}
    expect(actual).toEqual(expected)
	})
	it("For array with is_join_key, child! !is_join_key", function() {
		const targetPath = [
			{
				id: 1
			},
			'ids',
			'items',
			'context'
		]
		const actual = getJoinOptionsByPath(targetPath, findAttributeById(1), datasets)
		const expected = null
    expect(actual).toEqual(expected)
	})
})