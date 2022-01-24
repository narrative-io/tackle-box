import { makePathString } from '../attributeModule.js'

let parentAttributePath = [
	{
		displayName: 'parent'
	}
]

describe("makePathString", function() {
  it("Single Parent Path", function() {
		let result = makePathString(parentAttributePath)
    expect(result).toBe('parent')
  })
})