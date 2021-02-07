let _registeredPath = null
let _routeInitialized = false

const routingModule = {
	setRegisteredPath(val) {
		_registeredPath = val
	},
	getRegisteredPath() {
		return _registeredPath
	},
	setRouteInitialized(val) {
		_routeInitialized = val
	},
	getRouteInitialized() {
		return _routeInitialized
	}
}

Object.freeze(routingModule)
export default routingModule