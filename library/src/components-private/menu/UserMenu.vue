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
          v-list-item-icon
            streamline-icon(:icon="item.icon" :size=24 stroke="#4B5FA7")
          v-list-item-content
            .item.nio-p.text-primary-dark {{ item.label }}                                 
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
    navItemClicked() {
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
          .v-list-item__icon
            margin-right: 16px
</style>