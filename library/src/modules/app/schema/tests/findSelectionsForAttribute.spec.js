import { findSelectionsForAttribute, setSelectionRecursively, replacePropertyRefs } from '../attributeModule.js'
import { 
  Primitive,
	ArrayItemsPrimitive,
	ObjectChildPrimitive,
	ObjectChildArray,
	ObjectChildObject,
	ArrayChildObject,
	ArrayChildArray,
	AllAttributes
} from './testAttributes.js'

let attributes

let deepCopy = (val) => JSON.parse(JSON.stringify(val))

let findAttributeById = (attributeId) => {
  return attributes.find(attribute => attribute.id === attributeId)
}

describe("findSelectionsForAttribute", function() {
	beforeEach(function() {
		attributes = deepCopy(AllAttributes).map(attribute => replacePropertyRefs(attribute, AllAttributes))
  });
  it("Primitive Attribute", function() {
		const attributePath = [{id: 0}]
		const property = findAttributeById(Primitive.id)
		const selectionType = 'filterable'
		const expected = [[{id: 0}]]
		
		setSelectionRecursively(property, selectionType, true)
		let actual = findSelectionsForAttribute(attributePath, property, [], selectionType)
		expect(actual).toEqual(expected)
	})
	it("Object -> Primitive, all selected", function() {
		const attributePath = [{id: 2}]
		const property = findAttributeById(ObjectChildPrimitive.id)
		const selectionType = 'filterable'
		const expected = [[{id: 2}], [{id: 2},'primitive_property']]
		
		setSelectionRecursively(property, selectionType, true)
		let actual = findSelectionsForAttribute(attributePath, property, [], selectionType)
		expect(actual).toEqual(expected)
	})
	it("Object -> Primitive, Object selected", function() {
		const attributePath = [{id: 2}]
		const property = findAttributeById(ObjectChildPrimitive.id)
		const selectionType = 'filterable'
		const expected = [[{id: 2}]]
		
		setSelectionRecursively(property, selectionType, true)
		setSelectionRecursively(property.properties.primitive_property, selectionType, false)
		let actual = findSelectionsForAttribute(attributePath, property, [], selectionType)
		expect(actual).toEqual(expected)
	})
	it("Object -> Primitive, Primitive selected", function() {
		const attributePath = [{id: 2}]
		const property = findAttributeById(ObjectChildPrimitive.id)
		const selectionType = 'filterable'
		const expected = [[{id: 2}]]
		
		setSelectionRecursively(property, selectionType, true)
		setSelectionRecursively(property.properties.primitive_property, selectionType, false)
		let actual = findSelectionsForAttribute(attributePath, property, [], selectionType)
		expect(actual).toEqual(expected)
	})
	it("Object[1] -> Object[11] -> Primitive, All selected", function() {
		const attributePath = [{id: 3}]
		const property = findAttributeById(ObjectChildObject.id)
		const selectionType = 'filterable'
		const expected = [[{id: 3}], [{id: 3},'object'], [{id: 3},'object', 'primitive']]
		
		setSelectionRecursively(property, selectionType, true)
		let actual = findSelectionsForAttribute(attributePath, property, [], selectionType)
		expect(actual).toEqual(expected)
	})
	it("Object[1] -> Object[11] -> Primitive, Object[1] & Object[11] selected", function() {
		const attributePath = [{id: 3}]
		const property = findAttributeById(ObjectChildObject.id)
		const selectionType = 'filterable'
		const expected = [[{id: 3}], [{id: 3},'object']]
		
		setSelectionRecursively(property, selectionType, true)
		setSelectionRecursively(property.properties.object.properties.primitive, selectionType, false)
		let actual = findSelectionsForAttribute(attributePath, property, [], selectionType)
		expect(actual).toEqual(expected)
	})
	it("Object[1] -> Object[11] -> Primitive, Object[1] & Primitive selected", function() {
		const attributePath = [{id: 3}]
		const property = findAttributeById(ObjectChildObject.id)
		const selectionType = 'filterable'
		const expected = [[{id: 3}], [{id: 3},'object', 'primitive']]
		
		setSelectionRecursively(property, selectionType, true)
		setSelectionRecursively(property.properties.object, selectionType, false)
		setSelectionRecursively(property.properties.object.properties.primitive, selectionType, true)
		let actual = findSelectionsForAttribute(attributePath, property, [], selectionType)
		expect(actual).toEqual(expected)
	})
	it("Object[1] -> Object[11] -> Primitive, Object[11] selected", function() {
		const attributePath = [{id: 3}]
		const property = findAttributeById(ObjectChildObject.id)
		const selectionType = 'filterable'
		const expected = [[{id: 3},'object'], [{id: 3},'object', 'primitive']]
	
		setSelectionRecursively(property.properties.object, selectionType, true)
		let actual = findSelectionsForAttribute(attributePath, property, [], selectionType)
		expect(actual).toEqual(expected)
	})
	it("Array -> Primitive, all selected", function() {
		const attributePath = [{id: 1}]
		const property = findAttributeById(ArrayItemsPrimitive.id)
		const selectionType = 'filterable'
		const expected = [[{id: 1}], [{id: 1},'items']]
	
		setSelectionRecursively(property, selectionType, true)
		let actual = findSelectionsForAttribute(attributePath, property, [], selectionType)
		expect(actual).toEqual(expected)
	})
	it("Array -> Primitive, Array selected", function() {
		const attributePath = [{id: 1}]
		const property = findAttributeById(ArrayItemsPrimitive.id)
		const selectionType = 'filterable'
		const expected = [[{id: 1}]]
	
		setSelectionRecursively(property, selectionType, true)
		setSelectionRecursively(property.items, selectionType, false)
		let actual = findSelectionsForAttribute(attributePath, property, [], selectionType)
		expect(actual).toEqual(expected)
	})
	it("Array -> Primitive, all selected", function() {
		const attributePath = [{id: 1}]
		const property = findAttributeById(ArrayItemsPrimitive.id)
		const selectionType = 'filterable'
		const expected = [[{id: 1},'items']]
	
		setSelectionRecursively(property.items, selectionType, true)
		let actual = findSelectionsForAttribute(attributePath, property, [], selectionType)
		expect(actual).toEqual(expected)
	})
	it("Array[1] -> Array[11] -> Primitive, All selected", function() {
		const attributePath = [{id: 6}]
		const property = findAttributeById(ArrayChildArray.id)
		const selectionType = 'filterable'
		const expected = [[{id: 6}], [{id: 6},'items'], [{id: 6},'items', 'items']]
		
		setSelectionRecursively(property, selectionType, true)
		let actual = findSelectionsForAttribute(attributePath, property, [], selectionType)
		expect(actual).toEqual(expected)
	})
	it("Array[1] -> Array[11] -> Primitive, Array[1] selected", function() {
		const attributePath = [{id: 6}]
		const property = findAttributeById(ArrayChildArray.id)
		const selectionType = 'filterable'
		const expected = [[{id: 6}]]
		
		setSelectionRecursively(property, selectionType, true)
		setSelectionRecursively(property.items, selectionType, false)
		let actual = findSelectionsForAttribute(attributePath, property, [], selectionType)
		expect(actual).toEqual(expected)
	})
	it("Array[1] -> Array[11] -> Primitive, Array[1] & Array[11] selected", function() {
		const attributePath = [{id: 6}]
		const property = findAttributeById(ArrayChildArray.id)
		const selectionType = 'filterable'
		const expected = [[{id: 6}], [{id: 6},'items']]
		
		setSelectionRecursively(property, selectionType, true)
		setSelectionRecursively(property.items.items, selectionType, false)
		let actual = findSelectionsForAttribute(attributePath, property, [], selectionType)
		expect(actual).toEqual(expected)
	})
	it("Array[1] -> Array[11] -> Primitive, Array[1] & Primitive selected", function() {
		const attributePath = [{id: 6}]
		const property = findAttributeById(ArrayChildArray.id)
		const selectionType = 'filterable'
		const expected = [[{id: 6}], [{id: 6},'items', 'items']]
		
		setSelectionRecursively(property, selectionType, true)
		setSelectionRecursively(property.items, selectionType, false)
		setSelectionRecursively(property.items.items, selectionType, true)
		let actual = findSelectionsForAttribute(attributePath, property, [], selectionType)
		expect(actual).toEqual(expected)
	})
	it("Array[1] -> Array[11] -> Primitive, Primitive selected", function() {
		const attributePath = [{id: 6}]
		const property = findAttributeById(ArrayChildArray.id)
		const selectionType = 'filterable'
		const expected = [[{id: 6},'items', 'items']]
		
		setSelectionRecursively(property.items.items, selectionType, true)
		let actual = findSelectionsForAttribute(attributePath, property, [], selectionType)
		expect(actual).toEqual(expected)
	})
	it("Array -> Object -> Primitive, all selected", function() {
		const attributePath = [{id: 5}]
		const property = findAttributeById(ArrayChildObject.id)
		const selectionType = 'filterable'
		const expected = [[{id: 5}], [{id: 5},'items'], [{id: 5},'items', 'primitive_property']]
		
		setSelectionRecursively(property, selectionType, true)
		let actual = findSelectionsForAttribute(attributePath, property, [], selectionType)
		expect(actual).toEqual(expected)
	})
	it("Array -> Object -> Primitive, Array selected", function() {
		const attributePath = [{id: 5}]
		const property = findAttributeById(ArrayChildObject.id)
		const selectionType = 'filterable'
		const expected = [[{id: 5}]]
		
		setSelectionRecursively(property, selectionType, true)
		setSelectionRecursively(property.items, selectionType, false)
		let actual = findSelectionsForAttribute(attributePath, property, [], selectionType)
		expect(actual).toEqual(expected)
	}),
	it("Array -> Object -> Primitive, Object selected", function() {
		const attributePath = [{id: 5}]
		const property = findAttributeById(ArrayChildObject.id)
		const selectionType = 'filterable'
		const expected = [[{id: 5},'items']]
		
		setSelectionRecursively(property.items, selectionType, true)
		setSelectionRecursively(property.items.properties.primitive_property, selectionType, false)
		let actual = findSelectionsForAttribute(attributePath, property, [], selectionType)
		expect(actual).toEqual(expected)
	})
	it("Array -> Object -> Primitive, Array and Primitive selected", function() {
		const attributePath = [{id: 5}]
		const property = findAttributeById(ArrayChildObject.id)
		const selectionType = 'filterable'
		const expected = [[{id: 5}]]
		
		setSelectionRecursively(property, selectionType, true)
		setSelectionRecursively(property.items, selectionType, false)
		let actual = findSelectionsForAttribute(attributePath, property, [], selectionType)
		expect(actual).toEqual(expected)
	}),
	it("Array -> Object -> Primitive, Array and Object selected", function() {
		const attributePath = [{id: 5}]
		const property = findAttributeById(ArrayChildObject.id)
		const selectionType = 'filterable'
		const expected = [[{id: 5}], [{id: 5},'items']]
		
		setSelectionRecursively(property, selectionType, true)
		setSelectionRecursively(property.items.properties.primitive_property, selectionType, false)
		let actual = findSelectionsForAttribute(attributePath, property, [], selectionType)
		expect(actual).toEqual(expected)
	})
	it("Array -> Object -> Primitive, Object and Primitive selected", function() {
		const attributePath = [{id: 5}]
		const property = findAttributeById(ArrayChildObject.id)
		const selectionType = 'filterable'
		const expected = [[{id: 5},'items'], [{id: 5},'items', 'primitive_property']]
		
		setSelectionRecursively(property.items, selectionType, true)
		let actual = findSelectionsForAttribute(attributePath, property, [], selectionType)
		expect(actual).toEqual(expected)
	})
	it("Object -> Array -> Primitive, all selected", function() {
		const attributePath = [{id: 4}]
		const property = findAttributeById(ObjectChildArray.id)
		const selectionType = 'filterable'
		const expected = [[{id: 4}], [{id: 4},'array'], [{id: 4},'array', 'items']]
		
		setSelectionRecursively(property, selectionType, true)
		let actual = findSelectionsForAttribute(attributePath, property, [], selectionType)
		expect(actual).toEqual(expected)
	}),
	it("Object -> Array -> Primitive, Array and Primitive selected", function() {
		const attributePath = [{id: 4}]
		const property = findAttributeById(ObjectChildArray.id)
		const selectionType = 'filterable'
		const expected = [[{id: 4},'array'], [{id: 4},'array', 'items']]
		
		setSelectionRecursively(property.properties.array, selectionType, true)
		let actual = findSelectionsForAttribute(attributePath, property, [], selectionType)
		expect(actual).toEqual(expected)
	}),
	it("Object -> Array -> Primitive, Object and Primitive selected", function() {
		const attributePath = [{id: 4}]
		const property = findAttributeById(ObjectChildArray.id)
		const selectionType = 'filterable'
		const expected = [[{id: 4}], [{id: 4},'array', 'items']]
		
		setSelectionRecursively(property, selectionType, true)
		setSelectionRecursively(property.properties.array, selectionType, false)
		setSelectionRecursively(property.properties.array.items, selectionType, true)
		let actual = findSelectionsForAttribute(attributePath, property, [], selectionType)
		expect(actual).toEqual(expected)
	}),
	it("Object -> Array -> Primitive, Primitive selected", function() {
		const attributePath = [{id: 4}]
		const property = findAttributeById(ObjectChildArray.id)
		const selectionType = 'filterable'
		const expected = [[{id: 4},'array', 'items']]
		
		setSelectionRecursively(property.properties.array.items, selectionType, true)
		let actual = findSelectionsForAttribute(attributePath, property, [], selectionType)
		expect(actual).toEqual(expected)
	})
})

	
