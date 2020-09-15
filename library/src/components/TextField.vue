<template lang="pug">
		v-text-field.nio-text-field(
			:label="label" 
			outlined 
			v-on="$listeners" 
			@input="$emit('update', $event)"
			:model="model" 
			:value="value"
			:disabled="disabled"
			:rules="[rules.counter]"
		)
</template>

<script>
  
  export default {
    name: 'nio-text-field',
    props: {
			"model": { required: true },
			"value": { type: String, required: false },
			"label": { type: String, required: false, default: "" },
			"errorMsg": { type: String, required: false },
			"disabled": { type: Boolean, required: false, default: false },
			// "rules": { type: Array, required: false, default: [] },
    },
    model: {
      prop: "model",
      event: "update"
		},
		data: () => ({
			rules: {
				required: value => false,
				counter: value => value.length > 3 || 'Min 3 characters',
				email: value => {
					const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
					return pattern.test(value) || 'Invalid e-mail.'
				},
			},
		})
  }
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_text-field'  
</style>