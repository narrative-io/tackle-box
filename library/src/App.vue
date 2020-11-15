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
      SideNav(
        appName="Universal Onboarding" 
        developerName="Narrative I/O"
        :companies="[]" 
        :navItems="navItems" 
        :lockItems="{'profile': true }"
        :hideItems="{'login': loggedIn, 'logout': !loggedIn}"
        @login="login"
        @logout="logout"
      )
      .wrapper
        NioCardGrid
          NioCardGridItem
            .content
            template(v-slot:hover-controls)
              NioButton.more-info(normal-secondary) MORE INFO
              NioButton.quick-add(normal-primary) QUICK ADD
          NioCardGridItem
            .content
            template(v-slot:hover-controls)
              NioButton.more-info(normal-secondary) MORE INFO
              NioButton.quick-add(normal-primary) QUICK ADD
          NioCardGridItem.informational
            template(v-slot:informational) test
          NioCardGridItem
            .content
            template(v-slot:hover-controls)
              NioButton.more-info(normal-secondary) MORE INFO
              NioButton.quick-add(normal-primary) QUICK ADD
          NioCardGridItem
            .content
            template(v-slot:hover-controls)
              NioButton.more-info(normal-secondary) MORE INFO
              NioButton.quick-add(normal-primary) QUICK ADD
          NioCardGridItem
            .content
            template(v-slot:hover-controls)
              NioButton.more-info(normal-secondary) MORE INFO
              NioButton.quick-add(normal-primary) QUICK ADD                    
          //- NioCardGridItem
          //- NioCardGridItem
          //- NioCardGridItem
          //- NioCardGridItem
          //- NioCardGridItem
        //- NioFileChooser(
        //-   v-model="file" 
        //-   instructions="Upload a .CSV or .TXT file containing hashed or raw emails."
        //-   actionLabel="Generate Hash"
        //-   :state="downloaderState"
        //-   successMsg="Your file contains 12,345 valid IDs and 0 errors."
        //-   validationErrorMsg="Your file does not contain any valid IDs."
        //-   @changed="loadTextFromFile($event)" 
        //-   :percentComplete="10" 
        //-   :maxFileSize="1024*1024*100"
        //-   :validateFn="() => true"
        //- )
        //-   template(v-slot:success-actions)        
        //-     NioButton(normal-secondary @click="resetDownloader") Reset PII Hasher
        //-     NioButton(normal-primary @click="downloadFile") Download File
        //- .select-state
        //-   .nio-h6 Select state: 
        //-   NioButton(normal-secondary @click="setState('initial')") Initial
        //-   NioButton(normal-secondary @click="setState('selected')") Selected
        //-   NioButton(normal-secondary @click="setState('inProgress')") Working
        //-   NioButton(normal-secondary @click="setState('success')") Success
        //-   NioButton(normal-secondary @click="setState('error')") Error
        //- NioButton.action-button(normal-primary-append iconName="utility-arrow-right") Test
        //- NioIcon(name="display-new")
        //- NioIcon(name="display-list")
        //- NioIcon(name="display-reports")
        //- NioIcon(name="display-preferences")
        //- NioIcon(name="display-quick-start")
        //- NioIcon(name="display-listmanager")
        //- NioIcon(name="display-sources")
        //- NioIcon(name="display-destinations")
        //- NioIcon(name="display-payment")
        //- NioIcon(name="display-help")
        //- NioIcon(name="display-email")
        //- NioIcon(name="display-website")
        //- NioIcon(name="display-security")
        //- NioIcon(name="display-privacy")
        //- NioIcon(name="display-module")
        //- NioIcon(name="display-search")
        //- NioIcon(name="display-notification")
        //- NioIcon(name="display-subscriptions")
        //- NioIcon(name="display-hamburger")
        //- NioIcon(name="display-logout")
        //- NioIcon(name="display-close")
        //- NioIcon(name="display-file")
        //- NioIcon(name="display-cart")
        //- NioIcon(name="display-company")
        //- NioIcon(name="display-upload")
        //- NioIcon(name="display-download")
        //- NioIcon(name="display-yourprofile")
        //- NioIcon(name="display-warning")
        //- NioIcon(name="display-invoice")
        //- NioIcon(name="display-kb")
        //- NioIcon(name="display-budget")
        //- NioIcon(name="display-list-warning")
        //- NioIcon(name="display-curvy-arrow")

        //- br
        //- br

        //- NioIcon(name="utility-code")
        //- NioIcon(name="utility-plus")
        //- NioIcon(name="utility-chevron-left")
        //- NioIcon(name="utility-times")
        //- NioIcon(name="utility-external-link")
        //- NioIcon(name="utility-more")
        //- NioIcon(name="utility-chevron-left")
        //- NioIcon(name="utility-arrow-left")
        //- NioIcon(name="utility-trash")
        //- NioIcon(name="utility-android")
        //- NioIcon(name="utility-apple" color="#415298")
        //- NioIcon(name="utility-lock")
        //- NioIcon(name="utility-search")
        //- NioIcon(name="utility-chevron-down")
        //- NioIcon(name="utility-envelope")
        //- NioIcon(name="utility-link")
        //- NioIcon(name="utility-linkedin")
        //- NioIcon(name="utility-twitter")
        //- NioIcon(name="utility-eye")
        //- NioIcon(name="utility-eye-slash")
        nio-text-field.text-field(append :iconName="switch1 ? 'utility-search' : 'utility-eye'"  @mounted="childMounted" :ref="'text'" v-model="model" :label="'Search'" @click:append="test")
        nio-text-field.text-field(solo small v-model="model" label="search" placeholder="hello")
        nio-text-field.text-field(solo search-small v-model="model" label="search" placeholder="hello")
        //- nio-text-field.text-field(prepend="utility-dollar-sign" @mounted="childMounted" :ref="'text'" v-model="model" :label="'Search'" solo)
        //- nio-text-field.text-field(prepend="utility-dollar-sign" @mounted="childMounted" :ref="'text'" v-model="model" :label="'Search'")
        //- nio-text-field.text-field(@mounted="childMounted" :ref="'text'" v-model="model" value="test" :label="'Label'")
        //- nio-text-field.text-field(@mounted="childMounted" name="test" :ref="'text'" v-model="model" :label="'Label'")
        //- nio-text-field.text-field(@mounted="childMounted" :ref="'text'" v-model="model" :label="'Label'" disabled)
        //- nio-text-field.text-field(@mounted="childMounted" :ref="'text'" v-model="model" :label="'Label'" error)
        //- nio-text-field.text-field(@mounted="childMounted" :ref="'text'" v-model="model" :label="'Label'" solo)
        //- //- .typed Types: {{ model }}
        nio-select.select(
          multiple
          v-model="selectedItems" 
          :items="items"
          @mounted="childMounted" 
          :ref="'text'" 
          :label="'Label'"
        )
        nio-select.select(
          small
          multiple
          v-model="selectedItems" 
          :items="items"
          @mounted="childMounted" 
          :ref="'text'" 
          :label="'Label'"
        )
        //- nio-select.select(
        //-   multiple
        //-   v-model="selectedItems" 
        //-   :items="items"
        //-   @mounted="childMounted" 
        //-   :ref="'text'" 
        //-   :label="'Label'"
        //- )
        //- nio-select.select(
        //-   multiple
        //-   v-model="selectedItems" 
        //-   :items="items"
        //-   @mounted="childMounted" 
        //-   :ref="'text'" 
        //-   :label="'Label'"
        //- )
        //- NioSelect(
        //-   label="Preferred Data Regions"
        //-   v-model="selectedRegions"
        //-   :items="regions"
        //-   item-text="name"
        //-   item-value="value" 
        //-   multiple 
        //- )
        //-   template(v-slot:selection="{ item, index }")
        //-     span.v-select__selection(v-if="index === 0") {{ item.name }}
        //-     span.v-select__selection(v-if="index === 1") , {{ item.name }}
        //-     span.v-select__selection(v-if="index === 2 && selectedRegions.length === 3")  , (+{{ selectedRegions.length - 2 }} other)
        //-     span.v-select__selection(v-if="index === 2 && selectedRegions.length > 3 ")  , (+{{ selectedRegions.length - 2 }} others)
        //- NioCheckbox(v-model="checkbox")
        //- v-checkbox(v-model="checkbox")
        //- .checkbox {{ checkbox }}
        //- NioAutocomplete.autocomplete(
        //-   v-model="selectedItems" 
        //-   :items="items"
        //-   @mounted="childMounted" 
        //-   :value="'banana'"
        //-   :ref="'text'" 
        //-   :label="'Label'"
        //- )
        //- NioAutocomplete(
        //-   label="Preferred Data Regions"
        //-   v-model="selectedRegions"
        //-   :items="regions"
        //-   item-text="name"
        //-   item-value="value" 
        //-   multiple 
        //- )
        //-   template(v-slot:selection="{ item, index }")
        //-     span.v-select__selection(v-if="index === 0") {{ item.name }}
        //-     span.v-select__selection(v-if="index === 1") , {{ item.name }}
        //-     span.v-select__selection(v-if="index === 2 && selectedRegions.length === 3")  , (+{{ selectedRegions.length - 2 }} other)
        //-     span.v-select__selection(v-if="index === 2 && selectedRegions.length > 3 ")  , (+{{ selectedRegions.length - 2 }} others)
        //- NioCheckbox(v-model="selected2" label="hello" )
        //- .value value: {{ selected2 }}
        //- NioCheckbox(v-model="selected" label="John" value="John")
        //- NioCheckbox(v-model="selected" label="Jacob" value="Jacob")
        //- .a selected: {{ selected }}
        //- NioSwitch(v-model="switch1" :input-value="switch1") 
        //- .value value: {{ switch1 }}
        //- NioSwitch(v-model="switch2" :input-value="switch2" value="John")
        //- NioSwitch(v-model="switch2" :input-value="switch2" value="Jacob")       
        //- .value value: {{ switch2 }}
        //- NioRadioGroup(v-model="radio")
        //-   NioRadioButton(value="John" label="John")
        //-   NioRadioButton(value="Jacob" label="Jacob")
        //- .value value: {{ radio }}
        //- NioButton(:variant="'primary'") Primary
        //- NioButton(:variant="'primary'" disabled) Primary
        //- NioButton(:variant="'secondary'") Secondary
        //- NioButton(:variant="'secondary'" disabled) Secondary
        //- NioButton(:variant="'tertiary'") Tertiary
        //- NioButton(:variant="'tertiary'" disabled) Tertiary
        //- NioButton(normal-primary) Quick Add
        //- NioButton(normal-secondary) View Details
        //- NioButton(normal-tertiary) Forgot Password
        //- NioButton(normal-primary-prepend disabled iconName="utility-plus") New Onboarding
        //- NioButton(normal-secondary-prepend disabled iconName="utility-chevron-left") Previous
        //- NioButton(normal-tertiary-prepend disabled iconName="utility-arrow-left") Back to Main
        //- NioButton(normal-primary-append iconName="utility-plus") Checkout
        //- NioButton(normal-secondary-append iconName="utility-chevron-right") More Options
        //- NioButton(normal-tertiary-append iconName="utility-chevron-left") View All Suppliers
        //- NioButton(jumbo-icon iconName="utility-plus")
        //- NioButton(normal-icon iconName="utility-plus")
        //- NioButton(:variant="'selected'") Primary
        //- NioButton.test(jumbo-primary) Test Me
        //- NioButton(jumbo-primary-prepend disabled iconName="utility-arrow-left") Back to Main
        //- NioButton(jumbo-primary-append iconName="utility-plus") Checkout
        //- v-icon 
