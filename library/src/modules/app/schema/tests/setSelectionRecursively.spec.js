import { setSelectionRecursively, replacePropertyRefs } from '../attributeModule.js'
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

let log = (arg) => {
  return JSON.stringify(arg, null, 4)
}

describe("setSelectionRecursively", function() {
	beforeEach(function() {
		attributes = deepCopy(AllAttributes).map(attribute => replacePropertyRefs(attribute, AllAttributes))
  });
  it("Primitive Attribute", function() {
		const property = findAttributeById(Primitive.id)
		const selectionType = 'filterable'
		const value = true

		setSelectionRecursively(property, selectionType, value)
		const target = findAttributeById(Primitive.id).filterable === true

		expect(target).toEqual(value)
	})
	it("Object -> Primitive, target Object", function() {
		const property = findAttributeById(ObjectChildPrimitive.id)
		const selectionType = 'filterable'
		const value = true

		setSelectionRecursively(property, selectionType, value)
		const target = 
			findAttributeById(ObjectChildPrimitive.id).filterable === true && 
			findAttributeById(ObjectChildPrimitive.id).properties.primitive_property.filterable === true
		expect(target).toEqual(value)
	})
	it("Object -> Primitive, target Primitive", function() {
		const property = findAttributeById(ObjectChildPrimitive.id).properties.primitive_property
		const selectionType = 'filterable'
		const value = true

		setSelectionRecursively(property, selectionType, value)
		const target = findAttributeById(ObjectChildPrimitive.id).properties.primitive_property.filterable === true
		expect(target).toEqual(value)
	})
	it("Object[1] -> Object[11] -> Primitive, target Object[1]", function() {
		const property = findAttributeById(ObjectChildObject.id)
		const selectionType = 'filterable'
		const value = true

		setSelectionRecursively(property, selectionType, value)
		const target = 
			findAttributeById(ObjectChildObject.id).filterable === true &&
			findAttributeById(ObjectChildObject.id).properties.object.filterable === true && 
			findAttributeById(ObjectChildObject.id).properties.object.properties.primitive.filterable === true
			
		expect(target).toEqual(value)
	})
	it("Object[1] -> Object[11] -> Primitive, target Object[2]", function() {
		const property = findAttributeById(ObjectChildObject.id).properties.object
		const selectionType = 'filterable'
		const value = true

		setSelectionRecursively(property, selectionType, value)
		const target = 
			findAttributeById(ObjectChildObject.id).properties.object.filterable === true && 
			findAttributeById(ObjectChildObject.id).properties.object.properties.primitive.filterable === true
			
		expect(target).toEqual(value)
	})
	it("Array -> Primitive, target Array", function() {
		const property = findAttributeById(ArrayItemsPrimitive.id)
		const selectionType = 'filterable'
		const value = true

		setSelectionRecursively(property, selectionType, value)
		const target = 
			findAttributeById(ArrayItemsPrimitive.id).filterable === true && 
			findAttributeById(ArrayItemsPrimitive.id).items.filterable === true
			
		expect(target).toEqual(value)
	})
	it("Array -> Primitive, target Primitive", function() {
		const property = findAttributeById(ArrayItemsPrimitive.id).items
		const selectionType = 'filterable'
		const value = true

		setSelectionRecursively(property, selectionType, value)
		const target = 
			findAttributeById(ArrayItemsPrimitive.id).items.filterable === true
			
		expect(target).toEqual(value)
	})
})

  