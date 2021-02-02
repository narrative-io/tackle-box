export default {
	handleMessage: (evt) => {
		console.log(evt)
		switch (evt.data.name) {
			case 'auth':
				// this.$store.dispatch(ServicesMutations.SET_USER, evt.data.payload.user)
				// this.setupAxios(evt.data.payload.baseurl, evt.data.payload.token)
				// if (this.services && this.services.length) {
				// 	this.initServices()
				// }
				break;
			case 'initServices':
				// this.services = evt.data.payload
				// if (this.$axios) {
				// 	this.initServices()
				// }
				break;
			case 'paymentMethod':
				// this.$store.dispatch(ServicesMutations.SET_PAYMENT_METHOD_LOADING, false)
				// this.$store.dispatch(ServicesMutations.SET_PAYMENT_METHOD, evt.data.payload)
				break;
			case 'setRegisteredPath': 
				// this.$store.dispatch(ServicesMutations.SET_REGISTERED_PATH, evt.data.payload)
				// this.$router.push(evt.data.payload)
				break;
			default:
				break;
		}
	}
}