import Vue from 'vue'
import axios from 'axios'
import heightObserver from './height-observer'
import servicesStore from './store/servicesStore'
import routingModule from '@/modules/app/routing-module'

export default {
	data: () => ({
		nioServices: null
  }),	
	methods: {
		nioInitializeApplication: (app) => {
			app.$router.beforeEach((to, from, next) => {
				routingModule.setRouteInitialized(true)
				console.log(routingModule.getRegisteredPath())
				console.log(to.fullPath)
				if (routingModule.getRegisteredPath() && routingModule.getRegisteredPath() === to.fullPath) {
					next()
				} else {
					parent.postMessage({
						name: 'routeChanged',
						payload: to.fullPath
					},"*")
				}
			})
			window.onpopstate = () => {
				console.log("BACK")
				parent.postMessage({
					name: 'browserBack',
					payload: null
				},"*")
			} 
			if (window.addEventListener) {
				window.addEventListener("message", app.nioHandleMessage, false);
			} else {
				window.attachEvent("onmessage", app.nioHandleMessage);
			}
			app.$store.registerModule('nioServices', servicesStore);
			heightObserver.addTrackedElement('document')
    	const resizeObserver = new ResizeObserver((val) => {
        heightObserver.elementHeightChanged('document', val[0].contentRect.height)
      })
			resizeObserver.observe(document.getElementsByTagName('main')[0])
		},
		nioAddHeightTrackedElement: (elementName, elementRef) => {
			heightObserver.addTrackedElement(elementName)
			const resizeObserver = new ResizeObserver((val) => {
				heightObserver.elementHeightChanged(elementName, Math.max(val[0].contentRect.height + 150, 600))
			});
			resizeObserver.observe(elementRef)
		},
		nioRemoveHeightTrackedElement: (elementName) => {
			heightObserver.removeTrackedElement(elementName)
		},
		nioHandleMessage (evt) {
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
					console.log('this.$route.fullPath')
					console.log(this.$route.fullPath)
					console.log("PAYLOAD")
					console.log(evt.data.payload)
					routingModule.setRegisteredPath(evt.data.payload)
					if (routingModule.getRouteInitialized() === true && evt.data.payload !== this.$route.fullPath) {
						this.$router.push(evt.data.payload)
					}
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





