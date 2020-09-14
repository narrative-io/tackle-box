import Vue from "vue"
import Vuetify from "vuetify/lib"

import NioButton from "./components/Button.vue"
import NioTextField from "./components/TextField.vue"

Vue.use(Vuetify)

const Components = {
	NioButton,
	NioTextField
}

Vue.component("NioButton", NioButton)
Vue.component("NioTextField", NioTextField)

export { NioButton }
export { NioTextField }

export default Components
