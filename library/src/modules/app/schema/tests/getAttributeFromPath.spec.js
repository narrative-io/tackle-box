import { replacePropertyRefs, getAttributeFromPath } from '../attributeModule.js'
import { 
  Primitive,
  ArrayItemsPrimitive,
  ObjectChildPrimitive,
  ObjectChildArray,
  ObjectChildObject,
  ArrayChildObject,
  ArrayChildArray,
  ObjectObjectSiblings,
  ObjectArraySiblings,
  ArrayArraySiblings,
  AllAttributes
} from './testAttributes.js'

let deepCopy = (val) => JSON.parse(JSON.stringify(val))

const attributes = AllAttributes.map(attribute => replacePropertyRefs(attribute, AllAttributes))

let findAttributeById = (attributeId) => {
  return attributes.find(attribute => attribute.id === attributeId)
}

let log = (arg) => {
  return JSON.stringify(arg, null, 4)
}

describe("getAttributeFromPath", function() {
  it("Parent Attribute", function() {
    const path = [{
      id: 0
    }]
    const actual = getAttributeFromPath(path, findAttributeById(Primitive.id))
    const expected = findAttributeById(Primitive.id)
    expect(actual).toEqual(expected)
  })
  
  it("Child of Object Primitive", function() {
    const path = [
      {
        id: 2
      },
      'primitive_property'
    ]
    const actual = getAttributeFromPath(path, findAttributeById(ObjectChildPrimitive.id))
    const expected = {
      ...Primitive,
      filterable: false,
      deliverable: false
    }
    expect(actual).toEqual(expected)
  })
  it("Child of Array Primitive", function() {
    const path = [
      {
        id: 1
      },
      'items',
      'primitive_property'
    ]
    const actual = getAttributeFromPath(path, findAttributeById(ArrayItemsPrimitive.id))
    const expected = {
      ...Primitive,
      filterable: false,
      deliverable: false
    }
    expect(actual).toEqual(expected)
  })
  it("Object[1] -> Object[2] -> Primitive, target Primitve ", function() {
    const path = [
      {
        id: 3
      },
      'object',
      'primitive'
    ]
    const actual = getAttributeFromPath(path, findAttributeById(ObjectChildObject.id))
    const expected = findAttributeById(Primitive.id)
    expect(actual).toEqual(expected)
  })
  it("Object[1] -> Object[2] -> Primitive, target Object[2] ", function() {
    const path = [
      {
        id: 3
      },
      'object'
    ]
    const actual = getAttributeFromPath(path, findAttributeById(ObjectChildObject.id))
    const expected = {
      type: "object",
      filterable: false,
      deliverable: false,
      properties: {
        primitive: {
          description: "description",
          display_name: "Ref Primitive",
          id: 0,
          name: "ref_primitive",
          type: "string",
          filterable: false,
          deliverable: false
        }
      }
    }
    expect(actual).toEqual(expected)
  })
  it("Object -> Array -> Primitive, target Primitive ", function() {
    const path = [
      {
        id: 4
      },
      'array',
      'items'
    ]
    const actual = getAttributeFromPath(path, findAttributeById(ObjectChildArray.id))
    const expected =  findAttributeById(Primitive.id)
    expect(actual).toEqual(expected)
  })
  it("Object -> Array -> Primitive, target Array", function() {
    const path = [
      {
        id: 4
      },
      'array'
    ]
    const actual = getAttributeFromPath(path, findAttributeById(ObjectChildArray.id))
    const expected =  {
      type: "array",
      filterable: false,
      deliverable: false,
      items: {
        description: "description",
        display_name: "Ref Primitive",
        id: 0,
        name: "ref_primitive",
        type: "string",
        filterable: false,
        deliverable: false,
      }
    }
    expect(actual).toEqual(expected)
  })
  it("Array -> Object -> Primitive, target Primitive", function() {
    const path = [
      {
        id: 5
      },
      'items',
      'primitive_property'
    ]
    const actual = getAttributeFromPath(path, findAttributeById(ArrayChildObject.id))
    const expected = findAttributeById(Primitive.id)
    expect(actual).toEqual(expected)
  })
  it("Array -> Object -> Primitive, target Object", function() {
    const path = [
      {
        id: 5
      },
      'items'
    ]
    const actual = getAttributeFromPath(path, findAttributeById(ArrayChildObject.id))
    const expected = {
      type: "object",
      filterable: false,
      deliverable: false,
      properties: {
        primitive_property: {
          description: "description",
          display_name: "Ref Primitive",
          id: 0,
          name: "ref_primitive",
          type: "string",
          filterable: false,
          deliverable: false
        }
      }
    }
    expect(actual).toEqual(expected)
  })
  it("Array[1] -> Array[2] -> Primitive, target Primitive", function() {
    const path = [
      {
        id: 6
      },
      'items',
      'items'
    ]
    const actual = getAttributeFromPath(path, findAttributeById(ArrayChildArray.id))
    const expected = findAttributeById(Primitive.id)
    expect(actual).toEqual(expected)
  })
  it("Array[1] -> Array[2] -> Primitive, target Array[2]", function() {
    const path = [
      {
        id: 6
      },
      'items'
    ]
    const actual = getAttributeFromPath(path, findAttributeById(ArrayChildArray.id))
    const expected = {
      type: "array",
      filterable: false,
      deliverable: false,
      items: {
        description: "description",
        display_name: "Ref Primitive",
        id: 0,
        name: "ref_primitive",
        type: "string",
        filterable: false,
        deliverable: false
      }
    }
    expect(actual).toEqual(expected)
  })
  it(`
      Array -> 
        Object[1] -> (
          Object[11] -> 
            Primitive[111]
          ) + (
          Object[12] -> 
            Primitive[121]
          )
        ), 
      target Primitive[111]`, function() {
    const path = [
      {
        id: 7
      },
      'items',
      'object_ref_1',
      'primitive_property'
    ]

    const parentAttribute = deepCopy(findAttributeById(ObjectObjectSiblings.id))
    parentAttribute.items.properties.object_ref_1.properties.primitive_property.index = 1 // tag the target

    const actual = getAttributeFromPath(path, parentAttribute)
    const expected = {
      description: "description",
      display_name: "Ref Primitive",
      id: 0,
      name: "ref_primitive",
      type: "string",
      filterable: false,
      deliverable: false,
      index: 1
    }
    expect(actual).toEqual(expected)
  })
  it(`
      Array -> 
        Object[1] -> (
          Object[11] -> 
            Primitive[111]
          ) + (
          Object[12] -> 
            Primitive[121]
          )
        ), 
      target Object[12]`, function() {
    
    const path = [
      {
        id: 7
      },
      'items',
      'object_ref_2',
    ]

    const parentAttribute = deepCopy(findAttributeById(ObjectObjectSiblings.id))
    parentAttribute.items.properties.object_ref_2.index = 1 // tag the target

    const actual = getAttributeFromPath(path, parentAttribute)
    const expected = {
      description: "description",
      display_name: "Object with Primitive child",
      id: 2,
      name: "ObjectChildPrimitive",
      type: "object",
      filterable: false,
      deliverable: false,
      index: 1,
      properties: {
        primitive_property: {
          description: "description",
          display_name: "Ref Primitive",
          id: 0,
          name: "ref_primitive",
          type: "string",
          filterable: false,
          deliverable: false,
        }
      }
    }
    expect(actual).toEqual(expected)
	})
	it("Array[1] -> Array[2] -> Primitive, target Array[2]", function() {
		const attribute = {
			"id": 84,
			"description": "Alex attr id test",
			"display_name": "Identifier Relation",
			"name": "identifier_relation",
			"type": "object",
			"properties": {
					"ids": {
							"type": "array",
							"items": {
									"id": 29,
									"description": "A catch-all field for any miscellaneous identifier.",
									"display_name": "Unique Identifier",
									"name": "unique_id",
									"type": "object",
									"properties": {
											"type": {
													"type": "string",
													"deliverable": false,
													"filterable": false
											},
											"value": {
													"is_join_key": true,
													"type": "string",
													"deliverable": false,
													"filterable": false
											},
											"context": {
													"type": "string",
													"deliverable": false,
													"filterable": false
											}
									},
									"required": [
											"value"
									],
									"filterable": false,
									"deliverable": false
							},
							"filterable": false,
							"deliverable": false
					},
					"relation": {
							"enum": [
									"household",
									"individual"
							],
							"type": "string",
							"deliverable": false,
							"filterable": false
					}
			},
			"required": [
					"ids"
			]
	}

    const path = [
      {
        id: 0
			},
			'ids',
			'items',
			'value'
    ]
		const actual = getAttributeFromPath(path, attribute)
		console.log(actual)
    const expected = {
			"is_join_key": true,
			"type": "string",
			"deliverable": false,
			"filterable": false
    }
    expect(actual).toEqual(expected)
  })
})
