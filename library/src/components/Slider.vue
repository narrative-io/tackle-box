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
			:model="currency ? parseFloat(model[0]).toFixed(2) : model[0]"
			:class="{'prepend-field': !range && prepend}"
		)
		v-slider(
			v-if="!range"
			v-bind="$attrs"
			v-on="$listeners" 
			:value="model"
			@input="sliderMoved($event)"
		)
		v-range-slider(
			v-if="range"
			v-bind="$attrs"
			v-on="$listeners" 
			:value="model"
			@input="sliderMoved($event)"
		)
		NioTextField.input-max(
			:currency="currency"
			hide-details
			small
			solo
			type="number"
			:model="range ? currency ? parseFloat(model[1]).toFixed(2) : model[1] : currency ? parseFloat(model).toFixed(2) : model"
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
		maxModel: null,
		sliderMinModel: null,
		sliderMaxModel: null
	}),
  mounted() {
		if (this.range) {
			this.minModel = this.model[0]
			this.maxModel = this.model[1]
			this.sliderMinModel = this.model[0]
			this.sliderMaxModel = this.model[1]
		} else {
			this.maxModel = this.model
		}
	},
	methods: {
		sliderMoved(val) {
			if (this.range) {
				this.minModel = this.currency ? parseFloat(val[0]).toFixed(2) : val[0]
				this.maxModel = this.currency ? parseFloat(val[1]).toFixed(2) : val[1]
			} else {
				this.maxModel = this.currency ? parseFloat(val).toFixed(2) : val
			}
			this.$emit('update', val)
		},
		updateMinModel(val) {
			this.minModel = this.currency ? parseFloat(val).toFixed(2) : val
			if (this.currency) {
				const currencyRegex  = /^\d+(?:\.\d{2})$/
				if (currencyRegex.test(this.minModel)) {
					this.$emit('update', [this.minModel, this.model[1]])
				}
			}
		},
		updateMaxModel(val) {
			this.maxModel = this.currency ? parseFloat(val).toFixed(2) : val
			if (this.currency) {
				const currencyRegex  = /^\d+(?:\.\d{2})$/
				if (currencyRegex.test(this.maxModel)) {
					if (this.range) {
						this.$emit('update', [this.model[0], this.maxModel])
					} else {
						this.$emit('update',  this.maxModel)
					}
				}
			}
		},
		applyMinModel() {
			if (event.key == "Enter") {
				this.$emit('update', [this.minModel, this.model[1]])
			}
		},
		applyMaxModel(val) {
			if (event.key == "Enter") {
				if (this.range) {
					this.$emit('update', [this.model[0], this.maxModel])
				} else {
					this.$emit('update',  this.maxModel)
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