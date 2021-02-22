<template lang="pug">
	.nio-slider
		NioTextField.input-max(
			v-if="range"
			hide-details
			small
			solo
			type="number"
			v-model="model[0]"
			:value="model[0]"
		)
		v-slider(
			v-if="!range"
			v-bind="$attrs"
			v-on="$listeners" 
			:value="model"
			@input="$emit('update', $event)"
		)
		v-range-slider(
			v-if="range"
			v-bind="$attrs"
			v-on="$listeners" 
			:value="model"
			@input="$emit('update', $event)"
		)
		NioTextField.input-max(
			hide-details
			small
			solo
			type="number"
			:value="range ? model[1] : model"
			@input="modelMaxChanged($event)"
		)

</template>

<script>

import NioTextField from './TextField'

export default {
  name: 'nio-slider',
  props: {
		model: { required: true },
		value: { required: false },
		range: { type: Boolean, required: false, default: false }
  },
  model: {
    prop: "model",
    event: "update"
	},
  mounted() {
    if (!this.value) {
      this.$emit('update', this.model)
    }
	},
	methods: {
		modelMaxChanged(val) {
			if (this.range) {
				this.$emit('update', [this.model[0], val])
			} else {
				this.$emit('update',  val)
			}
		}	
	},
	components: { NioTextField }
}
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_slider'  
</style>