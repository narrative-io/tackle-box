import Vue from 'vue'
import axios from 'axios'
import heightObserver from './height-observer'

export default {
	data: () => ({
		nioServices: null,
		nioServicesData: {
			registeredPath: null,
			lists: [],
			listsLoading: false,
			paymentMethod: null,
			paymentMethodLoading: false,
			user: null
		}
	}),	
	computed: {
		nioRegisteredPath() {
			return this.nioServicesData.registeredPath
		},
		nioLists() {
			return this.nioServicesData.lists
		},
		nioListsLoading() {
			return this.nioServicesData.listsLoading
		}
	},
	methods: {
		nioSetRegisteredPath(val) {
			this.nioServicesData.registeredPath = val
		},
		nioSetLists(val) {
			this.nioServicesData.lists = val
		},
		nioSetListsLoading(val) {
			this.nioServicesData.listsLoading = val
		},
		nioInitializeApplication: (app) => {
			window.onpopstate = () => {
				parent.postMessage({
					name: 'browserBack',
					payload: null
				},"*")
			} 
			if (window.addEventListener) {
				window.addEventListener("message", app.nioHandleMessage, false);
			}
			else {
				window.attachEvent("onmessage", app.nioHandleMessage);
			}
			// app.$store.registerModule('nioServices', servicesStore);
			heightObserver.addTrackedElement('document', document.getElementsByTagName('main')[0])
		},
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
			console.log(evt)
			switch (evt.data.name) {
				case 'auth':
					this.$store.dispatch('nioServices/SET_USER', evt.data.payload.user)
					this.nioSetupAxios(evt.data.payload.baseurl, evt.data.payload.token)
					if (this.nioServices && this.nioServices.length) {
						this.nioInitServices()
					}
					break;
				case 'initServices':
					this.nioServices = evt.data.payload
					if (this.$axios) {
						this.initServices()
					}
					break;
				case 'paymentMethod':
					this.$store.dispatch('nioServices/SET_PAYMENT_METHOD_LOADING', false)
					this.$store.dispatch('nioServices/SET_PAYMENT_METHOD', evt.data.payload)
					break;
				case 'setRegisteredPath': 
					// this.$store.dispatch('nioServices/SET_REGISTERED_PATH', evt.data.payload)
					this.nioSetRegisteredPath(evt.data.payload)
					this.$router.push(evt.data.payload)
					break;
				default:
					break;
			}	
		},
		nioInitServices() {
      this.nioServices.forEach(serviceName => {
        switch (serviceName) {
          case 'lists':
            this.nioFetchLists()
            break;
          default:
            break;
        }
      })
    },
    nioFetchLists() {
      return new Promise((resolve, reject) => {
        this.$store.dispatch('nioServices/SET_LISTS_LOADING', true)
        this.$axios.get(
          '/lists?schema=id&status=active'
        ).then(res => {
          this.$store.dispatch('nioServices/SET_LISTS_LOADING', false)
          this.$store.dispatch('nioServices/SET_LISTS', res.data.records)
        }).catch(err => {
          console.log(err.response)
        })
      }) 
    },
		nioSetupAxios(baseurl, token) {
			const axiosConfig = {
				baseURL: baseurl,
				headers: {
					'Authorization': `Bearer ${token}`
				}
			}
			Vue.prototype.$axios = axios.create(axiosConfig)
		}
	},
	mounted() {
		
	}
}





