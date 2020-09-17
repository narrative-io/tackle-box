<template lang="pug">
  v-app
    .wrapper
      nio-select.text-field(@mounted="childMounted" :ref="'text'" v-model="model" :label="'Label'" appendIcon="fab fa-twitter" :rules="[rules.counter]")
      v-icon mdi-magnify
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
    rules: {
      required: value => false,
      counter(value) {
        return value.length > 3 || 'Minimun 3 characters'
      },
      minValue(value) {
        return value === "true" || value === "false" || "Must be 'true' or 'false'"
      }
    }
  }),
  methods: {
    childMounted() {
      this.$refs['text'].focus()
    }
  },
  mounted() {
    
  }
};
</script>

<style lang="sass" scoped>
  .wrapper
    padding: 30px  
</style>