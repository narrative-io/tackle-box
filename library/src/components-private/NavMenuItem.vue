<template lang="pug">
  v-list-item.nio-nav-menu-list-item(
    v-bind="$attrs"
    v-on="$listeners"
    :class="status ? `status-${status}` : ''"
  )
    v-list-item-icon(v-if="icon")
      streamline-icon.icon-light(:icon="icon" :size=24 stroke="#4B5FA7")
      streamline-icon.icon-dark(:icon="icon" :size=24 stroke="#323f6f")
    v-list-item-content
      .item.nio-p.text-primary-dark {{ label }}
      .status(v-if="status && status === 'locked'") 
        svg(width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg")
          path(d="M12.312 6.875H11.6558V4.90625C11.6558 2.63672 9.76904 0.75 7.49951 0.75C5.20264 0.75 3.34326 2.63672 3.34326 4.90625V6.875H2.68701C1.94873 6.875 1.37451 7.47656 1.37451 8.1875V13.4375C1.37451 14.1758 1.94873 14.75 2.68701 14.75H12.312C13.0229 14.75 13.6245 14.1758 13.6245 13.4375V8.1875C13.6245 7.47656 13.0229 6.875 12.312 6.875ZM8.59326 11.4688C8.59326 12.0977 8.10107 12.5625 7.49951 12.5625C6.87061 12.5625 6.40576 12.0977 6.40576 11.4688V10.1562C6.40576 9.55469 6.87061 9.0625 7.49951 9.0625C8.10107 9.0625 8.59326 9.55469 8.59326 10.1562V11.4688ZM9.46826 6.875H5.53076V4.90625C5.53076 3.83984 6.40576 2.9375 7.49951 2.9375C8.56592 2.9375 9.46826 3.83984 9.46826 4.90625V6.875Z" fill="#415290")
      .status(v-if="status && status !== 'locked'" :class="status") 
        .status-content-wrapper
          .status-content.text-c-white {{ status }}
</template>

<script>
import StreamlineIcon from "@streamlinehq/streamline-icons-vue"

export default {
  name: 'nio-nav-menu-item',
  props: {
    "label": { type: String, required: true },
    "icon": { type: Array, required: false},
    "status": { type: String, required: false }
  },
  data: () => ({
    
  }),
  methods: {
  
  },
  mounted() {	
    this.$emit('mounted')
  },
  destroyed() {
    this.$emit('destroyed')
  },
  components: { StreamlineIcon }

}
</script>

<style lang="sass" scoped>
@import '../styles/global/_colors'
@import '../styles/global/_typography'
@import '../styles/global/_color-helpers'
@import '../styles/mixins/utility/_center-content'

.nio-nav-menu-list-item 
  padding: 0px 8px !important
  &.v-list-item--link 
    margin-bottom: 1px !important
    ::v-deep .v-list-item__content
      flex-grow: 2
      display: flex
      justify-content: space-between
      flex-wrap: nowrap  
      .item
        flex-shrink: 2
      .status
        flex: none
        border-radius: 2px
        padding: 2px 3px 1px 4px
        &.new
          background-color: $c-seagreen-light
        &.coming
          background-color: $c-coral-light
        &.updated
          background-color: $c-aqua-light
        &.alpha, &.beta
          background-color: $c-primary-dark
        .status-content-wrapper
          width: 100%
          height: 100%
          +nio-center-content
          .status-content
            font-weight: 600
            font-size: 9px
            letter-spacing: 0.4px
            text-transform: uppercase
            color: $c-white                    
    .v-list-item__icon
      margin-right: 16px
      .icon-dark
        display: none
    &:hover
      background-color: darken($c-canvas, 2) !important
      .item
        color: darken($c-primary-darker, 2) !important
      .status
        &.new
          background-color: darken($c-seagreen-light, 15)
        &.coming
          background-color: darken($c-coral-light, 15)
        &.updated
          background-color: darken($c-aqua-light, 15)
        &.alpha, &.beta
          background-color: darken($c-primary-dark, 15)   
      .v-list-item__icon 
        .icon-dark
          display: flex
        .icon-light
          display: none  
  &.status-coming, &.status-locked
    pointer-events: none !important
    cursor: initial
    .item
      opacity: 0.6
    .v-list-item__icon
      opacity: 0.6  
</style>
