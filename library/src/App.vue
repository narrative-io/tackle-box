<template lang="pug">
  v-app
    .wrapper
      nio-text-field.text-field(@mounted="childMounted" :ref="'text'" v-model="model" :label="'Label'")
      nio-text-field.text-field(@mounted="childMounted" :ref="'text'" v-model="model" :label="'Label'" disabled)
      nio-text-field.text-field(@mounted="childMounted" :ref="'text'" v-model="model" :label="'Label'" error)
      nio-text-field.text-field(@mounted="childMounted" :ref="'text'" v-model="model" :label="'Label'" solo)
      nio-select.select(
        v-model="selectedItems" 
        :items="items"
        @mounted="childMounted" 
        :ref="'text'" 
        :label="'Label'"
      )
      nio-select.select(
        multiple
        v-model="selectedItems" 
        :items="items"
        @mounted="childMounted" 
        :ref="'text'" 
        :label="'Label'"
      )
      nio-select.select(
        multiple
        v-model="selectedItems" 
        :items="items"
        @mounted="childMounted" 
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
      .selected Selected: {{ selectedRegions }}
</template>

<script>
export default {
  name: "App",
  components: {
    NioButton: () => import("./components/Button.vue"),
    NioTextField: () => import("./components/TextField.vue"),
    NioSelect: () => import("./components/Select.vue")
  },
  data: () => ({
    model: "",
    items: ['item 1', 'item 2', 'item 3'],
    selectedItems: null,
    selectedRegions: [],
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
    
  }
};
</script>

<style lang="sass" scoped>
  .wrapper
    padding: 30px  
    width: 500px
</style>