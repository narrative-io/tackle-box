import Vue from 'vue'
import App from './App.vue'
// import UILibrary from "@narrative.io/tackle-box"
import UILibrary from "../../library/dist/tackle-box.umd"
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

Vue.use(UILibrary)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

