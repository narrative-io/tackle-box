import Vue from "vue"
import Vuetify from "vuetify/lib"

import NioButton from "./components/Button.vue"
import NioTextField from "./components/TextField.vue"
import NioSelect from "./components/Select.vue"

Vue.use(Vuetify)

const Components = {
	NioButton,
	NioTextField,
	NioSelect
}

Vue.component("NioButton", NioButton)
Vue.component("NioTextField", NioTextField)
Vue.component("NioSelect", NioSelect)

export { NioButton }
export { NioTextField }
export { NioSelect }

export default Components
