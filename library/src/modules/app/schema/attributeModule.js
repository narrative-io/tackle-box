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
	return pathString
}

let getAttributeFromPath = (path, attribute) => {
	const newPath = deepCopy(path)
	if (newPath.length === 0) {
    return attribute
  } else {
    if (newPath[0].length) {
      attribute = attribute.properties[newPath[0]]
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
	}
}

let findSelections = (path, property, result, selectionType) => {
	const pathCopy = deepCopy(path)
	const resultCopy = deepCopy(result)
	if (!property.properties) {
		if (property[selectionType]) {
			resultCopy.push([...pathCopy])
		}
		return resultCopy
	} else {
		if (property[selectionType]) {
			resultCopy.push([...pathCopy])
		}
		return Object.keys(property.properties).reduce((acc, childPropertyName) => {
			const accCopy = deepCopy(acc)
			const childResult = findSelections(
				[...pathCopy, childPropertyName],
				property.properties[childPropertyName],
				[],
				selectionType
			)
			if (childResult.length > 0) {
				return [...accCopy, ...childResult]
			} else {
				return accCopy
			}
		}, resultCopy)
	}
}

let makeSelected = (attributes, selectionType) => {
	const attributesCopy = deepCopy(attributes)
	const result = attributesCopy.reduce((acc, attribute) => {
		const accCopy = deepCopy(acc)
		const filterable = findSelections(
			[
				{
					id: attribute.id, 
					displayName: attribute.display_name, 
					name: attribute.name,
					isObject: attribute.type === 'object'
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
			return 'List'
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
		default:
			return 'utility-font'
	}
}

let replacePropertyRefs = (property, attributes) => {
	if (property['$ref']) {
		const attributeRef = deepCopy(replacePropertyRefs(attributes.find(attribute => attribute.id === property['$ref']), attributes))
		return {
			...attributeRef,
			deliverable: false,
			filterable: false
		}
	} else if (!property.properties) {
		return {
			...property,
			deliverable: false,
			filterable: false
		}
	} else {
		property = {
			...property,
			deliverable: false,
			filterable: false
		}
		Object.keys(property.properties).map(childPropertyName => {
			property.properties[childPropertyName] = {
				...replacePropertyRefs(property.properties[childPropertyName], attributes),
				deliverable: false,
				filterable: false
			}  
		})
		return property
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

export {
	makePathString,
	getAttributeFromPath,
	findSelections,
	setSelectionRecursively,
	getReadableType,
	getDataTypeIconName,
	replacePropertyRefs,
	makeSelected,
	makeSelectedFromSchemaPreset,
	isExportable
}