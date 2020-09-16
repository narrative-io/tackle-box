<template lang="pug">
  v-app
    .wrapper
      nio-text-field.text-field(v-model="model" :label="'Label'" appendIcon="fab fa-twitter" :rules="[rules.counter]")
      v-icon mdi-magnify
</template>

<script>
export default {
  name: "App",
  components: {
    NioButton: () => import("./components/Button.vue"),
    NioTextField: () => import("./components/TextField.vue")
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
    },
  })
};
</script>

<style lang="sass" scoped>
  .wrapper
    padding: 30px  
</style>