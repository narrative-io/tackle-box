<template lang="pug">
  span.nio-icon(
    v-if="icon && !isUtilityIcon"
    :style="{ height: `${size ? parseInt(size) : 24}px` }"
    @click="click"
  )
    streamline-icon.nio-icon(
      :icon="icon" 
      :size="size ? parseInt(size) : 24"
      :stroke="color"
    )
  span.nio-icon(
    v-else-if="icon && isUtilityIcon"
    :style="{fontSize: size ? `${size}px` : '12px'}"
    @click="click"
  )
    font-awesome-icon(      
      :icon="icon"
      :color="color"
    )
</template>

<script>
import StreamlineIcon from "../../plugins/streamline-icons-vue/dist/index.umd.min.js"
import { NioIconLibrary } from './iconLibrary'
import { FontAwesomeIcon } from '../../plugins/vue-fontawesome'
import { library } from '../../plugins/fontawesome-svg-core'
import { faApple } from './fa-icons/apple'
import { faAndroid } from './fa-icons/android'
import { faArrowLeft } from './fa-icons/arrow-left'
import { faArrowRight } from './fa-icons/arrow-right'
import { faArrowDown } from './fa-icons/arrow-down'
import { faChevronDown } from './fa-icons/chevron-down'
import { faChevronLeft } from './fa-icons/chevron-left'
import { faChevronRight } from './fa-icons/chevron-right'
import { faChevronUp } from './fa-icons/chevron-up'
import { faCode } from './fa-icons/code'
import { faExternalLinkAlt } from './fa-icons/external-link'
import { faLock } from './fa-icons/lock'
import { faEllipsisH } from './fa-icons/more'
import { faPlus } from './fa-icons/plus'
import { faMinus } from './fa-icons/minus'
import { faSearch } from './fa-icons/search'
import { faTimes } from './fa-icons/times'
import { faTimesCircle } from './fa-icons/times-circle'
import { faTrash } from './fa-icons/trash'
import { faDollarSign } from './fa-icons/dollar-sign'
import { faEnvelope } from './fa-icons/envelope'
import { faLink } from './fa-icons/link'
import { faLinkedin } from './fa-icons/linkedin'
import { faTwitter } from './fa-icons/twitter'
import { faEye } from './fa-icons/eye'
import { faEyeSlash } from './fa-icons/eye-slash'
import { faExclamation } from './fa-icons/exclamation'
import { faCheckCircle } from './fa-icons/check-circle'
import { faInfoCircle } from './fa-icons/info'
import { faAsterisk } from './fa-icons/asterisk'
import { faClock } from './fa-icons/clock'
import { faFont } from './fa-icons/font'
import { faHashtag } from './fa-icons/hashtag'
import { faToggleOn } from './fa-icons/toggle-on'
import { faGripVertical } from './fa-icons/grip-vertical'
import { faListOl } from './fa-icons/numbered-list' 
import { faTally } from './fa-icons/tally'
import { faBrackets } from './fa-icons/brackets'
import { faArchive } from './fa-icons/archive'
import { faEllipsisV } from './fa-icons/ellipsis-vertical'
 
export default {
  name: 'nio-icon',
  components: { StreamlineIcon, FontAwesomeIcon },
  props: {
    "name": { type: String, required: true },
    "size": { required: false },
    "color": { type: String, required: false }
  },
  data: () => ({
    icon: null,
    iconLibrary: NioIconLibrary
  }),
  computed: {
    isUtilityIcon() {
      return this.name.indexOf('utility-') > -1
    }
  },
  watch: {
    name() {
      this.icon = this.iconLibrary[this.name]
    }
  },
  mounted() {	
    library.add(faCode)
    library.add(faApple) 
    library.add(faAndroid)
    library.add(faArrowLeft)
    library.add(faArrowRight)
    library.add(faArrowDown)
    library.add(faChevronDown)
    library.add(faChevronLeft)
    library.add(faChevronRight)
    library.add(faChevronUp)
    library.add(faExternalLinkAlt)
    library.add(faLock)
    library.add(faEllipsisH)
    library.add(faPlus)
    library.add(faMinus)
    library.add(faSearch)
    library.add(faTimes)
    library.add(faTrash)
    library.add(faDollarSign)
    library.add(faEnvelope)
    library.add(faLink)
    library.add(faLinkedin)
    library.add(faTwitter)
    library.add(faEye)
    library.add(faEyeSlash)
    library.add(faExclamation)
    library.add(faCheckCircle)
    library.add(faInfoCircle)
    library.add(faAsterisk)
    library.add(faClock)
    library.add(faFont)
    library.add(faGripVertical)
    library.add(faHashtag)
    library.add(faToggleOn)
    library.add(faTimesCircle)
    library.add(faListOl)
    library.add(faTally)
    library.add(faBrackets)
    library.add(faArchive)
    library.add(faEllipsisV)
    this.icon = this.iconLibrary[this.name]
    this.$emit('mounted')
  },
  methods: {
    click() {
      this.$emit('click')
    }
  },
  destroyed() {
    this.$emit('destroyed')
  }
}
</script>

<style lang="sass" scoped>
</style>