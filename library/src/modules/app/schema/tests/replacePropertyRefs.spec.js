import { replacePropertyRefs } from '../attributeModule.js'
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
	ArrayArraySiblings
} from './testAttributes.js'

let log = (arg) => {
  return JSON.stringify(arg, null, 4)
}

describe("replacePropertyRefs", function() {
  it("No ref", function() {
    const attributes = [Primitive]
    const attribute = attributes[0]
    const expected = {
      description: "description",
      display_name: "Ref Primitive",
      id: 0,
      name: "ref_primitive",
      type: "string",
      filterable: false,
      deliverable: false
    }
    const actual = replacePropertyRefs(attribute, attributes)
    expect(actual).toEqual(expected)
  })
  it("Ref on Primitive Child of Object", function() {
    const attributes = [Primitive, ObjectChildPrimitive]
    const attribute = ObjectChildPrimitive
    const expected = {
      description: "description",
      display_name: "Object with Primitive child",
      id: 2,
      name: "ObjectChildPrimitive",
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
    const actual = replacePropertyRefs(attribute, attributes)
    expect(actual).toEqual(expected)
  })
  it("Ref on Primitive Child of Object child of Object", function() {
    const attributes = [Primitive, ObjectChildObject]
    const attribute = ObjectChildObject
    const expected = {
      description: "description",
      display_name: "Object with Object Child",
      id: 3,
      name: "ObjectChildObject",
      type: "object",
      filterable: false,
      deliverable: false,
      properties: {
        object: {
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
              deliverable: false,
            }
          }
        }
      }
    }
    const actual = replacePropertyRefs(attribute, attributes)
    expect(actual).toEqual(expected)
  })
  it("Ref on Primitive Items of Array", function() {
    const attributes = [Primitive, ArrayItemsPrimitive]
    const attribute = ArrayItemsPrimitive
    const expected = {
      description: "description",
      display_name: "Array with Primitive Items",
      id: 1,
      name: "ArrayItemsPrimitive",
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
    const actual = replacePropertyRefs(attribute, attributes)
    expect(actual).toEqual(expected)
  })
  it("Ref on Primitive Child of Object child of Object", function() {
    const attributes = [Primitive, ObjectChildArray]
    const attribute = ObjectChildArray
    const expected = {
      description: "description",
      display_name: "Object with Array child",
      id: 4,
      name: "ObjectChildArray",
      type: "object",
      filterable: false,
      deliverable: false,
      properties: {
        array: {
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
      }
    }
    const actual = replacePropertyRefs(attribute, attributes)
    expect(actual).toEqual(expected)
  })
  it("Ref on Primitive Child of Object child of Array", function() {
    const attributes = [Primitive, ArrayChildObject]
    const attribute = ArrayChildObject
    const expected = {
      description: "description",
      display_name: "Array with Object child",
      id: 5,
      name: "ArrayChildObject",
      type: "array",
      filterable: false,
      deliverable: false,
      items: {
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
    }
    const actual = replacePropertyRefs(attribute, attributes)
    expect(actual).toEqual(expected)
  })
  it("Ref on Primitive Child of Array child of Array", function() {
    const attributes = [Primitive, ArrayChildArray]
    const attribute = ArrayChildArray
    const expected = {
      description: "description",
      display_name: "Array with Array child",
      id: 6,
      name: "ArrayChildArray",
      type: "array",
      filterable: false,
      deliverable: false,
      items: {
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
    }
    const actual = replacePropertyRefs(attribute, attributes)
    expect(actual).toEqual(expected)
  })
  it("Array with Object child with object and object silbing children with refs", function() {
    const attributes = [Primitive, ObjectChildPrimitive, ObjectObjectSiblings]
    const attribute = ObjectObjectSiblings
    const expected = {
      description: "description",
      display_name: "Array with Object child with object and object silbing children",
      id: 7,
      name: "ObjectObjectSiblings",
      type: "array",
      filterable: false,
      deliverable: false,
      items: {
        type: "object",
        filterable: false,
        deliverable: false,
        properties: {
          object_ref_1: {
            description: "description",
            display_name: "Object with Primitive child",
            id: 2,
            name: "ObjectChildPrimitive",
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
          },
          object_ref_2: {
            description: "description",
            display_name: "Object with Primitive child",
            id: 2,
            name: "ObjectChildPrimitive",
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
        }
      }
    }
    const actual = replacePropertyRefs(attribute, attributes)
    expect(actual).toEqual(expected)
  })
  it("Array with Object child with array and object silbing children with refs", function() {
    const attributes = [Primitive, ObjectChildPrimitive, ArrayItemsPrimitive, ObjectArraySiblings]
    const attribute = ObjectArraySiblings
    const expected = {
      description: "description",
      display_name: "Array with Object child with array and object silbing children",
      id: 8,
      name: "ObjectArraySiblings",
      type: "array",
      filterable: false,
      deliverable: false,
      items: {
        type: "object",
        filterable: false,
        deliverable: false,
        properties: {
          object_ref: {
            description: "description",
            display_name: "Object with Primitive child",
            id: 2,
            name: "ObjectChildPrimitive",
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
          },
          array_ref: {
            description: "description",
            display_name: "Array with Primitive Items",
            id: 1,
            name: "ArrayItemsPrimitive",
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
        }
      }
    }
    const actual = replacePropertyRefs(attribute, attributes)
    expect(actual).toEqual(expected)
  })
  it("Array with Object child with array and array silbing children with refs", function() {
    const attributes = [Primitive, ArrayItemsPrimitive, ArrayArraySiblings]
    const attribute = ArrayArraySiblings
    const expected = {
      description: "description",
      display_name: "Array with Object child with array and array silbing children",
      id: 9,
      name: "ArrayArraySiblings",
      type: "array",
      filterable: false,
      deliverable: false,
      items: {
        type: "object",
        filterable: false,
        deliverable: false,
        properties: {
          array_ref_1: {
            description: "description",
            display_name: "Array with Primitive Items",
            id: 1,
            name: "ArrayItemsPrimitive",
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
          },
          array_ref_2: {
            description: "description",
            display_name: "Array with Primitive Items",
            id: 1,
            name: "ArrayItemsPrimitive",
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
        }
      }
    }
    const actual = replacePropertyRefs(attribute, attributes)
    expect(actual).toEqual(expected)
  })
})
