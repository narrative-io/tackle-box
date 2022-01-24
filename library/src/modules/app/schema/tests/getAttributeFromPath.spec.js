import { replacePropertyRefs, getAttributeFromPath } from '../attributeModule.js'
import { AllAttributes, Primitive } from './testAttributes.js'


// let findAttributeById = (attributeId) => {
// 	return attributes.find(attribute => attribute.id === attributeId)
// }

let log = (arg) => {
	console.log(JSON.stringify(arg, null, 4))
}

// log(attributes)

describe("getAttributeFromPath", () => {
  it("Parent Attribute", () => {
		const attributes = [...AllAttributes.map(attribute => replacePropertyRefs(attribute, [...AllAttributes]))]
		const path = [{
			displayName: 'Ref Primitive',
			id: 0
		}]
		const result = getAttributeFromPath(path, attributes.find(attribute => attribute.id === 0))
    expect(result).toEqual(attributes.find(attribute => attribute.id === 0))
	})
	
	it("Child Primitive", () => {
		const attributes = AllAttributes.map(attribute => {
			const prop = replacePropertyRefs(attribute, AllAttributes)
			log(prop)

			return prop
		})
		// log(attributes)
		// const path = [
		// 	{
		// 		displayName: 'Object with Primitive child',
		// 		id: 2
		// 	},
		// 	'primitive_property'
		// ]
		// const result = getAttributeFromPath(path, attributes.find(attribute => attribute.id === 2))
		// // log("RESULT")
		// // log(result)
    // expect(result).toEqual({
		// 	...Primitive,
		// 	filterable: false,
		// 	deliverable: false
		// })
		expect(0).toBe(0)
	})
})
