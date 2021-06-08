import heightObserver from './height-observer'
import routerModule from './router-module'
import openApiModule from './open-api-module'
import { mapGetters } from 'vuex'

export default {
  data: () => ({
		nioServices: null,
		nioUserTier: null
	}),	
	computed: {
		...mapGetters('nioServices', {
			nioLists: 'lists',
			nioListsLoading: 'listsLoading',
			nioPaymentMethod: 'paymentMethod',
			nioPaymentMethodLoading: 'paymentMethodLoading',
			nioInvoiceAuthorized: 'invoiceAuthorized',
			nioUser: 'user',
			nioTier: 'tier'
		})
	},	
  methods: {
    nioInitializeApplication: (app) => {
      if (window.addEventListener) {
        window.addEventListener("message", app.nioHandleMessage, false);
      } else {
        window.attachEvent("onmessage", app.nioHandleMessage);
      }
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
					this.$store.dispatch('nioServices/SET_TIER', evt.data.payload.tier)
          openApiModule.setupAxios(evt.data.payload.baseurl, evt.data.payload.token)
          if (this.nioServices && this.nioServices.length) {
            this.nioInitServices()
          }
          break;
        case 'initServices':
          this.nioServices = evt.data.payload
          openApiModule.initCallback(this.nioInitServices)
          break;
        case 'paymentMethod':
          this.$store.dispatch('nioServices/SET_PAYMENT_METHOD_LOADING', false)
          this.$store.dispatch('nioServices/SET_PAYMENT_METHOD', evt.data.payload)
					break;
				case 'invoiceAuthorized': 
					this.$store.dispatch('nioServices/SET_INVOICE_AUTHORIZED', true)
					break;
        case 'setRegisteredPath': 
          routerModule.setRegisteredPath(evt.data.payload)
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
        this.$nioOpenApi.get(
          '/lists?schema=id&status=active'
        ).then(res => {
          this.$store.dispatch('nioServices/SET_LISTS_LOADING', false)
          this.$store.dispatch('nioServices/SET_LISTS', res.data.records)
        }).catch(err => {
          console.log(err.response)
        })
      }) 
		}
  }
}





