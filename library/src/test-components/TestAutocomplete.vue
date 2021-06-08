<template lang="pug">
  .test-autocomplete
    NioAutocomplete.autocomplete(
      v-model="selectedItems" 
      :items="items"
      :value="'banana'"
      :ref="'text'" 
      :label="'Label'"
      key="1"
    )
    //- NioAutocomplete(
    //-   label="Preferred Data Regions"
    //-   v-model="selectedRegions"
    //-   :value="selectedRegions"
    //-   :items="regions"
    //-   item-text="name"
    //-   item-value="value" 
    //-   key="2"
    //- )
    NioAutocomplete.autocomplete(
      label="Preferred Data Regions"
      v-model="selectedRegions"
      :items="regions"
      item-text="name"
      item-value="value" 
      multiple 
      selection-pills
      key="3"
    )
    NioAutocomplete.autocomplete(
      label="Viewing As"
      v-model="selectedCompany"
      :value="selectedCompany"
      :items="companies"
      item-value="id"
      item-text="name"
      outlined
      attach-to-parent
      key="4"
    )
</template>

<script>

import NioAutocomplete from '../components/Autocomplete'

export default {
  components: {
    NioAutocomplete
  },
  data: () => ({
    selectedCompany: null,
    companies: [
      {
        id: 289,
        imageUrl: null,
        name: "0onboardingTestedit"
      },
      {
        id: 290,
        imageUrl: null,
        name: "company 2"
      }  
    ],
    items: ['apple', 'banana', 'orange', 'your mom'],
    selectedItems: ['apple'],
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
    ],
    selectedRegions: [{
        name: 'US',
        value: 1
      }],

  })
};
</script>

<style lang="sass" scoped>
.test-autocomplete
  .autocomplete
    margin-bottom: 20px
</style>