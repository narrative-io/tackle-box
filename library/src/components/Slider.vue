<template lang="pug">
	.nio-slider(
		:class="{'currency': currency, 'prepend': prepend && !range}"
	)
		NioTextField.input-min(
			v-if="range"
			:currency="currency"
			hide-details
			small
			solo
			type="number"
			@keyup.native="applyMinModel($event)"
			@update="updateMinModel($event)"
			v-model="minModel"
			:value="minModel"
			:class="{'prepend-field': !range && prepend}"
		)
		v-slider(
			v-if="!range"
			v-bind="$attrs"
			v-on="$listeners" 
			:value="model"
			@change="sliderMoved($event)"
		)
		v-range-slider(
			v-if="range"
			v-bind="$attrs"
			v-on="$listeners" 
			:value="model"
			@change="sliderMoved($event)"
		)
		NioTextField.input-max(
			:currency="currency"
			hide-details
			small
			solo
			type="number"
			:value="range ? model[1] : model"
			@keyup.native="applyMaxModel($event)"
			@update="updateMaxModel($event)"
		)

</template>

<script>

import NioTextField from './TextField'

export default {
  name: 'nio-slider',
  props: {
		model: { required: true },
		value: { required: false },
		range: { type: Boolean, required: false, default: false },
		currency: { type: Boolean, required: false, default: false },
		prepend: { type: Boolean, required: false, default: false }
  },
  model: {
    prop: "model",
    event: "update"
	},
	data: () => ({
		minModel: null,
		maxModel: null
	}),
  mounted() {
    if (!this.value) {
      this.$emit('update', this.model)
		}
		if (this.range) {
			this.minModel = this.model[0]
			this.maxModel = this.model[1]
		} else {
			this.maxModel = this.model
		}
	},
	methods: {
		sliderMoved(val) {
			console.log(val)
			if (this.range) {
				this.minModel = val[0]
				this.maxModel = val[1]
			} else {
				this.maxModel = val
			}
			this.$emit('update', val)
		},
		updateMinModel(val) {
			this.minModel = val
		},
		updateMaxModel(val) {
			this.maxModel = val
		},
		applyMinModel() {
			if(event.key == "Enter") {
				this.model[0] = this.minModel
				this.$emit('update', [this.model[0], this.model[1]])
			}
		},
		applyMaxModel(val) {
			if(event.key == "Enter") {
				if (this.range) {
					this.model[1] = this.maxModel
					this.$emit('update', [this.model[0], this.model[1]])
				} else {
					this.model = this.maxModel
					this.$emit('update',  this.model)
				}
			}
		}	
	},
	components: { NioTextField }
}
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_slider'  
</style>