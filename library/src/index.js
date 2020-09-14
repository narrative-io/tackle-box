import Vue from "vue"
import Vuetify from "vuetify/lib"

import NioButton from "./components/Button.vue"
import NioTexField from "./components/TextField.vue"

Vue.use(Vuetify)

const Components = {
	NioButton,
	NioTextField
}

Vue.component("NioButton", NioButton)
Vue.component("NioTextField", NioTextField)

export { NioButton }

// Export the library as a plugin
export default Components
