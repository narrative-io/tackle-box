<template lang="pug">
  .test-select
    NioSelect.select(
      v-model="selectedItems" 
      :items="items"
      :ref="'text'" 
      :label="'Label'"
    )
    NioSelect.select(
      small
      multiple
      v-model="selectedItems" 
      :items="items"
      attach-to-parent
      :ref="'text'" 
      :label="'Label'"
    )
    NioSelect.select(
      multiple
      v-model="selectedItems" 
      :items="items"
      :ref="'text'" 
      :label="'Label'"
    )
    NioSelect.select(
      multiple
      v-model="selectedItems" 
      :items="items"
      :ref="'text'" 
      :label="'Label'"
    )
    NioSelect(
      label="Preferred Data Regions"
      v-model="selectedRegions"
      :items="regions"
      item-text="name"
      item-value="value" 
      multiple 
    )
      template(v-slot:selection="{ item, index }")
        span.v-select__selection(v-if="index === 0") {{ item.name }}
        span.v-select__selection(v-if="index === 1") , {{ item.name }}
        span.v-select__selection(v-if="index === 2 && selectedRegions.length === 3")  , (+{{ selectedRegions.length - 2 }} other)
        span.v-select__selection(v-if="index === 2 && selectedRegions.length > 3 ")  , (+{{ selectedRegions.length - 2 }} others)
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