</template>

<script>

import DropdownNav from './components-private/DropdownNav'
import SideNav from './components-private/SideNav'

export default {
  name: "App",
  components: {
    NioButton: () => import("./components/Button.vue"),
    NioTextField: () => import("./components/TextField.vue"),
    NioSelect: () => import("./components/Select.vue"),
    NioAutocomplete: () => import("./components/Autocomplete.vue"),
    NioCheckbox: () => import("./components/Checkbox.vue"),
    NioSwitch: () => import("./components/Switch.vue"),
    NioRadioGroup: () => import("./components/RadioGroup.vue"),
    NioRadioButton: () => import("./components/RadioButton.vue"),
    NioIcon: () => import("./components/icon/Icon.vue"),
    NioFileChooser: () => import("./components/FileChooser.vue"),
    NioCardGrid: () => import("./components-private/CardGrid.vue"),
    NioCardGridItem: () => import("./components-private/CardGridItem.vue"),
    DropdownNav,
    DropdownNav,
    SideNav
  },
  data: () => ({
    file: null,
    loggedIn: false,
    downloaderState: 'initial',
    navItems: [
      {
        groupName: "manage",
        groupLabel: "Manage",
        items: [
          {
            label: "Saved Providers",
            to: "/apps",
            icon: "display-payment",
            status: "new",
            hidden: false
          },
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
    ],
    model: "",
    items: ['apple', 'banana', 'orange', 'your mom'],
    selectedItems: ['apple'],
    selectedRegions: [],
    checkbox: false,
    selected: ['John'],
    selected2: true,
    switch1: true,
    radio: 'Jacob',
    switch2: ['Jacob', 'John'],
    size: null,
    regions: [
      {
        name: 'US',
        value: 1
      },  
      {
        name: 'UK',
        value: 2
      },  
      {
        name: 'AU',
        value: 3
      },  
      {
        name: 'G',
        value: 4
      }
    ]  
  }),
  methods: {
    setState(val) {
      this.downloaderState = val
    },
    resetDownloader() {

    },
    loadTextFromFile(files) {
      console.log(files[0])
    },
    downloadFile() {

    },
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
    test() {
      this.switch1 = !this.switch1
      console.log(this.switch1)
    }
  },
  mounted() {
    setTimeout(function(){ this.size = 'extra-large' }, 1000);
  },
  watch: {
    selected2(value) {
      console.log(value)
    }
  }
};
</script>

<style lang="sass" scoped>
@import '../src/styles/mixins/_button'
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

.wrapper
  flex-grow: 2
  padding: 30px  

  .nio-card-grid


.test
  @media (max-width: 800px)
    +nio-button($variant: primary, $size: small)
.select-state
  margin-top: 50px
  .nio-h6
    margin-bottom: 20px
  .nio-button
    margin-bottom: 10px      
</style>