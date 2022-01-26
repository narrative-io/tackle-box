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

let deepCopy = (val) => JSON.parse(JSON.stringify(val))

const attributes = AllAttributes.map(attribute => replacePropertyRefs(attribute, AllAttributes))

let findAttributeById = (attributeId) => {
  return attributes.find(attribute => attribute.id === attributeId)
}

// let setSelectionRecursively = (property, selectionType, value)

describe("setSelectionRecursively", function() {
  it("Primitive Attribute", function() {
		const property = findAttributeById(Primitive.id)
		const selectionType = 'fliterable'
		const value = true

		setSelectionRecursively(property, selectionType, value)
		const target = findAttributeById(Primitive.id).fliterable === true

    expect(target).toEqual(value)
	})
})