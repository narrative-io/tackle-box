<template lang="pug">
    v-radio-group.nio-radio-group(
      @change="$emit('update', $event)"
      :class="{'display-slat': slatAttr}"
      :model="model" 
      :rules="parsedRules"
      :value="model"
      :ripple="false"
      v-bind="$attrs"
      v-on="$listeners" 
      ref="nio-radio-group-ref"
    )
      template(v-for="(index, name) in $scopedSlots" v-slot:[name]="data")
        slot(:name="name" v-bind="data")
      slot  
</template>

<script>

import { getParamNames } from '@/modules/helpers'

export default {
	name: 'nio-radio-group',
	props: {
		"model": { required: false },
		"rules": { required: false }
	},
	model: {
		prop: "model",
		event: "update"
	},
	data: () => ({
		parsedRules: [],
		slatAttr: false
	}),
	methods: {
		parseRules() {
      if (this.rules) {
        this.rules.map((rule, index) => {
					const paramNames = getParamNames(rule)
					let func = rule.toString()
					let funcBody = func.slice(func.indexOf("{") + 1, func.lastIndexOf("}"))
          this.parsedRules[index] = new Function(paramNames[0], funcBody)
				});
      }
		},
		applyHelperAttributes() {
			const attributes = this.$el.attributes
			if (attributes.getNamedItem('slat')) {
				this.slatAttr = true
			}
		}
	
	},
	mounted() {	
		this.applyHelperAttributes()
		this.$emit('mounted')
	},
	destroyed() {
		this.$emit('destroyed')
	}
}
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_radio-group'  
</style>

