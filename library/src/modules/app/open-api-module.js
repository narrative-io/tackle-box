
import Vue from 'vue'
import axios from 'axios'

const httpModule = (config) => {
  const http = axios.create(config)

  http.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      console.log({error, er: error.response, j: JSON.stringify(error.response)});
      if (error.response.status === 401) {
        const payload = {
          access_token: authData.token,
          refresh_token: authData.refreshToken,
          grant_type: refresh_token,

        };
        
        //Handle refresh
        const response = await axios.post(
          "/auth/refreshtoken",
          payload
        );
        
        error.config.headers[
          "Authorization"
        ] = `bearer ${response.data.access_token}`;
        return axios(error.config);
      } else {
        return Promise.reject(error);
      }
    }
  )

  return http;
}


let _initCallbackFn = null
let _initialized = false
let _token = null
let _baseURL = null
let _refreshToken = null

const openApiModule = {
  initCallback(callbackFn) {
    _initCallbackFn = callbackFn
    if (_initialized) {
      _initCallbackFn(_token, _baseURL)
    }
  },	
  setupAxios(baseURL, token, refreshToken) {
    const axiosConfig = {
      baseURL: baseURL,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
    Vue.prototype.$nioOpenApi = httpModule(axiosConfig)
    _initialized = true
    _token = token
    _baseURL = baseURL
    _refreshToken = refreshToken
    _initCallbackFn(token, baseURL)
  }
}

Object.freeze(openApiModule) 
export default openApiModule