import { getJoinableDatasets, replacePropertyRefs } from '../attributeModule.js'

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
		type: "array",
		items: {
			type: 'object',
			properties: {
				ids: {
					$ref: 0
				},
				relation: {
					type: 'string'
				}
			}
		}
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
							path: "value",
							expression: "foo"
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
		name: 'Dataset 1',
		mappings: [
			{
				attribute_id: 99,
				dataset_id: 2,
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
			},
			{
				attribute_id: 0,
				dataset_id: 2,
				mapping: {
					type: "object_mapping",
					property_mappings: [
						{
							path: "value",
							expression: "foo"
						}
					]
				},
				status: "active"
			}
		]
	},
	{
		id: 3,
		name: 'Dataset 1',
		mappings: []
	}
]

describe("getJoinableDatasets", function() {
  beforeEach(function() {
    attributes = deepCopy(allAttributes).map(attribute => replacePropertyRefs(attribute, allAttributes))
  });
  it("For primitive child of object, no refs", function() {
		const actual = getJoinableDatasets(findAttributeById(0))
		const expected = [
			datasets.find(dataset => dataset.id === 0),
			datasets.find(dataset => dataset.id === 2)
		]
    expect(actual).toEqual(expected)
	})
})