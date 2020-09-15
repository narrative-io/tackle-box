<template lang="pug">
  v-app
    .wrapper
      nio-text-field.text-field(v-model="model" :label="'Label'")
</template>

<script>
export default {
  name: "App",
  components: {
    NioButton: () => import("./components/Button.vue"),
    NioTextField: () => import("./components/TextField.vue")
  },
  data: () => ({
    model: ""
  })
};
</script>

<style lang="sass" scoped>
  .wrapper
    padding: 30px  
</style>