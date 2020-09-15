<template lang="pug">
  v-app
    .wrapper
      nio-text-field.text-field(v-model="model" :label="'Label'" :rules="[rules.counter]")
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
				console.log(3)
				return value.length > 3 || 'Min 3 characters'
			},
			email: value => {
				const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
				return pattern.test(value) || 'Invalid e-mail.'
			},
		},
  })
};
</script>

<style lang="sass" scoped>
  .wrapper
    padding: 30px  
</style>