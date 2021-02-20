<template lang="pug">
	.nio-slider
		NioTextField.input-max(
			v-if="rangeAttr"
			hide-details
			small
			solo
			type="number"
			prepend="utility-dollar-sign"
			v-model="model"
			:value="model"
		)
		v-slider(
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
			prepend="utility-dollar-sign"
			v-model="model"
			:value="model"
		)

</template>

<script>

import NioTextField from './TextField'

export default {
  name: 'nio-slider',
  props: {
    model: { required: true },
    value: { required: false }
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
	components: { NioTextField }
}
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_slider'  
</style>