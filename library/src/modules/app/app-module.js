import heightObserver from './height-observer'

export default {
	methods: {
		nioAddHeightTrackedElement: (elementName, elementRef) => {
			console.log("add")
			console.log(elementName)
			heightObserver.addTrackedElement(elementName, elementRef)
		},
		nioRemoveHeightTrackedElement: (elementName) => {
			console.log("remove")
			console.log(elementName)
			heightObserver.removeTrackedElement(elementName)
		}
	}
}




