import { isExportable, replacePropertyRefs } from '../attributeModule.js'
import { 
  Primitive,
	ArrayItemsPrimitive,
	ObjectChildPrimitive,
	ObjectChildArray,
	ObjectChildObject,
	ArrayChildObject,
	ArrayChildArray,
	ObjectArraySiblings,
	AllAttributes
} from './testAttributes.js'

let attributes

let deepCopy = (val) => JSON.parse(JSON.stringify(val))

let findAttributeById = (attributeId) => {
  return attributes.find(attribute => attribute.id === attributeId)
}

describe("isExportable", function() {
	beforeEach(function() {
		attributes = deepCopy(AllAttributes).map(attribute => replacePropertyRefs(attribute, AllAttributes))
  });
  it("Primitive, exportable", function() {
		const property = findAttributeById(Primitive.id)
		property.deliverable = true	
		const expected = true
		const  actual = isExportable(property)
		expect(actual).toEqual(expected)
	})
	it("Primitive, non-exportable", function() {
		const property = findAttributeById(Primitive.id)
		const expected = false
		const  actual = isExportable(property)
		expect(actual).toEqual(expected)
	})
	it("Object -> Primitive, primitive exportable", function() {
		const property = findAttributeById(ObjectChildPrimitive.id)
		property.properties.primitive_property.deliverable = true
		const expected = true
		const actual = isExportable(property)
		expect(actual).toEqual(expected)
	})
	it("Object -> Primitive, Object exportable", function() {
		const property = findAttributeById(ObjectChildPrimitive.id)
		property.deliverable = true
		const expected = true
		const actual = isExportable(property)
		expect(actual).toEqual(expected)
	})
	it("Object -> Primitive, non-exportable", function() {
		const property = findAttributeById(ObjectChildPrimitive.id)
		const expected = false
		const actual = isExportable(property)
		expect(actual).toEqual(expected)
	})
	it("Object -> Object -> Primitive, Primitive exportable", function() {
		const property = findAttributeById(ObjectChildObject.id)
		property.properties.object.properties.primitive.deliverable = true
		const expected = true
		const actual = isExportable(property)
		expect(actual).toEqual(expected)
	})
	it("Object[1] -> Object[11] -> Primitive, Object[11] exportable", function() {
		const property = findAttributeById(ObjectChildObject.id)
		property.properties.object.deliverable = true
		const expected = true
		const actual = isExportable(property)
		expect(actual).toEqual(expected)
	})
	it("Object -> Object -> Primitive, Object[1] exportable", function() {
		const property = findAttributeById(ObjectChildObject.id)
		property.deliverable = true
		const expected = true
		const actual = isExportable(property)
		expect(actual).toEqual(expected)
	})
	it("Object -> Object -> Primitive, Primitive exportable", function() {
		const property = findAttributeById(ObjectChildObject.id)
		const expected = false
		const actual = isExportable(property)
		expect(actual).toEqual(expected)
	})
	it("Array -> Primitive, Primitive exportable", function() {
		const property = findAttributeById(ArrayItemsPrimitive.id)
		property.items.deliverable = true
		const expected = true
		const actual = isExportable(property)
		expect(actual).toEqual(expected)
	})
	it("Array -> Primitive, Array exportable", function() {
		const property = findAttributeById(ArrayItemsPrimitive.id)
		property.deliverable = true
		const expected = true
		const actual = isExportable(property)
		expect(actual).toEqual(expected)
	})
	it("Array -> Primitive, none-exportable", function() {
		const property = findAttributeById(ArrayItemsPrimitive.id)
		const expected = false
		const actual = isExportable(property)
		expect(actual).toEqual(expected)
	})
	it("Array[1] -> Array[11] -> Primitive, Primitive exportable", function() {
		const property = findAttributeById(ArrayChildArray.id)
		property.items.items.deliverable = true
		const expected = true
		const actual = isExportable(property)
		expect(actual).toEqual(expected)
	})
	it("Array[1] -> Array[11] -> Primitive, Array[11] exportable", function() {
		const property = findAttributeById(ArrayChildArray.id)
		property.items.deliverable = true
		const expected = true
		const actual = isExportable(property)
		expect(actual).toEqual(expected)
	})
	it("Array[1] -> Array[11] -> Primitive, Array[1] exportable", function() {
		const property = findAttributeById(ArrayChildArray.id)
		property.deliverable = true
		const expected = true
		const actual = isExportable(property)
		expect(actual).toEqual(expected)
	})
	it("Array[1] -> Array[11] -> Primitive, non-exportable", function() {
		const property = findAttributeById(ArrayChildArray.id)
		const expected = false
		const actual = isExportable(property)
		expect(actual).toEqual(expected)
	})
	it(`
		Array -> 
			Object[1] -> (
				Object[11] -> 
					Primitive[111]
				) + (
				Array[12] -> 
					Primitive[121]
				)
			), 
		target Object[1]	
	`, function() {
		const property = findAttributeById(ObjectArraySiblings.id)
		property.items.properties.object_ref.properties.primitive_property.deliverable = true
		const expected = true
		const actual = isExportable(property)
		expect(actual).toEqual(expected)
	})
	it("See prev", function() {
		const property = findAttributeById(ObjectArraySiblings.id)
		property.items.properties.object_ref.deliverable = true
		const expected = true
		const actual = isExportable(property)
		expect(actual).toEqual(expected)
	})
	it("See prev", function() {
		const property = findAttributeById(ObjectArraySiblings.id)
		property.items.deliverable = true
		const expected = true
		const actual = isExportable(property)
		expect(actual).toEqual(expected)
	})
	it("See prev", function() {
		const property = findAttributeById(ObjectArraySiblings.id)
		property.items.properties.array_ref.deliverable = true
		const expected = true
		const actual = isExportable(property)
		expect(actual).toEqual(expected)
	})
	it("See prev", function() {
		const property = findAttributeById(ObjectArraySiblings.id)
		property.items.properties.array_ref.items.deliverable = true
		const expected = true
		const actual = isExportable(property)
		expect(actual).toEqual(expected)
	})
	it("See prev, non-exportable", function() {
		const property = findAttributeById(ObjectArraySiblings.id)
		const expected = false
		const actual = isExportable(property)
		expect(actual).toEqual(expected)
	})
})