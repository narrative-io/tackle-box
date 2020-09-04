import Vue from 'vue'
import App from './App.vue'
import UILibrary from "narrative-ui-library"

Vue.use(UILibrary)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

