<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
		<NioButton @click="clicked(3)" :variant="'secondary'" :size="'extra-large'">Hello</NioButton>
  </div>
</template>

<script>
import { NioButton } from "../../library/dist/tackle-box.umd";

export default {
  name: 'App',
  components: {
		NioButton
	},
	methods: {
		clicked(arg) {
			console.log(arg)
			console.log("hi")
		}
	}
}
</script>

<style>
@import "../../library/dist/tackle-box.css"
/* 
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
