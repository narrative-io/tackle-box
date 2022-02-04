let deepCopy = (val) => JSON.parse(JSON.stringify(val))

let makePathString = (path) => {
  let pathString = ''
  path.forEach(element => {
    if (!element.length) {
      pathString += `${element.displayName} `
    }	else {
      pathString += `-> ${element} `
    }
  })
  return pathString.trim()
}

let getAttributeFromPath = (path, attribute) => {
  const newPath = deepCopy(path)
  if (newPath.length === 0) {
    return attribute
  } else {
    if (newPath[0].length) {
      if (attribute.properties) {
        attribute = attribute.properties[newPath[0]]
      } else if (newPath[0] === 'items') {
        attribute = attribute.items
      } 
    }
    newPath.shift()
    return getAttributeFromPath(newPath, attribute)
  }
}

let setSelectionRecursively = (property, selectionType, value) => {
  property[selectionType] = value
  if (property.properties) {
    Object.keys(property.properties).forEach(childPropertyName => {
      setSelectionRecursively(property.properties[childPropertyName], selectionType, value)
    })
  } else if (property.items) {
    setSelectionRecursively(property.items, selectionType, value)
  }
}

let findSelectionsForAttribute = (attributePath, property, result, selectionType) => {
  const pathCopy = deepCopy(attributePath)
  const resultCopy = deepCopy(result)
  if (!property.properties && !property.items) {
    if (property[selectionType]) {
      resultCopy.push([...pathCopy])
    }
    return resultCopy
  } else {
    if (property[selectionType]) {
      resultCopy.push([...pathCopy])
    }
    if (property.properties) {
      return Object.keys(property.properties).reduce((acc, childPropertyName) => {
        const accCopy = deepCopy(acc)
        const childResult = findSelectionsForAttribute(
          [...pathCopy, childPropertyName],
          property.properties[childPropertyName],
          [],
          selectionType
        )
        return childResult.length > 0 ? [...accCopy, ...childResult] : accCopy
      }, resultCopy)
    } else if (property.items) {
      const itemsResult = findSelectionsForAttribute(
        [...pathCopy, 'items'],
        property.items,
        [],
        selectionType
      )
      return itemsResult.length > 0 ? [...resultCopy, ...itemsResult] : deepCopy(resultCopy)
    }
    
  }
}

let makeSelected = (attributes, selectionType) => {
  const attributesCopy = deepCopy(attributes)
  const result = attributesCopy.reduce((acc, attribute) => {
    const accCopy = deepCopy(acc)
    const filterable = findSelectionsForAttribute(
      [
        {
          id: attribute.id, 
          displayName: attribute.display_name, 
          name: attribute.name
        }
      ], 
      attribute, 
      [], 
      selectionType
    )
    if (filterable.length > 0) {
      return [...accCopy, ...filterable]
    } else {
      return accCopy
    }
  }, [])
  return result
}

let makeSelectedFromSchemaPreset = (attributes, schemaPreset) => {
  schemaPreset.details.attributes.map(presetAttribute => {
    const relevantAttribute = attributes.find(attribute => attribute.id === presetAttribute.attribute_id)
    presetAttribute.fields.map(field => {		
      const path = field.field.split('.')
      path[0] = {
        id: presetAttribute.attribute_id,
        name: path[0]
      }
      const property = getAttributeFromPath(path, relevantAttribute)
      property.deliverable = field.delivered
      property.filterable = field.filterable
    })
  })
  return attributes
}

let getReadableType = (property) => {
  switch (property.type) {
    case 'object':
      return 'Object'	
    case 'long':
      return 'Number (Integer)'
    case 'double':
      return 'Number (Decimal)'
    case 'string':
      return 'String'
    case 'timestamptz':
      return 'Timestamp'
    case 'boolean':
      return 'Boolean'
    case 'array':
      return 'Array'
    default:
      return null
  }
} 

let getDataTypeIconName = (dataType) => {
  switch (dataType) {
    case 'string':
      return 'utility-font'
    case 'object':
      return 'utility-archive' 
    case 'array':
      return 'utility-brackets'
    case 'double':
      return 'utility-hashtag'          
    case 'long':
      return 'utility-tally'
    case 'timestamptz':
      return 'utility-clock'
    case 'boolean':
      return 'utility-switch'
    default:
      return 'utility-font'
  }
}

