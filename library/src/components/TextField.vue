<template lang="pug">
	.nio-text-field.nio-form-field
		v-text-field(
			:label="label" 
			outlined 
			v-on="$listeners" 
			@input="$emit('update', $event)"
			:model="model" 
			:value="value"
		)
		.nio-form-error(v-if="errorMsg") {{ errorMsg }}
</template>

<script>
  
  export default {
    name: 'nio-text-field',
    props: {
			"model": { required: true },
			"value": { type: String, required: false },
			"label": { type: String, required: false, default: "" },
			"errorMsg": { type: String, required: false }
    },
    model: {
      prop: "model",
      event: "update"
		}
  }
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_text-field'  
</style>