<template lang="pug">
  .nio-slider(
    :class="{'currency': currency, 'prepend': prepend && !range}"
  )
    //- .test
    //-   .model Model: {{ model }}
    //-   .min SliderMinModel {{ sliderMinModel }}
    //-   .text-min TextMinModel {{ textMinModel }}
    //-   .min SliderMaxModel {{ sliderMaxModel }}
    //-   .text-min TextMaxModel {{ textMaxModel }}
    .validation-error.min-error(v-if="minError") {{ minError }}
    NioTextField.input-min(
      :currency="currency"
      hide-details
      small
      solo
      type="number"
      @input="updateTextMinModel($event)"
      v-model="textMinModel"
      :class="{'prepend-field': !range && prepend,'error--text': true}"
      ref="text-min"
    )
    v-slider(
      v-if="!range"
      :value="sliderMinModel"
      :min="min"
      :max="max"
      :step="step"
      @input="sliderMoved($event)"
    )
    v-range-slider(
      v-if="range"
      :value="[sliderMinModel, sliderMaxModel]"
      :min="min"
      :max="max"
      :step="step"
      @input="sliderMoved($event)"
    )
    NioTextField.input-max(
      v-if="range"
      :currency="currency"
      hide-details
      small
      solo
      type="number"
      v-model="textMaxModel"
      @input="updateTextMaxModel($event)"
    )
    .validation-error.max-error(v-if="maxError") {{ maxError }}

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
    prepend: { type: Boolean, required: false, default: false },
    min: { type: Number, required: false },
    max: { type: Number, required: false },
    step: { type: Number, required: false, default: 1.00 }
  },
  model: {
    prop: "model",
    event: "update"
  },
  data: () => ({
    textMinModel: null,
    textMaxModel: null,
    sliderMinModel: null,
    sliderMaxModel: null,
    minError: null,
    maxError: null,
    init: false,

  }),
  mounted() {
    this.updateLocalModels(this.model)
  },
  methods: {
    sliderMoved(val) {
      if (this.init === true) {
        if (this.range) {
          this.textMinModel = this.currency ? parseFloat(val[0]).toFixed(2) : val[0]
          this.textMaxModel = this.currency ? parseFloat(val[1]).toFixed(2) : val[1]
        } else {
          this.maxModel = this.currency ? parseFloat(val).toFixed(2) : val
        }
        this.$emit('update', val)
      }
    },
    updateTextMinModel(val) {
      if (this.range) {
        if ((!this.min || (this.min && val >= this.min)) && (!this.max || (this.max && val <= this.max))  && val < this.model[1]) {
          if (this.currency) {
            const currencyRegex  = /^\d+(?:\.\d{2})$/
            if (currencyRegex.test(val)) {
              this.$emit('update', [val, this.model[1]])
            }
          } else {
            this.$emit('update', [val, this.model[1]])
          }
        } else {
          if (val < this.min || val > this.max) {
            this.minError = `must be between ${this.min} and ${this.max}`

          }
        }
      } else {
        if ((!this.min || (this.min && val >= this.min)) && (!this.max || (this.max && val <= this.max))) {
          if (this.currency) {
            const currencyRegex  = /^\d+(?:\.\d{2})$/
            if (currencyRegex.test(val)) {
              this.$emit('update', val)
            }
          } else {
            this.$emit('update', val)
          }
        }
      }  
    },
    updateTextMaxModel(val) {
      if ((!this.min || (this.min && val >= this.min)) && (!this.max || (this.max && val <= this.max)) && val > this.model[0]) {
        if (this.currency) { 
          const currencyRegex  = /^\d+(?:\.\d{2})$/
          if (currencyRegex.test(val)) {
            this.$emit('update', [this.model[0], val])
          }
        } else {
          this.$emit('update', [this.model[0], val])
        }
      }
    },
    updateLocalModels(val) {
      this.init = true
      if (this.range) {
        this.textMinModel = this.currency ? parseFloat(val[0]).toFixed(2) : val[0]
        this.textMaxModel = this.currency ? parseFloat(val[1]).toFixed(2) : val[1]
        this.sliderMinModel = this.model[0]
        this.sliderMaxModel = this.model[1]
      } else {
        this.textMinModel = this.currency ? parseFloat(val).toFixed(2) : val
        this.sliderMinModel = val
      }
    }
  },
  watch: {
    model(val) {
      this.updateLocalModels(val)
    }
  },
  components: { NioTextField }
}
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_slider'  
</style>