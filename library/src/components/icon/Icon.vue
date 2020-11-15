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
import { faCode } from './fa-icons/code'
import { faExternalLinkAlt } from './fa-icons/external-link'
import { faLock } from './fa-icons/lock'
import { faEllipsisH } from './fa-icons/more'
import { faPlus } from './fa-icons/plus'
import { faSearch } from './fa-icons/search'
import { faTimes } from './fa-icons/times'
import { faTrash } from './fa-icons/trash'
import { faDollarSign } from './fa-icons/dollar-sign'
import { faEnvelope } from './fa-icons/envelope'
import { faLink } from './fa-icons/link'
import { faLinkedin } from './fa-icons/linkedin'
import { faTwitter } from './fa-icons/twitter'
import { faEye } from './fa-icons/eye'
import { faEyeSlash } from './fa-icons/eye-slash'
import { faExclamation } from './fa-icons/exclamation'
 
export default {
  name: 'nio-icon',
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
  methods: {
    click() {
      this.$emit('click')
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
    library.add(faExternalLinkAlt)
    library.add(faLock)
    library.add(faEllipsisH)
    library.add(faPlus)
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
    this.icon = this.iconLibrary[this.name]
    this.$emit('mounted')
  },
  destroyed() {
    this.$emit('destroyed')
  },
  watch: {
    name() {
      this.icon = this.iconLibrary[this.name]
    }
  },
  components: { StreamlineIcon, FontAwesomeIcon }
}
</script>

<style lang="sass" scoped>
  .nio-icon
</style>