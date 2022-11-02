
import Vue from 'vue'
import axios from 'axios'




let _initCallbackFn = null
let _initialized = false
let _token = null
let _baseURL = null
let _refreshToken = null

const httpModule = (config, {baseURL, token, refreshToken}) => {
  const http = axios.create(config)

  http.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      console.log({error, er: error.response, j: JSON.stringify(error.response)})
      const message = error.response.data.error
      console.log({message})
      if (error.response.status === 401 && message === "expired_token") {
        const payload = new FormData();
        console.log({payload});
        payload.append("refresh_token", "0M22qEH7U+GuK7ulWIy0Lw==")
        payload.append("grant_type", "refresh_token")
        payload.append("client_id", "ec317505e3682dce687ef9aecd39cb72")
        console.log({payload});
        
        //Handle refresh
        try {
          const response = await axios.post(
            `${baseURL}/oauth/token`,
            payload
          );

          const newToken = response.data.access_token
          _token = response.data.access_token
          _refreshToken = response.data.refresh_token
          console.log({_token, _refreshToken})

          error.config.headers[
            "Authorization"
          ] = `bearer ${newToken}`;

          return axios(error.config);
        } catch (error) {
          const message = error.response
          console.log({message})
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
  setupAxios(baseURL, token, refreshToken) {
    const axiosConfig = {
      baseURL: baseURL,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
    Vue.prototype.$nioOpenApi = httpModule(axiosConfig, {baseURL, token, refreshToken})
    _initialized = true
    _token = token
    _baseURL = baseURL
    _refreshToken = refreshToken
    _initCallbackFn(token, baseURL)
  }
}

Object.freeze(openApiModule) 
export default openApiModule