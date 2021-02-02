import Vue from 'vue'
import axios from 'axios'
import heightObserver from './height-observer'
import servicesStore from './store/servicesStore'

export default {
	data: () => ({
    nioServices: null
  }),	
	methods: {
		nioInitializeApplication: (app) => {
			app.$store.registerModule('nioServices', servicesStore);
			console.log(app)
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
					this.setupAxios(evt.data.payload.baseurl, evt.data.payload.token)
					if (this.nioServices && this.nioServices.length) {
						this.initServices()
					}
					break;
				case 'initServices':
					this.nioServices = evt.data.payload
					if (this.$nioAxios) {
						this.initServices()
					}
					break;
				case 'paymentMethod':
					this.$store.dispatch('nioServices/SET_PAYMENT_METHOD_LOADING', false)
					this.$store.dispatch('nioServices/SET_PAYMENT_METHOD', evt.data.payload)
					break;
				case 'setRegisteredPath': 
					this.$store.dispatch('nioServices/SET_REGISTERED_PATH', evt.data.payload)
					this.$router.push(evt.data.payload)
					break;
				default:
					break;
			}	
		},
		initServices() {
      this.nioServices.forEach(serviceName => {
        switch (serviceName) {
          case 'lists':
            this.fetchLists()
            break;
          default:
            break;
        }
      })
    },
    fetchLists() {
      return new Promise((resolve, reject) => {
        this.$store.dispatch('nioServices/SET_LISTS_LOADING', true)
        this.$nioAxios.get(
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
			Vue.prototype.$nioAxios = axios.create(axiosConfig)
		}
	},
	mounted() {
		window.onpopstate = () => {
      parent.postMessage({
        name: 'browserBack',
        payload: null
      },"*")
    } 
		if (window.addEventListener) {
      window.addEventListener("message", this.nioHandleMessage, false);
    }
    else {
      window.attachEvent("onmessage", this.nioHandleMessage);
    }
	}
}





