import Vue from "vue";
// import Vuex from 'vuex'
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./plugins/router"
import AppModule from "@/modules/app/app-module"

// Vue.use(Vuex)
// let store = new Vuex.Store({
// 	state: {},
// 	mutations: {},
//   actions: {},
//   getters: {}
// })

Vue.config.productionTip = false;
Vue.mixin(AppModule)

new Vue({
	router,
	// store: new Vuex.Store(store),
  components: { App },
  vuetify,
  render: (h) => h(App),
}).$mount("#app");