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
        NioExpansionPanels(multiple)
          NioExpansionPanel(:key="0")
            template(v-slot:header) 
              .nio-p.text-primary-darker.nio-bold Alert
            template(v-slot:content) 
              TestAlert
          NioExpansionPanel(:key="1")
            template(v-slot:header) 
              .nio-p.text-primary-darker.nio-bold Autocomplete
            template(v-slot:content) 
              TestAutocomplete
          NioExpansionPanel(:key="3")
            template(v-slot:header) 
              .nio-p.text-primary-darker.nio-bold Buttons
            template(v-slot:content) 
              TestButtons
          NioExpansionPanel(:key="4")
            template(v-slot:header) 
              .nio-p.text-primary-darker.nio-bold Card Grid
            template(v-slot:content) 
              TestCardGrid
          NioExpansionPanel(:key="5")
            template(v-slot:header) 
              .nio-p.text-primary-darker.nio-bold Charge Summary
            template(v-slot:content) 
              TestChargeSummary
          NioExpansionPanel(:key="6")
            template(v-slot:header) 
              .nio-p.text-primary-darker.nio-bold Checkbox
            template(v-slot:content) 
              TestCheckbox
          NioExpansionPanel(:key="7")
            template(v-slot:header) 
              .nio-p.text-primary-darker.nio-bold Color Picker
            template(v-slot:content) 
              TestColorPicker
          NioExpansionPanel(:key="8")
            template(v-slot:header) 
              .nio-p.text-primary-darker.nio-bold DateField
            template(v-slot:content) 
              TestDateField
          NioExpansionPanel(:key="9")
            template(v-slot:header) 
              .nio-p.text-primary-darker.nio-bold Dialog
            template(v-slot:content) 
              TestDialog
          NioExpansionPanel(:key="10")
            template(v-slot:header) 
              .nio-p.text-primary-darker.nio-bold Divider
            template(v-slot:content) 
              TestDivider
          NioExpansionPanel(:key="11")
            template(v-slot:header) 
              .nio-p.text-primary-darker.nio-bold ExpansionPanels
            template(v-slot:content) 
              TestExpansionPanel
          NioExpansionPanel(:key="12")
            template(v-slot:header) 
              .nio-p.text-primary-darker.nio-bold FileChooser
            template(v-slot:content) 
              TestFileChooser
          NioExpansionPanel(:key="13")
            template(v-slot:header) 
              .nio-p.text-primary-darker.nio-bold Filters
            template(v-slot:content) 
              TestFilters
          NioExpansionPanel(:key="14")
            template(v-slot:header) 
              .nio-p.text-primary-darker.nio-bold IconFramer
            template(v-slot:content) 
              TestIconFramer
          NioExpansionPanel(:key="15")
            template(v-slot:header) 
              .nio-p.text-primary-darker.nio-bold Icons
            template(v-slot:content) 
              TestIcons
          NioExpansionPanel(:key="16")
            template(v-slot:header) 
              .nio-p.text-primary-darker.nio-bold ImageTile
            template(v-slot:content) 
              TestImageTile
          NioExpansionPanel(:key="17")
            template(v-slot:header) 
              .nio-p.text-primary-darker.nio-bold OptionsGrid
            template(v-slot:content) 
              TestOptionsGrid
          NioExpansionPanel(:key="18")
            template(v-slot:header) 
              .nio-p.text-primary-darker.nio-bold Pill
            template(v-slot:content) 
              TestPills
          NioExpansionPanel(:key="19")
            template(v-slot:header) 
              .nio-p.text-primary-darker.nio-bold RadioGroup
            template(v-slot:content) 
              TestRadioGroup
          NioExpansionPanel(:key="20")
            template(v-slot:header) 
              .nio-p.text-primary-darker.nio-bold Select
            template(v-slot:content) 
              TestSelect
          NioExpansionPanel(:key="21")
            template(v-slot:header) 
              .nio-p.text-primary-darker.nio-bold Slat
            template(v-slot:content) 
              TestSlat
          NioExpansionPanel(:key="22")
            template(v-slot:header) 
              .nio-p.text-primary-darker.nio-bold SlatTable
            template(v-slot:content) 
              TestSlatTable
          NioExpansionPanel(:key="23")
            template(v-slot:header) 
              .nio-p.text-primary-darker.nio-bold Slider
            template(v-slot:content) 
              TestSlider
          NioExpansionPanel(:key="24")
            template(v-slot:header) 
              .nio-p.text-primary-darker.nio-bold Stepper
            template(v-slot:content) 
              TestStepper
          NioExpansionPanel(:key="25")
            template(v-slot:header) 
              .nio-p.text-primary-darker.nio-bold Switch
            template(v-slot:content) 
              TestSwitch
          NioExpansionPanel(:key="26")
            template(v-slot:header) 
              .nio-p.text-primary-darker.nio-bold Tabs
            template(v-slot:content) 
              TestTabs
          NioExpansionPanel(:key="27")
            template(v-slot:header) 
              .nio-p.text-primary-darker.nio-bold TagsField
            template(v-slot:content) 
              TestTagsField
          NioExpansionPanel(:key="28")
            template(v-slot:header) 
              .nio-p.text-primary-darker.nio-bold TextField
            template(v-slot:content) 
              TestTextField
          NioExpansionPanel(:key="29")
            template(v-slot:header) 
              .nio-p.text-primary-darker.nio-bold Textarea
            template(v-slot:content) 
              TestTextarea
          NioExpansionPanel(:key="30")
            template(v-slot:header) 
              .nio-p.text-primary-darker.nio-bold Tooltip
            template(v-slot:content) 
              TestTooltip
          NioExpansionPanel(:key="31")
            template(v-slot:header) 
              .nio-p.text-primary-darker.nio-bold Choose Payment Method
            template(v-slot:content) 
              TestChoosePaymentMethod
          NioExpansionPanel(:key="32")
            template(v-slot:header) 
              .nio-p.text-primary-darker.nio-bold Overflow Menu
            template(v-slot:content) 
              TestOverflowMenu
          NioExpansionPanel(:key="33")
            template(v-slot:header) 
              .nio-p.text-primary-darker.nio-bold Connectors
            template(v-slot:content) 
              TestConnectors
          NioExpansionPanel(:key="34")
            template(v-slot:header) 
              .nio-p.text-primary-darker.nio-bold Attributes Schema
            template(v-slot:content) 
              TestSchema
          NioExpansionPanel(:key="35")
            template(v-slot:header) 
              .nio-p.text-primary-darker.nio-bold Subscriptions
            template(v-slot:content) 
              TestSubscriptions
          NioExpansionPanel(:key="36")
            template(v-slot:header) 
              .nio-p.text-primary-darker.nio-bold Combobox
            template(v-slot:content) 
              TestCombobox
          NioExpansionPanel(:key="37")
            template(v-slot:header) 
              .nio-p.text-primary-darker.nio-bold Forecast Widget
            template(v-slot:content) 
              TestForecastWidget
          NioExpansionPanel(:key="38")
            template(v-slot:header) 
              .nio-p.text-primary-darker.nio-bold Error Page
            template(v-slot:content) 
              TestError
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
import TestTextField from './test-components/TestTextfield'
import TestSelect from './test-components/TestSelect'
import TestRadioGroup from './test-components/TestRadioGroup'
import TestIconFramer from './test-components/TestIconFramer'
import TestDivider from './test-components/TestDivider'
import TestExpansionPanel from './test-components/TestExpansionPanel'
import NioExpansionPanels from './components/ExpansionPanels'
import NioExpansionPanel from './components/ExpansionPanel'
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
import TestTextarea from './test-components/TestTextarea'
import TestTooltip from './test-components/TestTooltip'
import TestColorPicker from './test-components/TestColorPicker'
import TestChoosePaymentMethod from './test-components/TestChoosePaymentMethod'
import TestOverflowMenu from './test-components/TestOverflowMenu'
import TestConnectors from './test-components/TestConnectors'
import TestSchema from './test-components/schema/TestSchema'
import TestSubscriptions from './test-components/TestSubscriptions'
import TestCombobox from './test-components/TestCombobox'
import TestForecastWidget from './test-components/forecasting/TestForecastWidget'
import TestError from './test-components/TestError'
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
    TestTextarea,
    TestTagsField,
    TestTooltip,
    TestColorPicker,
    TestChoosePaymentMethod,
    TestOverflowMenu,
    TestConnectors,
    TestSchema,
    TestSubscriptions,
    TestCombobox,
    TestForecastWidget,
    NioExpansionPanels,
    NioExpansionPanel,
    TestError
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