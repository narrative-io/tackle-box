
import Vue from 'vue'
import axios from 'axios'

let _initCallbackFn = null
let _initialized = false

const openApiModule = {
	initialize(callbackFn) {
		_initCallbackFn = callbackFn
		if (_initialized) {
			_initCallbackFn()
		}
	},	
	setupAxios(baseurl, token) {
		console.log("setupAxios")
		const axiosConfig = {
			baseURL: baseurl,
			headers: {
				'Authorization': `Bearer ${token}`
			}
		}
		Vue.prototype.$axios = axios.create(axiosConfig)
		console.log("vue")
		console.log(Vue)
		_initialized = true
		_initCallbackFn()
	}
}

Object.freeze(openApiModule) 
export default openApiModule