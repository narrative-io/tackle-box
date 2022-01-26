import { findSelectionsForAttribute, setSelectionRecursively, replacePropertyRefs } from '../attributeModule.js'
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
	it("Object -> Primitive, Object & Primitive selected", function() {
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
})

	
