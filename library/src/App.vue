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
      .selected Selected: {{ selectedItems }}
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
    selectedItems: null
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