<template lang="pug">
    v-checkbox.nio-checkbox(
      v-if="Array.isArray(this.model)"
      @change="updateModel($event)"
      v-model="tempModel" 
      :rules="parsedRules"
      v-bind="$attrs"
      v-on="$listeners" 
      ref="nio-checkbox-ref"
    )
      template(v-for="(index, name) in $scopedSlots" v-slot:[name]="data")
        slot(:name="name" v-bind="data")  
      slot
    v-checkbox.nio-checkbox(
      v-else
      @change="updateModel($event)"
      v-model="tempModel" 
      :rules="parsedRules"
      v-bind="$attrs"
      v-on="$listeners" 
      ref="nio-checkbox-ref"
    )  
      template(v-for="(index, name) in $scopedSlots" v-slot:[name]="data")
        slot(:name="name" v-bind="data")  
      slot   
</template>

<script>

import { getParamNames } from '../modules/helpers'

export default {
	name: 'nio-checkbox',
	props: {
		"model": { required: false },
		"rules": { required: false }
	},
	model: {
		prop: "model",
		event: "update"
	},
	data: () => ({
		tempModel: null,
		parsedRules: []
	}),
	methods: {
		updateModel(state) {
			this.$emit('update', this.tempModel)
		},
		parseRules() {
			if (this.rules) {
				this.rules.map((rule, index) => {
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
			this.tempModel = this.model
		}
	},
	mounted() {	
		this.tempModel = this.model
		this.$emit('mounted')
	},
	destroyed() {
		this.$emit('destroyed')
	}
}
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_checkbox'  
</style>
