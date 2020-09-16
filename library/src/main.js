import Vue from "vue";
import App from "./App.vue";
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  components: { App },
  vuetify,
  render: (h) => h(App),
}).$mount("#app");