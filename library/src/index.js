import Vue from "vue";
import Vuetify from "vuetify/lib";

import NioButton from "./components/Button.vue";

Vue.use(Vuetify);

const Components = {
	NioButton
};

Vue.component("NioButton", NioButton);

export { NioButton };

// Export the library as a plugin
export default Components;
