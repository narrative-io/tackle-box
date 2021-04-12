import Vue from "vue"
import Vuetify from "vuetify/lib"
import AppModule from '@/modules/app/app-module'

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
import NioLinkSlat from "./components/slat/types/LinkSlat"
import NioSummarySlat from "./components/slat/types/SummarySlat"
import NioIconLinkSlat from "./components/slat/assembled/IconLinkSlat"
import NioImageTileLinkSlat from "./components/slat/assembled/ImageTileLinkSlat"
import NioStepper from "./components/stepper/Stepper"
import NioStep from "./components/stepper/Step"
import NioSlatTable from "./components/table/SlatTable"
import NioOptionsGrid from "./components/options-grid/OptionsGrid"
import NioOptionsGridItem from "./components/options-grid/OptionsGridItem"
import NioBudgetOptions from "./components/options-grid/BudgetOptions"
import NioBudgetOption from "./components/options-grid/BudgetOption"
import NioSourceOption from "./components/options-grid/SourceOption"
import NioPill from "./components/Pill"
import NioChargeSummary from "./components/ChargeSummary"
import NioDialog from './components/Dialog'
import NioFilterGroup from './components/filter/FilterGroup'
import NioFilter from './components/filter/Filter'
import NioTabs from './components/Tabs'
import NioSlider from './components/Slider'
import NioDateField from './components/DateField'
import NioTextarea from './components/Textarea'

import NioRouterModule from './modules/app/router-module'
import NioOpenApiModule from './modules/app/open-api-module'
import NioHeightObserver from './modules/app/height-observer'

import { FontAwesomeIcon } from './plugins/vue-fontawesome'

function setTheme() {
	let style = document.documentElement.style;
	const primary = style.getPropertyValue("--theme-c-primary")
	console.log(primary)
	if (!primary) {
		console.log("setting primary")
		style.setProperty("--theme-c-primary", '#1438F5')
	}
}
setTheme()
Vue.use(Vuetify)
Vue.mixin(AppModule)

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
	NioLinkSlat,
	NioIconLinkSlat,
	NioSummarySlat,
	NioImageTileLinkSlat,
	NioStepper,
	NioStep,
	NioSlatTable,
	NioOptionsGrid,
	NioOptionsGridItem,
	NioBudgetOptions,
	NioBudgetOption,
	NioSourceOption,
	NioPill,
	NioChargeSummary,
	NioDialog,
	NioFilterGroup,
	NioFilter,
	NioTabs,
	NioSlider,
	NioDateField,
	NioTextarea,
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
Vue.component("NioLinkSlat", NioLinkSlat)
Vue.component("NioIconLinkSlat", NioIconLinkSlat)
Vue.component("NioSummarySlat", NioSummarySlat)
Vue.component("NioImageTileLinkSlat", NioImageTileLinkSlat)
Vue.component("NioStepper", NioStepper)
Vue.component("NioStep", NioStep)
Vue.component("NioSlatTable", NioSlatTable)
Vue.component("NioOptionsGrid", NioOptionsGrid)
Vue.component("NioOptionsGridItem", NioOptionsGridItem)
Vue.component("NioBudgetOptions", NioBudgetOptions)
Vue.component("NioBudgetOption", NioBudgetOption)
Vue.component("NioSourceOption", NioSourceOption)
Vue.component("NioPill", NioPill)
Vue.component("NioChargeSummary", NioChargeSummary)
Vue.component("NioDialog", NioDialog)
Vue.component("NioFilterGroup", NioFilterGroup)
Vue.component("NioFilter", NioFilter)
Vue.component("NioDialog", NioDialog)
Vue.component("NioTabs", NioTabs)
Vue.component("NioSlider", NioSlider)
Vue.component("NioDateField", NioDateField)
Vue.component("NioTextarea", NioTextarea)

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
export { NioLinkSlat }
export { NioIconLinkSlat }
export { NioSummarySlat }
export { NioImageTileLinkSlat }
export { NioStepper }
export { NioStep }
export { NioSlatTable }
export { NioOptionsGrid }
export { NioOptionsGridItem }
export { NioBudgetOptions }
export { NioBudgetOption }
export { NioSourceOption }
export { NioPill }
export { NioChargeSummary }
export { NioDialog }
export { NioFilterGroup }
export { NioFilter }
export { NioTabs }
export { NioSlider }
export { NioDateField }
export { NioTextarea }
export { FontAwesomeIcon }
export { NioRouterModule }
export { NioHeightObserver }
export { NioOpenApiModule }

export default Components
