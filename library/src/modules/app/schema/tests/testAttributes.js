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
    $ref: Primitive.id
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
    type: "object",
    properties: {
      primitive_property: {
        $ref: Primitive.id
      }
    }
  }
}

const ArrayChildArray = {
  description: "description",
  display_name: "Array with Array child",
  id: 6,
  name: "ArrayChildArray",
  type: "array",
  items: {
    type: "array",
    items: {
      $ref: Primitive.id
    }
  }
}

const ObjectObjectSiblings = {
  description: "description",
  display_name: "Array with Object child with object and object sibling children",
  id: 7,
  name: "ObjectObjectSiblings",
  type: "array",
  items: {
    type: "object",
    properties: {
      object_ref_1: {
        $ref: ObjectChildPrimitive.id
      },
      object_ref_2: {
        $ref: ObjectChildPrimitive.id
      }
    }
  }
}

const ObjectArraySiblings = {
  description: "description",
  display_name: "Array with Object child with array and object sibling children",
  id: 8,
  name: "ObjectArraySiblings",
  type: "array",
  items: {
    type: "object",
    properties: {
      object_ref: {
        $ref: ObjectChildPrimitive.id
      },
      array_ref: {
        $ref: ArrayItemsPrimitive.id
      }
    }
  }
}

const ArrayArraySiblings = {
  description: "description",
  display_name: "Array with Object child with array and array sibling children",
  id: 9,
  name: "ArrayArraySiblings",
  type: "array",
  items: {
    type: "object",
    properties: {
      array_ref_1: {
        $ref: ArrayItemsPrimitive.id
      },
      array_ref_2: {
        $ref: ArrayItemsPrimitive.id
      }
    }
  }
}

const OptionalRequiredFlat = {
  description: "To test hiding optional properties by default",
  display_name: "Test Hiding Optional Properties",
  id: 10,
  name: "testHidingOptionalProperties",
  type: "object",
  properties: {
    requiredAttribute1: {
      type: "string"
    },
    requiredAttribute2: {
      type: "binary",
      format: "geometry"     
    },
    optionalAttribute1: {
      type: "string"
    },
    optionalAttribute2: {
      type: "string"
    },
    requiredAttribute3: {
      type: "string"
    },
    optionalAttribute3: {
      type: "string"
    },
    optionalAttribute4: {
      type: "string"
    },
    requiredAttribute4: {
      type: "string"
    }
  },
  required: [
    // "requiredAttribute1",
    // "requiredAttribute2",
    // "requiredAttribute3",
    "requiredAttribute4"
  ]
}

const BinaryPrimitive = {
  description: "Binary Primitive Property",
  display_name: "Binary Primitive Property",
  id: 11,
  name: "binaryPrimitive",
  type: "binary",
  format: "geometry"
}

const ObjectChildBinary = {
  description: "description",
  display_name: "Object with Binary child",
  id: 12,
  name: "ObjectChildBinary",
  type: "object",
  properties: {
    primitive_property: {
      $ref: BinaryPrimitive.id
    }
  }
}

const AllAttributes = [
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
  OptionalRequiredFlat,
  BinaryPrimitive,
  ObjectChildBinary
]

export {
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
  AllAttributes,
  OptionalRequiredFlat,
  BinaryPrimitive,
  ObjectChildBinary
}