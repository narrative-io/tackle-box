<template>
  <v-app>
    <hello-world />
    <Footer />
    <Selection />
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
    NioButton: () => import("./components/Button.vue")
  },
  data() {
    return {};
  },
};
</script>

