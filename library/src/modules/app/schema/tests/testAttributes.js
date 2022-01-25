const Primitive = {
	description: "description",
	display_name: "Ref Primitive",
	id: 0,
	name: "ref_primitive",
	type: "string"
}

const ArrayItemsPrimitive = {
	description: "description",
	display_name: "Array with Primitive Items",
	id: 1,
	name: "ArrayItemsPrimitive",
	type: "array",
	items: {
		primitive_property: {
			$ref: Primitive.id
		}
	}
}

const ObjectChildPrimitive = {
	description: "description",
	display_name: "Object with Primitive child",
	id: 2,
	name: "ObjectChildPrimitive",
	type: "object",
	properties: {
		primitive_property: {
			$ref: Primitive.id
		}
	}
}

const ObjectChildObject = {
	description: "description",
	display_name: "Object with Object Child",
	id: 3,
	name: "ObjectChildObject",
	type: "object",
	properties: {
		object: {
			type: "object",
			properties: {
				primitive: {
					$ref: Primitive.id
				}
			}
		}
	}
}

const ObjectChildArray = {
	description: "description",
	display_name: "Object with Array child",
	id: 4,
	name: "ObjectChildArray",
	type: "object",
	properties: {
		array: {
			type: "array",
			items: {
				$ref: Primitive.id
			}
		}
	}
}

const ArrayChildObject = {
	description: "description",
	display_name: "Array with Object child",
	id: 5,
	name: "ArrayChildObject",
	type: "array",
	items: {
		object_property: {
			type: "object",
			properties: {
				primitive_property: {
					$ref: Primitive.id
				}
			}
		}
	}
}

const ArrayChildArray = {
	description: "description",
	display_name: "Array with Array child",
	id: 5,
	name: "ArrayChildArray",
	type: "array",
	items: {
		another_array: {
			type: "array",
			items: {
				$ref: Primitive.id
			}
		}
	}
}

const AllAttributes = [
	Primitive,
	ArrayItemsPrimitive,
	ObjectChildPrimitive,
	// ObjectChildArray,
	// ObjectChildObject
]

export {
	Primitive,
	ArrayItemsPrimitive,
	ObjectChildPrimitive,
	ObjectChildArray,
	ObjectChildObject,
	ArrayChildObject,
	ArrayChildArray,
	AllAttributes
}