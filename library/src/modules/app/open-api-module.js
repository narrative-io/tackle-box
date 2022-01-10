
import Vue from 'vue'
import axios from 'axios'

let _initCallbackFn = null
let _initialized = false
let _token = null
let _baseURL = null

const openApiModule = {
  initCallback(callbackFn) {
    _initCallbackFn = callbackFn
    if (_initialized) {
      _initCallbackFn(_token, _baseURL)
    }
  },	
  setupAxios(baseURL, token) {
    const axiosConfig = {
      baseURL: baseURL,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
    Vue.prototype.$nioOpenApi = axios.create(axiosConfig)
    _initialized = true
    _token = token
    _baseURL = baseURL
    _initCallbackFn(token, baseURL)
  }
}

Object.freeze(openApiModule) 
export default openApiModule