let replacePropertyRefs = (property, attributes) => {
  if (property["$ref"] || Object.keys(property).includes('$ref')) {
    const referencedProperty = property['$ref'] ? property['$ref'] : property.$ref
    const attributeRef = deepCopy(replacePropertyRefs(attributes.find(attribute => attribute.id === referencedProperty), attributes))
    return {
      ...attributeRef,
      deliverable: false,
      filterable: false
    }
  } else if (!property.properties && !property.items) {
    return {
      ...property,
      deliverable: false,
      filterable: false
    }
  } else {
    let modifiedProperty = {
      ...property,
      filterable: false,
      deliverable: false
    }
  
    if (modifiedProperty.properties) {
      Object.keys(modifiedProperty.properties).map(childPropertyName => {
        modifiedProperty.properties[childPropertyName] = {
          ...replacePropertyRefs(modifiedProperty.properties[childPropertyName], attributes),
          deliverable: false,
          filterable: false
        }  
      })
    } else if (modifiedProperty.items) {
      if (modifiedProperty.items["$ref"] || Object.keys(modifiedProperty.items).includes('$ref')) {
        const refPropertyId = modifiedProperty.items['$ref'] ? modifiedProperty.items['$ref'] : modifiedProperty.items.$ref
        modifiedProperty.items = deepCopy(replacePropertyRefs(attributes.find(attribute => attribute.id === refPropertyId), attributes))
      } else {
        modifiedProperty.items = replacePropertyRefs(modifiedProperty.items, attributes)
      }
    }
    
    return modifiedProperty
  }
}

let isExportable = (attribute) => {
  if (attribute.deliverable) {
    return true
  } else {
    if (hasExportableChild(attribute)) {
      return true
    }
  }
  return false
}
let hasExportableChild = (attribute) => {
  if (attribute.deliverable) {
    return true
  } else {
    if (attribute.properties) {
      let exportable = false
      Object.keys(attribute.properties).forEach(key => {
        if (hasExportableChild(attribute.properties[key])) {
          exportable = true
        }
      })	
      return exportable
    } else if (attribute.items) {
      return hasExportableChild(attribute.items)
    } else {
      return false
    }
  }
}

let getJoinOptionsByPath = (path, parentAttribute, datasets) => {
	const result = {}
	const targetProperty = getAttributeFromPath(path, parentAttribute)
	const pathCopy = deepCopy(path)
	pathCopy.shift()
	let stringPath = makeDotDelimitedPropertyPath(pathCopy)
	// console.log("STRING PATH")
	// console.log(stringPath)
	// console.log("TARGET PROPERTY")
	// console.log(targetProperty)
	if (targetProperty.is_join_key) {
		if (pathCopy.includes('items') && pathCopy.lastIndexOf('items') !== pathCopy.length - 1) { // there's an array somewhere in the path and it's not the last path element
			// create result.parentAttribute
			const arrayPath = deepCopy(pathCopy)
			console.log(arrayPath)
			arrayPath.length = pathCopy.lastIndexOf('items') + 1 // remove everything from items to the end of the path
			const arrayItemsAttribute = getAttributeFromPath(arrayPath, parentAttribute)
			// console.log("ARRAY ITEMS ATTRIBUTE")
			// console.log(arrayPath)
			// console.log(arrayItemsAttribute)
			// console.log(arrayItemsAttribute.id)
			if (arrayItemsAttribute.id || Object.keys(arrayItemsAttribute).includes('id')) { // if it's a ref'd attribute, which it must be since we can't specify paths nested inside an array
				// console.log("ARRAY PATH")
				// console.log(arrayPath)
				arrayPath.pop()
				result.parentAttribute = {
					attributeId: parentAttribute.id,
					path: makeDotDelimitedPropertyPath(arrayPath)
				}
				const arrayChildrenPath = makeDotDelimitedPropertyPath(deepCopy(pathCopy).filter((value, index, arr) => { 
					return index > pathCopy.lastIndexOf('items')
				}))
				// console.log("ARRAY CHILDREN PATH")
				// console.log(arrayChildrenPath)
				result.attributeId = arrayItemsAttribute.id
				result.datasets = datasets.filter(dataset => dataset.mappings && dataset.mappings.find(mapping => mapping.attribute_id === result.attributeId && hasPropertyMappingForPath(mapping, arrayChildrenPath)))		
			}			
		} else if (!targetProperty.type !== 'object' && targetProperty.type !== 'array') { // if it's a primitive and is_join_key = true, return all datasets that have mappings to this attributeId and path
			result.attributeId = parentAttribute.id
			result.datasets = datasets.filter(dataset => dataset.mappings && dataset.mappings.find(mapping => mapping.attribute_id === parentAttribute.id && hasPropertyMappingForPath(mapping, stringPath)))		
		} 
	}
	// console.log("RESULT")
	// console.log(result)
	if (result.datasets && result.datasets.length > 0) {
		return result
	}
	return {}
}



function hasPropertyMappingForPath(mapping, stringPath) {
	const mappingToPath = mapping.mapping.property_mappings.find(propertyMapping => propertyMapping.path === stringPath)
	return mappingToPath !== undefined
}

function makeDotDelimitedPropertyPath(path) {
	const pathCopy = deepCopy(path)
	let stringPath = ''
	pathCopy.filter(el => el.length).forEach((el, index) => {
		if (index > 0) {
			stringPath += '.'
		}
		stringPath += el
	})
	return stringPath
}

export {
  makePathString,
  getAttributeFromPath,
  findSelectionsForAttribute,
  setSelectionRecursively,
  getReadableType,
  getDataTypeIconName,
  replacePropertyRefs,
  makeSelected,
  makeSelectedFromSchemaPreset,
	isExportable,
	getJoinOptionsByPath
}