<template lang="pug">
  v-app
    div.menu-container(style="background-color: #010A28").d-flex.align-center
      div.container
        .links
        DropdownNavMenu(
          appName="Universal Onboarding" 
          :companies="[]" 
          :user="{name: 'Chris Woodward', role: 1, email: 'cwoodward5@hotmail.com'}"
          :navItems="navItems" 
        )
          //- DropdownNavMenu(
          //-   appName="Universal Onboarding" 
          //-   :companies="[]" 
          //-   :user="{name: 'Chris Woodward', role: 1}"
          //-   :navItems="navItems" 
          //-   @goToHelpCenter="goToHelpCenter"
          //-   @goToPrivacyPolicy="goToPrivacyPolicy"
          //-   @logout="logout"
          //- )
    .wrapper
      //- nio-text-field.text-field(@mounted="childMounted" :ref="'text'" v-model="model" value="test" :label="'Label'")
      //- nio-text-field.text-field(@mounted="childMounted" name="test" :ref="'text'" v-model="model" :label="'Label'")
      //- nio-text-field.text-field(@mounted="childMounted" :ref="'text'" v-model="model" :label="'Label'" disabled)
      //- nio-text-field.text-field(@mounted="childMounted" :ref="'text'" v-model="model" :label="'Label'" error)
      //- nio-text-field.text-field(@mounted="childMounted" :ref="'text'" v-model="model" :label="'Label'" solo)
      //- .typed Types: {{ model }}
      nio-select.select(
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
      NioButton(:variant="'primary'") Primary
      NioButton(:variant="'primary'" disabled) Primary
      NioButton(:variant="'secondary'") Secondary
      NioButton(:variant="'secondary'" disabled) Secondary
      NioButton(:variant="'tertiary'") Tertiary
      NioButton(:variant="'tertiary'" disabled) Tertiary
      NioButton(normal-primary) Quick Add
      NioButton(normal-secondary) View Details
      NioButton(normal-tertiary) Forgot Password
      NioButton(normal-primary-prepend disabled iconName="mdi-plus") New Onboarding
      NioButton(normal-secondary-prepend disabled iconName="mdi-chevron-left") Previous
      NioButton(normal-tertiary-prepend disabled iconName="mdi-arrow-left") Back to Main
      NioButton(normal-primary-append iconName="mdi-plus") Checkout
      NioButton(normal-secondary-append iconName="mdi-chevron-right") More Options
      NioButton(normal-tertiary-append iconName="mdi-arrow-right") View All Suppliers
      NioButton(jumbo-icon iconName="mdi-plus")
      NioButton(normal-icon iconName="mdi-plus")
      NioButton(:variant="'selected'") Primary
      NioButton.test(jumbo-primary) Test Me
</template>

<script>
import DropdownNavMenu from './components/navigation/DropdownNavMenu'
import * as Notes from "@streamlinehq/streamline-light/lib/content/Notes"
import * as GeomerticCloseUpSingleUserNeutral from "@streamlinehq/streamline-light/lib/users/GeomerticCloseUpSingleUserNeutral"
import * as CreditCardPayments from "@streamlinehq/streamline-light/lib/money-payments-finance/CreditCardPayments"
import * as print3d from "@streamlinehq/streamline-light/lib/technology/3DPrinting"
import * as OnOff from "@streamlinehq/streamline-light/lib/interface-essential/OnOff"
import * as Alerts from "@streamlinehq/streamline-light/lib/interface-essential/Alerts"
import * as  View from "@streamlinehq/streamline-light/lib/interface-essential/View"
import * as Edit from "@streamlinehq/streamline-light/lib/interface-essential/Edit"
import * as HumanResources from "@streamlinehq/streamline-light/lib/work-office-companies/HumanResources"

const icons = {
  profile: GeomerticCloseUpSingleUserNeutral.default.SingleNeutralIdCard3,
  company: HumanResources.default.HumanResourcesHierarchy,
  payment: CreditCardPayments.default.CreditCardMastercard,
  destination: print3d.default['3DBoxExpandCorners'],
  logout: OnOff.default.PowerButton,
  help: Alerts.default.QuestionCircle,
  privacy: View.default.View1,
  register: Edit.default.PencilWrite2
}
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
    NioImageTile: () => import("./components/ImageTile.vue"),
    DropdownNavMenu
  },
  data: () => ({
    navItems: [
      {
        groupLabel: "App",
        items: [
          {
            label: "Data Streams",
            to: "/products",
            icon: icons.profile,
            staatus: "locked"
          },
          {
            label: "Providers",
            to: "/suppliers",
            icon: icons.payment,
            status: "new"
          },
          {
            label: "Apps",
            to: "/apps"
          },
          {
            label: "Your Cart",
            to: "/cart"
          },
          {
            label: "Subscriptions",
            to: "/subscriptions",
            status: "locked"
          }
        ]
      },
      {
        groupLabel: "Account Settings",
        items: [
          {
            label: "Your Profile",
            to: "/settings/profile",
            status: "new"
          },
          {
            label: "Company",
            to: "/settings/company",
            status: "coming"
          },
          {
            label: "Payment",
            to: "/settings/payment",
            status: "updated"
          },
          {
            label: "Destination",
            to: "/settings/delivery",
            status: "alpha"
          }
        ]
      },
      {
        groupLabel: "Support",
        items: [
          {
            label: "Logout",
            event: "logout",
            status: "beta"
          },
          {
            label: "Help Center",
            event: "goToHelpCenter"
          },
          {
            label: "Privacy Policy",
            event: "goToPrivacyPolicy"
          },
          {
            label: "Login",
            to: "/login"
          },
          {
            label: "Register",
            to: "/register"
          }
        ]
      }
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
    childMounted() {},
    goToHelpCenter() {
      console.log("help center")
    },
    goToPrivacyPolicy() {
      console.log("privacy policy")
    },
    logout() {
      console.log("logout")
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

.wrapper
  padding: 30px  
  width: 500px

.test
  @media (max-width: 800px)
    +nio-button($variant: primary, $size: small)
</style>