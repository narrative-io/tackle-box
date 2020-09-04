<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
		<NioButton>Hello</NioButton>
  </div>
</template>

<script>
import { NioButton } from "../../library/dist/component-library.umd";

export default {
  name: 'App',
  components: {
		NioButton
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
