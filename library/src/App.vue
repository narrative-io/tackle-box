<template lang="pug">
  v-app
    div.menu-container(style="background-color: #010A28").d-flex.align-center
      div.container
        .links
        DropdownNav(
          appName="Universal Onboarding" 
          :companies="[]" 
          :user="{name: 'Chris Woodward', role: 1, email: 'cwoodward5@hotmail.com'}"
          :navItems="navItems" 
          :lockItems="{'profile': true }"
          :hideItems="{'login': loggedIn, 'logout': !loggedIn}"
          @login="login"
          @logout="logout"
        )
    .main
      //- SideNav(
      //-   appName="Universal Onboarding" 
      //-   developerName="Narrative I/O"
      //-   :companies="[]" 
      //-   :navItems="navItems" 
      //-   :ctaButtons="ctaButtons"
      //-   :lockItems="{'profile': true }"
      //-   :hideItems="{'login': loggedIn, 'logout': !loggedIn}"
      //-   @login="login"
      //-   @logout="logout"
      //- )
      .wrapper
        //- TestExpansionPanel
        //- TestDivider
        //- TestAlert
        //- TestChargeSummary
        //- TestButtons
        //- TestAutocomplete
        //- TestStepper
        //- TestSlatTable
        //- TestSlat
        //- TestFileChooser
        //- TestCheckbox
        //- TestSwitch
        //- TestRadioGroup
        //- TestImageTile
        //- TestIconFramer
        //- TestIcons
        //- TestTextField
        //- TestDateField
        //- TestSelect
        //- TestCardGrid
        //- TestOptionsGrid
        //- TestDialog
        TestFilters
        //- TestSlider
        //- TestTabs
        //- TestPills
        //- TestTagsField
        //- TestTooltip
</template>

<script>

import DropdownNav from './components-private/DropdownNav'
import SideNav from './components-private/SideNav'
import TestAlert from './test-components/TestAlert'
import TestButtons from './test-components/TestButtons'
import TestCardGrid from './test-components/TestCardGrid'
import TestAutocomplete from './test-components/TestAutocomplete'
import TestFileChooser from './test-components/TestFileChooser'
import TestCheckbox from './test-components/TestCheckbox'
import TestSwitch from './test-components/TestSwitch'
import TestImageTile from './test-components/TestImageTile'
import TestIcons from './test-components/TestIcons'
import TestTextField from './test-components/TestTextField'
import TestSelect from './test-components/TestSelect'
import TestRadioGroup from './test-components/TestRadioGroup'
import TestIconFramer from './test-components/TestIconFramer'
import TestDivider from './test-components/TestDivider'
import TestExpansionPanel from './test-components/TestExpansionPanel'
import TestSlat from './test-components/TestSlat'
import TestStepper from './test-components/TestStepper'
import TestSlatTable from './test-components/TestSlatTable'
import TestOptionsGrid from './test-components/TestOptionsGrid'
import TestChargeSummary from './test-components/TestChargeSummary'
import TestDialog from './test-components/TestDialog'
import TestFilters from './test-components/filters/TestFilters'
import TestSlider from './test-components/TestSlider'
import TestDateField from './test-components/TestDateField'
import TestTabs from './test-components/TestTabs'
import TestPills from './test-components/TestPills'
import TestTagsField from './test-components/TestTagsField'
import TestTooltip from './test-components/TestTooltip'
import { setTheme } from './modules/app/theme/theme'

export default {
  name: "App",
  components: {
    DropdownNav,
    DropdownNav,
    SideNav,
    TestAlert,
    TestButtons,
    TestCardGrid,
    TestAutocomplete,
    TestFileChooser,
    TestCheckbox,
    TestSwitch,
    TestImageTile,
    TestIcons,
    TestTextField,
    TestSelect,
    TestRadioGroup,
    TestIconFramer,
    TestDivider,
    TestExpansionPanel,
    TestSlat,
    TestStepper,
    TestSlatTable,
    TestOptionsGrid,
    TestChargeSummary,
    TestDialog,
    TestFilters,
    TestSlider,
    TestDateField,
    TestTabs,
    TestPills,
    TestTagsField,
    TestTooltip
  },
  data: () => ({
    loggedIn: false,
    ctaButtons: [
      {
        label: "Saved Providers",
        to: "/apps",
        status: "new",
        showAsButton: true,
        buttonVariant: "normal-primary",
        hidden: false
      },
      {
        label: "Another One",
        to: "/apps",
        status: "new",
        showAsButton: true,
        buttonVariant: "normal-secondary",
        hidden: false
      }
    ],
    navItems: [
      {
        groupName: "manage",
        groupLabel: "Manage",
        items: [
          {
            label: "Stuffs",
            to: "/apps",
            icon: "display-payment",
          },
          {
            label: "Subscriptions",
            to: "/subscriptions",
            icon: 'display-new',
            locked: true,
            hidden: true
          },
          {
            label: "Installed Apps",
            to: "/suppliers",
            icon: 'display-reports',
            status: "coming",
            locked: true
          },
          {
            label: "Saved Providers",
            to: "/apps",
            icon: "display-payment",
            status: "coming"
          },
          {
            label: "Saved Providers",
            to: "/apps",
            icon: "display-payment",
            status: "alpha",
            locked: true
          },
          {
            label: "Saved Providers",
            to: "/apps",
            icon: "display-payment",
            status: "new",
            locked: true
          }
        ]
      },
      // {
      //   groupName: "accountSettings",
      //   groupLabel: "Account Settings",
      //   items: [
      //     {
      //       name: "profile",
      //       label: "Your Profile",
      //       to: "/settings/profile",
      //       icon: icons.profile
      //     },
      //     {
      //       label: "Company",
      //       to: "/settings/company",
      //       icon: icons.company
      //     },
      //     {
      //       label: "Payment",
      //       to: "/settings/payment",
      //       icon: icons.payment
      //     },
      //     {
      //       label: "Destination",
      //       to: "/settings/delivery",
      //       icon: icons.destination
      //     }
      //   ]
      // },
      // {
      //   groupName: "support",
      //   groupLabel: "Support",
      //   items: [
      //     {
      //       label: "Help Center",
      //       event: "goToHelpCenter",
      //       icon: icons.help
      //     },
      //     {
      //       label: "Privacy Policy",
      //       event: "goToPrivacyPolicy",
      //       icon: icons.privacy
      //     },
      //     {
      //       label: "Register",
      //       to: "/register",
      //       icon: icons.register
      //     }
      //   ]
      // },
      // {
      //   groupName: "loggedIn",
      //   items: [
      //     {
      //       name: 'logout',
      //       label: "Logout",
      //       event: "logout",
      //       icon: icons.logout,
      //     },
      //      {
      //       name: 'login',
      //       label: "Login",
      //       event: 'login',
      //       // to: "/login",
      //       icon: icons.logout
      //     }
      //   ]
      // }    
    ]
  }),
  methods: {
    childMounted() {},
    goToHelpCenter() {
      console.log("help center")
    },
    goToPrivacyPolicy() {
      console.log("privacy policy")
    },
    logout() {
      this.loggedIn = false
    },
    login() {
      this.loggedIn = true
    },
  },
  mounted() {
    setTheme()
  }
};
</script>

<style lang="sass" scoped>
.menu-container
  background-color: #010A28
  height: 4.3125rem
  color: white

.links
  display: flex
  justify-content: flex-end

.main
  padding: 30px
  display: flex
  background-color: white

.wrapper
  flex-grow: 2
  max-width: 100%
  padding: 30px  
   
</style>