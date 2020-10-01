<template lang="pug">
  .user-menu
    .submenu.user(v-if="user !== null")
      NioImageTile.avatar(
        src="https://picsum.photos/96/96"
        size="large"
      )
      .user-info
        h4.text-primary-darker {{ appName }} 
        .p-small.text-primary-dark By <span class="nio-bold">{{ developerName }}</span>
      
    //- .pages
      //- h3.h6.text-primary-darker App
      //- v-list.pages-list(nav dense)
        //- v-list-item(@click="navItemClicked" to="/products")
        //-   v-list-item-content
        //-     .item.button-label-small.text-primary-dark Data Streams
        //- //- v-list-item(@click="navItemClicked" to="/suppliers")
        //-   v-list-item-content
        //-     .item.button-label-small.text-primary-dark Providers
        //- v-list-item(@click="navItemClicked" to="/apps")
        //-   v-list-item-content
        //-     .item.button-label-small.text-primary-dark Apps 
        //- v-list-item(@click="navItemClicked" to="/cart")
        //-   v-list-item-content  
        //-     .item.button-label-small.text-primary-dark Your Cart
        //- v-list-item(@click="navItemClicked" to="/subscriptions")
        //-   v-list-item-content    
        //-     .item.button-label-small.text-primary-dark Subscriptions
    //- .submenu.manage
    //-   h3.h6.text-primary-darker Account Settings
    //-   v-list(nav dense)
    //-     v-list-item(@click="navItemClicked" to="/subscriptions")
    //-       v-list-item-icon
    //-         img(src="https://cdn.narrative.io/images/data-stream/images/icon-stream.svg" alt="subscription icon")
    //-       v-list-item-content
    //-         .item.body.text-primary-dark Data Stream Subscriptions
    //-     v-list-item(@click="navItemClicked" to="/suppliers")
    //-       v-list-item-icon
    //-         img(src="https://cdn.narrative.io/images/data-stream/images/icon-suppliers-contacts.svg" alt="supplier contacts icon")
    //-       v-list-item-content
    //-         .item.body.text-primary-dark Supplier Contacts
    //-     v-list-item(@click="navItemClicked" to="/settings/app-installs")
    //-       v-list-item-icon
    //-         img(src="https://cdn.narrative.io/images/data-stream/images/icon-apps.svg" alt="app installs icon")
    //-       v-list-item-content
    //-         .item.body.text-primary-dark App Installs				
    //- .submenu.settings(v-if="user !== null")
    //-   h3.h6.text-primary-darker Account Settings
    //-   v-list(nav dense)
    //-     v-list-item(@click="navItemClicked" to="/settings/profile")
    //-       v-list-item-icon
    //-         streamline-icon(:icon="icons.profile" :size=24 stroke="#4B5FA7")
    //-       v-list-item-content
    //-         .item.body.text-primary-dark Your Profile
    //-     v-list-item(@click="navItemClicked" to='/settings/company')
    //-       v-list-item-icon
    //-         streamline-icon(:icon="icons.company" :size=24 stroke="#4B5FA7")
    //-       v-list-item-content 
    //-         .item.body.text-primary-dark Company
    //-     v-list-item(@click="navItemClicked" to='/settings/payment')
    //-       v-list-item-icon
    //-         streamline-icon(:icon="icons.payment" :size=24 stroke="#4B5FA7")
    //-       v-list-item-content
    //-         .item.body.text-primary-dark Payment
    //-     v-list-item(@click="navItemClicked" to='/settings/delivery')
    //-       v-list-item-icon
    //-         streamline-icon(:icon="icons.destination" :size=24 stroke="#4B5FA7")
    //-       v-list-item-content
    //-         .item.body.text-primary-dark Destination
    //- v-divider
    //- .submenu.misc  
    //-   v-list(nav dense)     
    //-     v-list-item(v-if="user !== null" @click="localLogout()")
    //-       v-list-item-icon
    //-         streamline-icon(:icon="icons.logout" :size=24 stroke="#4B5FA7")
    //-       v-list-item-content
    //-         .item.body.text-primary-dark Logout
    //-     v-list-item(v-if="user !== null" @click="goToKB()")
    //-       v-list-item-icon
    //-         streamline-icon(:icon="icons.help" :size=24 stroke="#4B5FA7")
    //-       v-list-item-content
    //-         .item.body.text-primary-dark Help Center
    //-     v-list-item(v-if="user !== null" @click="goToPrivacyPolicy()")
    //-       v-list-item-icon
    //-         streamline-icon(:icon="icons.privacy" :size=24 stroke="#4B5FA7")
    //-       v-list-item-content
    //-         .item.body.text-primary-dark Privacy Policy                     
    //-     v-list-item(v-if="user === null"  @click="navItemClicked" to='/login')
    //-       v-list-item-icon
    //-         streamline-icon(:icon="icons.logout" :size=24 stroke="#4B5FA7")
    //-       v-list-item-content
    //-         .item.body.text-primary-dark Login
    //-     v-list-item(v-if="user === null" @click="navItemClicked" to='/register')
    //-       v-list-item-icon
    //-         streamline-icon(:icon="icons.register" :size=24 stroke="#4B5FA7")
    //-       v-list-item-content
    //-         .item.body.text-primary-dark Register
                                 
</template>

<script>

import StreamlineIcon from "@streamlinehq/streamline-icons-vue"
import * as Notes from "@streamlinehq/streamline-light/lib/content/Notes"
import * as GeomerticCloseUpSingleUserNeutral from "@streamlinehq/streamline-light/lib/users/GeomerticCloseUpSingleUserNeutral"
import * as CreditCardPayments from "@streamlinehq/streamline-light/lib/money-payments-finance/CreditCardPayments"
import * as print3d from "@streamlinehq/streamline-light/lib/technology/3DPrinting"
import * as OnOff from "@streamlinehq/streamline-light/lib/interface-essential/OnOff"
import * as Alerts from "@streamlinehq/streamline-light/lib/interface-essential/Alerts"
import * as  View from "@streamlinehq/streamline-light/lib/interface-essential/View"
import * as Edit from "@streamlinehq/streamline-light/lib/interface-essential/Edit"
import * as HumanResources from "@streamlinehq/streamline-light/lib/work-office-companies/HumanResources"
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
    showDrawer: false,
    selectedCompany: undefined,
    icons: {
      profile: GeomerticCloseUpSingleUserNeutral.default.SingleNeutralIdCard3,
      company: HumanResources.default.HumanResourcesHierarchy,
      payment: CreditCardPayments.default.CreditCardMastercard,
      destination: print3d.default['3DBoxExpandCorners'],
      logout: OnOff.default.PowerButton,
      help: Alerts.default.QuestionCircle,
      privacy: View.default.View1,
      register: Edit.default.PencilWrite2
    }
   
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
  width: 23.75rem
  padding: 32px 24px
  .submenu
    &.user
      display: flex
      flex-direction: column
      align-items: center
      .avatar
        margin-bottom: 24px
      .user-info
        text-align: center
</style>