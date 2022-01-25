import { replacePropertyRefs } from '../attributeModule.js'
import { 
	Primitive,
	ArrayItemsPrimitive,
	ObjectChildPrimitive,
	ObjectChildArray,
	ObjectChildObject,
	AllAttributes
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
		// console.log(actual)
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
				primitive_property: {
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
		const actual = replacePropertyRefs(attribute, attributes)
		console.log(actual)
    expect(actual).toEqual(expected)
	})
})
