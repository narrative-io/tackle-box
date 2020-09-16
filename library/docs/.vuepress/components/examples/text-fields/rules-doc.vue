<template lang="pug">
  .component-content
    nio-text-field.text-field(v-model="model" :label="'Type text'" :rules="[rules.required, rules.counter]")
</template>

<script>

export default {
	data: () => ({
		model: "",
		rules: {
			required: value => !!value || 'Required',
			counter(value) {
				return value.length > 3 || 'Minimun 3 characters'
			}
		}
  })
}	
</script>

<style lang="sass" scoped>
  @import '../../../../../src/styles/mixins/_text-field.sass'
  .component-content
    margin: 20px 0px 30px 0px // TODO refactor this to global scope for all pages
    .text-field
      max-width: 300px
</style>