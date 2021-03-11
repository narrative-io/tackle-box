<template lang="pug">
  .test-select
    NioSelect.select(
      v-model="selectedItems" 
      :items="items"
      :ref="'text'" 
      small
      :label="'Label'"
      key="1"
    )
    NioSelect.select(
      v-model="selectedItems" 
      :items="items"
      :ref="'text'" 
      small
      :label="'Label'"
      key="2"
    )
    NioSelect.select(
      multiple
      v-model="selectedItems" 
      :items="items"
      attach-to-parent
      :ref="'text'" 
      :label="'Label'"
      key="3"
    )
    NioSelect.select(
      multiple
      small
      v-model="selectedItems" 
      :items="items"
      :ref="'text'" 
      :label="'Label'"
      key="4"
    )
    NioSelect.select(
      multiple
      small
      hide-selections
      v-model="selectedItems" 
      :items="items"
      :ref="'text'" 
      :label="'Label'"
      key="5"
    )
    NioSelect.select(
      multiple
      v-model="selectedItems" 
      :items="items"
      :ref="'text'" 
      :label="'Label'"
      key="6"
    )
    NioSelect(
      label="Preferred Data Regions"
      v-model="selectedRegions"
      :items="regions"
      item-text="name"
      item-value="value" 
      multiple 
      key="7"
    )
      template(v-slot:selection="{ item, index }")
        span.v-select__selection(v-if="index === 0") {{ item.name }}
        span.v-select__selection(v-if="index === 1") , {{ item.name }}
        span.v-select__selection(v-if="index === 2 && selectedRegions.length === 3")  , (+{{ selectedRegions.length - 2 }} other)
        span.v-select__selection(v-if="index === 2 && selectedRegions.length > 3 ")  , (+{{ selectedRegions.length - 2 }} others)
    .value {{ selectedRegions }}	
    NioSelect(
      label="Preferred Data Regions"
      v-model="selectedRegions"
      :items="regions"
      item-text="name"
      item-value="value" 
      multiple 
      selection-pills
      key="8"
    )
    NioSelect(
      label="Preferred Data Regions"
      v-model="selectedItems"
      :items="items"
      multiple 
      selection-pills
      key="9"
    )
    
</template>

<script>

import NioSelect from '../components/Select'

export default {
  components: {
    NioSelect
  },
  data: () => ({
    items: ['apple', 'banana', 'orange', 'your mom'],
    selectedItems: ['apple'],
    selectedRegions: [],
    radio: 'Jacob',
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
  })
};
</script>

<style lang="sass" scoped>
.test-select
  .nio-select
    margin-bottom: 20px
</style>