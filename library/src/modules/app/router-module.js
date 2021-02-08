let _registeredPath = null

const routerModule = {
	setRegisteredPath(val) {
		_registeredPath = val
	},
	getRegisteredPath() {
		return _registeredPath
	},
	setupRouter(router) {
		router.beforeEach((to, from, next) => {
			if (_registeredPath && _registeredPath === to.fullPath) {
				next()
			} else {
				parent.postMessage({
					name: 'routeChanged',
					payload: to.fullPath
				},"*")
			}
		})
		window.onpopstate = () => {
			parent.postMessage({
				name: 'browserBack',
				payload: null
			},"*")
		} 
	}
}

Object.freeze(routerModule)
export default routerModule