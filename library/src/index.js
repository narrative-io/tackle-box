import Vue from "vue"
import Vuetify from "vuetify/lib"

import NioButton from "./components/Button.vue"
import NioTextField from "./components/TextField.vue"
import NioSelect from "./components/Select.vue"
import NioCheckbox from "./components/Checkbox.vue"

Vue.use(Vuetify)

const Components = {
	NioButton,
	NioTextField,
	NioSelect,
	NioCheckbox
}

Vue.component("NioButton", NioButton)
Vue.component("NioTextField", NioTextField)
Vue.component("NioSelect", NioSelect)
Vue.component("NioCheckbox", NioCheckbox)

export { NioButton }
export { NioTextField }
export { NioSelect }
export { NioCheckbox }

export default Components
