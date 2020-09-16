<template lang="pug">
		v-text-field.nio-text-field(
			:label="label" 
			outlined 
			v-on="$listeners" 
			@input="$emit('update', $event)"
			:model="model" 
			:value="value"
			:disabled="disabled"
			:rules="[...parsedRules]"
		)
</template>

<script>
  
  export default {
    name: 'nio-text-field',
    props: {
			"model": { required: true },
			"value": { type: String, required: false },
			"label": { type: String, required: false, default: "" },
			"disabled": { type: Boolean, required: false, default: false },
			"rules": { required: false },
    },
    model: {
      prop: "model",
      event: "update"
		},
		data: () => ({
			parsedRules: []
		}),
		methods: {
			parseRules() {
				if (this.rules) {
						this.rules.map((rule, index) => {
						let func = rule.toString()
						let funcBody = func.slice(func.indexOf("{") + 1, func.lastIndexOf("}"))
						this.parsedRules[index] = new Function("value", funcBody)
					});
				} else {
					return [new Function("value", "return true")]
				}
			}
		},
		mounted() {	
			this.parseRules()
		},
		watch: {
			rules() {
				this.parseRules()
			}
		}
  }
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_text-field'  
</style>