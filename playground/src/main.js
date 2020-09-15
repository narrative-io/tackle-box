import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import UILibrary from "../../library/dist/tackle-box.umd"

Vue.config.productionTip = false;
// Vue.use(UILibrary)

new Vue({
  components: { App },
  vuetify,
  render: (h) => h(App),
}).$mount("#app");