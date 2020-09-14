<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
		<NioButton @click="clicked(3)" :variant="'secondary'" :size="'extra-large'">Hello</NioButton>
  </div>
</template>

<script>
// import { NioButton } from "../../library/dist/tackle-box.umd";
export default {
  name: 'App',
  components: {
		// NioButton
	},
	methods: {
		clicked(arg) {
			console.log(arg)
			console.log("hi")
		}
	}
}
</script>

<style lang="sass">

@import '../../library/src/styles/mixins/_button'

</style>
