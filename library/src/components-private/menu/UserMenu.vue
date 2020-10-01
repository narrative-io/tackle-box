<template lang="pug">
  .user-menu
    .user(v-if="user !== null")
      NioImageTile.avatar(
        src="https://picsum.photos/96/96"
        size="large"
      )
      .user-info
        h4.text-primary-darker {{ appName }} 
        .p-small.text-primary-dark By <span class="nio-bold">{{ developerName }}</span>
    .nav-group(v-for="navGroup in navItems")      
      h3.nio-h6.text-primary-darker {{ navGroup.groupLabel }}
      v-list(nav dense)
        v-list-item(v-for="item in navGroup.items" @click="navItemClicked(item)" :to="item.to")
          v-list-item-icon(v-if="item.icon")
            streamline-icon(:icon="item.icon" :size=24 stroke="#4B5FA7")
          v-list-item-content
            .item.nio-p.text-primary-dark {{ item.label }}     
            .status(v-if="item.status && status === 'locked'") 
              svg(width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg")
                path(d="M12.312 6.875H11.6558V4.90625C11.6558 2.63672 9.76904 0.75 7.49951 0.75C5.20264 0.75 3.34326 2.63672 3.34326 4.90625V6.875H2.68701C1.94873 6.875 1.37451 7.47656 1.37451 8.1875V13.4375C1.37451 14.1758 1.94873 14.75 2.68701 14.75H12.312C13.0229 14.75 13.6245 14.1758 13.6245 13.4375V8.1875C13.6245 7.47656 13.0229 6.875 12.312 6.875ZM8.59326 11.4688C8.59326 12.0977 8.10107 12.5625 7.49951 12.5625C6.87061 12.5625 6.40576 12.0977 6.40576 11.4688V10.1562C6.40576 9.55469 6.87061 9.0625 7.49951 9.0625C8.10107 9.0625 8.59326 9.55469 8.59326 10.1562V11.4688ZM9.46826 6.875H5.53076V4.90625C5.53076 3.83984 6.40576 2.9375 7.49951 2.9375C8.56592 2.9375 9.46826 3.83984 9.46826 4.90625V6.875Z" fill="#415290")
            .status(v-if="item.status && status !== 'locked'" :class="item.status") {{ item.status }}
</template>

<script>

import StreamlineIcon from "@streamlinehq/streamline-icons-vue"
import NioImageTile from '../../components/ImageTile'

export default {
  props: { 
    "developerName": { type: String, required: true },
    "appName": { type: String, required: true },
    "companies": { type: Array, required: false, default: [] },
    "user": { type: Object, required: false, default: null },
    "userInitials": { type: String, required: false, default: "G"},
    "navItems": { type: Array, required: false, default: []}
  },  
  data: () => ({
    showDrawer: false
  }),
  computed: {
    isAdmin() {
      return this.user !== null && this.user.role === 99
    }
  },
  methods: {
    localLogout() {
      this.navItemClicked()
      this.logout()
      this.$router.go()
    },
    goToKB() {
      this.navItemClicked()
      window.open('http://kb.narrative.io/data-streams', '_blank');
    },
    goToPrivacyPolicy() {
      this.navItemClicked()
      window.open('https://www.narrative.io/privacy-policy', '_blank')
    },
    navItemClicked(item) {
      if (item.event) {
        this.$emit('navEvent', item.event)
      }
      this.$emit('navItemClicked')
    }
  },
  watch: {
    companies(val) {
      this.selectedCompany = val.find(company => company.id === parseInt(this.contextualCompanyId))
    },
    selectedCompany(val) {
      if (!val && companies.length > 0) {
        this.selectedCompany = val.find(company => company.id === parseInt(this.contextualCompanyId))
      }
      if (this.selectedCompany.id !== parseInt(this.contextualCompanyId)) {
        this.selectCompanyContext(val)
        this.emptyCart()
        this.$router.go()
      }    
    }
  }, 
  mounted() {
    if (this.companies.length > 0) {
      this.selectedCompany = this.companies.find(company => company.id === parseInt(this.contextualCompanyId))
    }
  }, 
  components: { StreamlineIcon, NioImageTile }
};
</script>

<style lang="sass" scoped>
@import '../../styles/global/_colors'
@import '../../styles/global/_typography'
@import '../../styles/global/_color-helpers'
@import '../../styles/mixins/utility/_center-content'
@import '../../styles/mixins/_image-tile'
@import '../../styles/mixins/_menu'

.user-menu
  +nio-menu  
  .user
    display: flex
    flex-direction: column
    align-items: center
    .avatar
      margin-bottom: 24px
    .user-info
      text-align: center
  .nav-group
    margin-bottom: 24px
    .v-list
      padding-left: 0px
      padding-right: 0px
      .v-list-item 
        padding: 0px 8px
        &.v-list-item--link 
          margin-bottom: 1px !important
          .v-list-item__content
            flex-grow: 2
            display: flex
            justify-content: space-between
            flex-wrap: nowrap
            .item
              flex-shrink: 2
            .status
              flex: none
          .v-list-item__icon
            margin-right: 16px
</style>