import Vue from "vue";
// import Vuex from 'vuex'
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import nioServices from '../src/modules/app/store/servicesStore'
import AppModule from "@/modules/app/app-module"
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
	state: {
		test: null
	},
	mutations: {},
  actions: {},
	getters: {},
	modules: {
    nioServices: nioServices,
  }
})

Vue.config.productionTip = false;
Vue.mixin(AppModule)

new Vue({
	store: store,
  components: { App },
  vuetify,
  render: (h) => h(App),
}).$mount("#app");