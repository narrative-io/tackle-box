
import Vue from 'vue'
import axios from 'axios'

let _initCallbackFn = null
let _initialized = false

const openApiModule = {
	initCallback(callbackFn) {
		_initCallbackFn = callbackFn
		if (_initialized) {
			_initCallbackFn()
		}
	},	
	setupAxios(baseurl, token) {
		const axiosConfig = {
			baseURL: baseurl,
			headers: {
				'Authorization': `Bearer ${token}`
			}
		}
		Vue.prototype.$nioOpenApi = axios.create(axiosConfig)
		_initialized = true
		_initCallbackFn()
	}
}

Object.freeze(openApiModule) 
export default openApiModule