<template lang="pug">
  v-app
    div.menu-container(style="background-color: #010A28").d-flex.align-center
      div.container
        .d-none.d-lg-flex.align-center.justify-space-between
    .wrapper
      //- nio-text-field.text-field(@mounted="childMounted" :ref="'text'" v-model="model" value="test" :label="'Label'")
      //- nio-text-field.text-field(@mounted="childMounted" name="test" :ref="'text'" v-model="model" :label="'Label'")
      //- nio-text-field.text-field(@mounted="childMounted" :ref="'text'" v-model="model" :label="'Label'" disabled)
      //- nio-text-field.text-field(@mounted="childMounted" :ref="'text'" v-model="model" :label="'Label'" error)
      //- nio-text-field.text-field(@mounted="childMounted" :ref="'text'" v-model="model" :label="'Label'" solo)
      //- .typed Types: {{ model }}
      //- nio-select.select(
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
    NioRadioButton: () => import("./components/RadioButton.vue")
  },
  data: () => ({
    model: "",
    items: ['apple', 'banana', 'orange', 'your mom'],
    selectedItems: 'apple',
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
    childMounted() {}
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

.wrapper
  padding: 30px  
  width: 500px

.test
  @media (max-width: 800px)
    +nio-button($variant: primary, $size: small)
</style>