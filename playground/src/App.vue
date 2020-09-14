<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <NioButton @click="clicked(3)" :variant="'secondary'" :size="'extra-large'">Hello</NioButton>
    <NioTextField class="nio-text-field" v-model="input" :label="'Label'"></NioTextField>
  </div>
</template>

<script>
import { NioButton, NioTextField } from "../../library/dist/tackle-box.umd";
export default {
  name: 'App',
  data: () => ({
    input: ""
  }),
  methods: {
    clicked(arg) {
      console.log(arg)
      console.log("hi")
    }
  },
  components: { NioButton, NioTextField }
}
</script>

<style lang="sass" scoped>

@import '../../library/src/styles/mixins/_button'
@import '../../library/src/styles/mixins/_text-field.sass'
  
</style>
