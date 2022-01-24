import { makePathString } from '../attributeModule.js'

let parentAttributePath = [
	{
		displayName: 'parent'
	}
]

let childPath = [
	{
		displayName: 'parent'
	},
	'child'
]

let nestedPath = [
	{
		displayName: 'parent'
	},
	'child',
	'childOfChild'
]

describe("makePathString", function() {
  it("Parent Attribute Path", function() {
		let result = makePathString(parentAttributePath)
    expect(result).toBe('parent')
	})
	it("Child Path", function() {
		let result = makePathString(childPath)
    expect(result).toBe('parent -> child')
	})
	it("Child of Child Path", function() {
		let result = makePathString(nestedPath)
    expect(result).toBe('parent -> child -> childOfChild')
  })
})

