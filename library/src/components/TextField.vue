<template lang="pug">
	.nio-text-field.nio-form-field(:class="{'has-error': hasError}")
		v-text-field(
			:label="label" 
			outlined 
			v-on="$listeners" 
			@input="$emit('update', $event)"
			:model="model" 
			:value="value"
			:disabled="disabled"
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
			"errorMsg": { type: String, required: false },
			"hasError": { type: Boolean, required: false, default: false },
			"disabled": { type: Boolean, required: false, default: false }
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