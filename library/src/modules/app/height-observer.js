let _trackedElements = []

let postMessage = (height) => {
	parent.postMessage({
		name: 'heightUpdated',
		payload: height
	},"*")
}
const heightObserver = {
	addTrackedElement(elementName) {
		_trackedElements.push({
			name: elementName,
			height: 0
		})
		console.log(_trackedElements)
	},
	removeTrackedElement() {
		_trackedElements.pop()
		postMessage(_trackedElements[_trackedElements.length - 1].height)
		console.log(_trackedElements)
	},
	elementHeightChanged(elementName, newHeight) {
		if (_trackedElements.find(element => element.name === elementName)) {
			if (_trackedElements[_trackedElements.length - 1].name === elementName) {
				_trackedElements.find(element => element.name === elementName).height = newHeight
				postMessage(_trackedElements[_trackedElements.length - 1].height)
			}
		}
	}
}

Object.freeze(heightObserver)
export default heightObserver