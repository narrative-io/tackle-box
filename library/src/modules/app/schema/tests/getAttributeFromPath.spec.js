// import { replacePropertyRefs, getAttributeFromPath } from '../attributeModule.js'
// import { AllAttributes, Primitive } from './testAttributes.js'

// const attributes = AllAttributes.map(attribute => replacePropertyRefs(attribute, AllAttributes))

// let findAttributeById = (attributeId) => {
// 	return attributes.find(attribute => attribute.id === attributeId)
// }

// let log = (arg) => {
// 	return JSON.stringify(arg, null, 4)
// }

// describe("getAttributeFromPath", function() {
//   it("Parent Attribute", function() {
// 		const path = [{
// 			displayName: 'Ref Primitive',
// 			id: 0
// 		}]
// 		const result = getAttributeFromPath(path, findAttributeById(0))
//     expect(result).toEqual(findAttributeById(0))
// 	})
	
// 	it("Child Primitive", function() {
// 		const path = [
// 			{
// 				displayName: 'Object with Primitive child',
// 				id: 2
// 			},
// 			'primitive_property'
// 		]
// 		const result = getAttributeFromPath(path, findAttributeById(2))
// 		// console.log("RESULT")
// 		// console.log(result)
//     expect(result).toEqual({
// 			...Primitive,
// 			filterable: false,
// 			deliverable: false
// 		})
// 	})
// })
