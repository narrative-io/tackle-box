import Vue from "vue"
import Vuetify from "vuetify/lib"

import NioButton from "./components/Button.vue"
import NioTextInput from "./components/TextInput.vue"

Vue.use(Vuetify)

const Components = {
	NioButton,
	NioTextInput
}

Vue.component("NioButton", NioButton)
Vue.component("NioTextInput", NioTextInput)

export { NioButton }

// Export the library as a plugin
export default Components
