import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./plugins/router"
import AppModule from "@/modules/app/app-module"

Vue.config.productionTip = false;
Vue.mixin(AppModule)

new Vue({
	router,
  components: { App },
  vuetify,
  render: (h) => h(App),
}).$mount("#app");