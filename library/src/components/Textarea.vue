<template lang="pug">
    v-textarea.nio-textarea(
      solo
      v-model="tempModel"
      :rules="rules ? rules : parsedRules"
      @input="$emit('update', $event)"
      v-bind="$attrs"
      v-on="$listeners" 
    )
</template>

<script>

import { getParamNames } from '@/modules/helpers'

export default {
	name: 'nio-textarea',
	props: {
		"model": { required: false },
		"rules": { required: false },
		"rulesWithContext": { required: false }
	},
	model: {
		prop: "model",
		event: "update"
	},
	data: () => ({
		value: '',
		tempModel: null,
		parsedRules: []
	}),
	mounted() {	
		this.tempModel = this.model
		this.makeRules()
		this.$emit('mounted') 
	},
	methods: {
		makeRules() {
			if (this.rulesWithContext) {
				this.rulesWithContext.map((rule, index) => {
					const paramNames = getParamNames(rule)
					let func = rule.toString()
					let funcBody = func.slice(func.indexOf("{") + 1, func.lastIndexOf("}"))
					this.parsedRules[index] = new Function(paramNames[0], funcBody)
				});
			}
		}
	},
	watch: {
		model(val) {
			this.tempModel = val
		},
		rules() {
			this.makeRules()
		}
	},
	destroyed() {
		this.$emit('destroyed')
	}
}
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_textarea'  
</style>
