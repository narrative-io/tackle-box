import heightObserver from './height-observer'
import messageHandler from './message-handler'

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
		},
		nioHandleMessage (evt) {
			messageHandler.handleMessage(evt)
		}
	},
	mounted() {
		if (window.addEventListener) {
      window.addEventListener("message", this.handleMessage, false);
    }
    else {
      window.attachEvent("onmessage", this.handleMessage);
    }
	}
}





