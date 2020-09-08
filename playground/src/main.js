import Vue from 'vue'
import App from './App.vue'
import UILibrary from "../../library/dist/narrative-ui-library.umd"

Vue.use(UILibrary)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

