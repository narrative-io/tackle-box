import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import { library } from './fontawesome-svg-core'
import { FontAwesomeIcon } from './vue-fontawesome'
import { faApple } from '../components/icon/fa-icons/apple'
import { faAndroid } from '../components/icon/fa-icons/android'
import { faArrowLeft } from '../components/icon/fa-icons/arrow-left'
import { faChevronDown } from '../components/icon/fa-icons/chevron-down'
import { faChevronLeft } from '../components/icon/fa-icons/chevron-left'
import { faChevronRight } from '../components/icon/fa-icons/chevron-right'
import { faCode } from '../components/icon/fa-icons/code'
import { faExternalLinkAlt } from '../components/icon/fa-icons/external-link'
import { faLock } from '../components/icon/fa-icons/lock'
import { faEllipsisH } from '../components/icon/fa-icons/more'
import { faPlus } from '../components/icon/fa-icons/plus'
import { faSearch } from '../components/icon/fa-icons/search'
import { faTimes } from '../components/icon/fa-icons/times'
import { faTrash } from '../components/icon/fa-icons/trash'

library.add(faCode)
library.add(faApple) 
library.add(faAndroid)
library.add(faArrowLeft)
library.add(faChevronDown)
library.add(faChevronLeft)
library.add(faChevronRight)
library.add(faExternalLinkAlt)
library.add(faLock)
library.add(faEllipsisH)
library.add(faPlus)
library.add(faSearch)
library.add(faTimes)
library.add(faTrash)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Vuetify)

export default new Vuetify()