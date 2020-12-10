<template lang="pug">
  v-list-item.nio-nav-menu-item(
    v-bind="$attrs"
    v-on="$listeners"
    :class="status ? `status-${status}` : ''"
  )
    v-list-item-icon(v-if="icon")
      NioIcon.icon-light(:name="icon" color="#4B5FA7")
      NioIcon.icon-dark(:name="icon" color="#323f6f")
    v-list-item-content
      .item.nio-p.text-primary-dark {{ label }}
      .modifiers
        .locked(v-if="locked")
          svg(width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg")
            path(d="M12.312 6.875H11.6558V4.90625C11.6558 2.63672 9.76904 0.75 7.49951 0.75C5.20264 0.75 3.34326 2.63672 3.34326 4.90625V6.875H2.68701C1.94873 6.875 1.37451 7.47656 1.37451 8.1875V13.4375C1.37451 14.1758 1.94873 14.75 2.68701 14.75H12.312C13.0229 14.75 13.6245 14.1758 13.6245 13.4375V8.1875C13.6245 7.47656 13.0229 6.875 12.312 6.875ZM8.59326 11.4688C8.59326 12.0977 8.10107 12.5625 7.49951 12.5625C6.87061 12.5625 6.40576 12.0977 6.40576 11.4688V10.1562C6.40576 9.55469 6.87061 9.0625 7.49951 9.0625C8.10107 9.0625 8.59326 9.55469 8.59326 10.1562V11.4688ZM9.46826 6.875H5.53076V4.90625C5.53076 3.83984 6.40576 2.9375 7.49951 2.9375C8.56592 2.9375 9.46826 3.83984 9.46826 4.90625V6.875Z" fill="#415290")
        NioPill(v-if="status" :text="status") 
</template>

<script>

import NioIcon from './icon/Icon'
import NioPill from './Pill'

export default {
  name: 'nio-nav-menu-item',
  props: {
    "label": { type: String, required: true },
    "icon": { type: String, required: false},
    "status": { type: String, required: false },
    "locked": { type: Boolean, required: false, default: false}
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
  components: { NioIcon, NioPill }

}
</script>

<style lang="sass" scoped>
  @import "../styles/mixins/_nav-menu-item"
</style>
