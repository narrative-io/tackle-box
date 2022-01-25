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
})
