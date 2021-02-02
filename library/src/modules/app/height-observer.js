let _trackedElements = []
let _resizeObservers = {}

let postMessage = (height) => {
	parent.postMessage({
		name: 'heightUpdated',
		payload: height
	},"*")
}

function addResizeObserver(elementName, elementRef) {
	const resizeObserver = new ResizeObserver((val) => {
		heightObserver.elementHeightChanged(elementName, Math.max(val[0].contentRect.height + 150, 600))
	});
	resizeObserver.observe(elementRef)
	_resizeObservers[elementName] = resizeObserver
}

function removeResizeObserver(elementName) {
	_resizeObservers[elementName] = null
}

const heightObserver = {
	addTrackedElement(elementName, elementRef) {
		addResizeObserver(elementName, elementRef)
		_trackedElements.push({
			name: elementName,
			height: 0
		})
	},
	removeTrackedElement(elementName) {
		_trackedElements.pop()
		removeResizeObserver(elementName)
		if (_trackedElements[_trackedElements.length - 1] && _trackedElements[_trackedElements.length - 1].name === elementName) {
			postMessage(_trackedElements[_trackedElements.length - 1].height)
		}
	},
	elementHeightChanged(elementName, newHeight) {
		if (_trackedElements.find(element => element.name === elementName)) {
			_trackedElements.find(element => element.name === elementName).height = newHeight
			if (_trackedElements[_trackedElements.length - 1].name === elementName) {
				postMessage(_trackedElements[_trackedElements.length - 1].height)
			}
		}
	}
}

Object.freeze(heightObserver)
export default heightObserver