
import Vue from 'vue'
import axios from 'axios'

let _initCallbackFn = null
let _initialized = false
let _token = null

const openApiModule = {
	initCallback(callbackFn) {
		_initCallbackFn = callbackFn
		if (_initialized) {
			_initCallbackFn(_token)
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
		_token = token
		_initCallbackFn(token)
	}
}

Object.freeze(openApiModule) 
export default openApiModule