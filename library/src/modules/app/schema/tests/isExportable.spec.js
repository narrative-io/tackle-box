import { isExportable, replacePropertyRefs } from '../attributeModule.js'
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
})