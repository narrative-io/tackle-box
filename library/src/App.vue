<template lang="pug">
  v-app
    .wrapper
      //- nio-text-field.text-field(@mounted="childMounted" :ref="'text'" v-model="model" value="test" :label="'Label'")
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
      NioCheckbox(v-model="selected" label="John" value="John")
      NioCheckbox(v-model="selected" label="Jacob" value="Jacob")
      .a selected: {{ selected }}
      NioSwitch(v-model="switch1" :input-value="switch1") 
      .value value: {{ switch1 }}
      NioSwitch(v-model="switch2" :input-value="switch2" value="John")
      NioSwitch(v-model="switch2" :input-value="switch2" value="Jacob")       
      .value value: {{ switch2 }}
      NioRadioGroup(v-model="radio")
        NioRadioButton(value="John" label="John")
        NioRadioButton(value="Jacob" label="Jacob")
      .value value: {{ radio }}
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
    selected: [],
    switch1: true,
    radio: 'Jacob',
    switch2: ['Jacob', 'John'],
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
    
  },
  watch: {
    selected(value) {
      console.log(value)
    }
  }
};
</script>

<style lang="sass" scoped>
  .wrapper
    padding: 30px  
    width: 500px
</style>