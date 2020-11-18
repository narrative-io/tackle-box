import Vue from "vue"
import Vuetify from "vuetify/lib"

import NioButton from "./components/Button"
import NioTextField from "./components/TextField"
import NioSelect from "./components/Select"
import NioAutocomplete from "./components/Autocomplete"
import NioCheckbox from "./components/Checkbox"
import NioSwitch from "./components/Switch"
import NioRadioGroup from "./components/RadioGroup"
import NioRadioButton from "./components/RadioButton"
import NioImageTile from "./components/ImageTile"
import NioIcon from "./components/icon/Icon"
import NioIconFramer from "./components/icon/IconFramer"
import NioFileChooser from "./components/FileChooser"
import NioCard from "./components/Card"
import NioAlert from "./components/Alert"
import NioDivider from "./components/Divider"
import NioExpansionPanel from "./components/ExpansionPanel"
import NioSlatGroup from "./components/slat/SlatGroup"
import NioSlat from "./components/slat/Slat"
import NioSlatLink from "./components/slat/SlatLink"

import { FontAwesomeIcon } from './plugins/vue-fontawesome'

Vue.use(Vuetify)

const Components = {
	NioButton,
	NioTextField,
	NioSelect,
	NioAutocomplete,
	NioCheckbox,
	NioSwitch,
	NioRadioGroup,
	NioRadioButton,
	NioImageTile,
	NioIcon,
	NioIconFramer,
	NioFileChooser,
	NioCard,
	NioAlert,
	NioDivider,
	NioExpansionPanel,
	NioSlatGroup,
	NioSlat,
	NioSlatLink,
	FontAwesomeIcon
}

Vue.component("NioButton", NioButton)
Vue.component("NioTextField", NioTextField)
Vue.component("NioSelect", NioSelect)
Vue.component("NioAutocomplete", NioAutocomplete)
Vue.component("NioCheckbox", NioCheckbox)
Vue.component("NioSwitch", NioSwitch)
Vue.component("NioRadioGroup", NioRadioGroup)
Vue.component("NioRadioButton", NioRadioButton)
Vue.component("NioImageTile", NioImageTile)
Vue.component("NioIcon", NioIcon)
Vue.component("NioIconFramer", NioIconFramer)
Vue.component("NioFileChooser", NioFileChooser)
Vue.component("NioCard", NioCard)
Vue.component("NioAlert", NioAlert)
Vue.component("NioDivider", NioDivider)
Vue.component("NioExpansionPanel", NioExpansionPanel)
Vue.component("NioSlatGroup", NioSlatGroup)
Vue.component("NioSlat", NioSlat)
Vue.component("NioSlatLink", NioSlatLink)
Vue.component('FontAwesomeIcon', FontAwesomeIcon)

export { NioButton }
export { NioTextField }
export { NioSelect }
export { NioAutocomplete }
export { NioCheckbox }
export { NioSwitch }
export { NioRadioGroup }
export { NioRadioButton }
export { NioImageTile }
export { NioIcon }
export { NioIconFramer }
export { NioFileChooser }
export { NioCard }
export { NioAlert }
export { NioDivider }
export { NioExpansionPanel }
export { NioSlatGroup }
export { NioSlat }
export { NioSlatLink }
export { FontAwesomeIcon }

export default Components
