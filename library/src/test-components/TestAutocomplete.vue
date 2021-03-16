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
    NioAutocomplete(
      label="Preferred Data Regions"
      v-model="selectedRegions"
      :value="selectedRegions"
      :items="regions"
      item-text="name"
      item-value="value" 
      key="2"
    )
    NioAutocomplete(
      label="Preferred Data Regions"
      v-model="selectedRegions"
      :items="regions"
      item-text="name"
      item-value="value" 
      multiple 
      selection-pills
      key="3"
      attach-to-parent
    )
</template>

<script>

import NioAutocomplete from '../components/Autocomplete'

export default {
  components: {
    NioAutocomplete
  },
  data: () => ({
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