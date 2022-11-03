
import Vue from 'vue'
import axios from 'axios'




let _initCallbackFn = null
let _initialized = false
let _token = null
let _baseURL = null
let _refreshToken = null

const httpModule = (config, {baseURL, token, refreshToken, clientId}) => {
  const http = axios.create(config)

  http.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      if (error.response.status === 401 && message === "expired_token") {
       
        const  payload = new URLSearchParams();
        payload.append('refresh_token', "hfVBMBF5+RRulm596B9JmA==");
        payload.append('grant_type', 'refresh_token');
        payload.append('client_id', clientId);
       
        //Handle refresh
        try {
          const response = await axios.post(
            `${baseURL}/oauth/token`,
            payload
          );

          const newToken = response.data.access_token
          _token = response.data.access_token
          _refreshToken = response.data.refresh_token

          error.config.headers[
            "Authorization"
          ] = `bearer ${newToken}`;

          return axios(error.config);
        } catch (error) {
          console.log({er: JSON.stringify(error)})
          return Promise.reject(error);
        }
       
      } else {
        return Promise.reject(error);
      }
    }
  )

  return http;
}

const openApiModule = {
  initCallback(callbackFn) {
    _initCallbackFn = callbackFn
    if (_initialized) {
      _initCallbackFn(_token, _baseURL)
    }
  },	
  setupAxios({baseURL, token, refreshToken, clientId}) {
    const axiosConfig = {
      baseURL: baseURL,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
    Vue.prototype.$nioOpenApi = httpModule(axiosConfig, {baseURL, token, refreshToken, clientId})
    _initialized = true
    _token = token
    _baseURL = baseURL
    _refreshToken = refreshToken
    _initCallbackFn(token, baseURL)
  }
}

Object.freeze(openApiModule) 
export default openApiModule