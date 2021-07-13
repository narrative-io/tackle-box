<template lang="pug">
  .nio-color-picker
    .label.nio-p.text-primary-dark {{ label ? label : name }}
    NioTextField.text-field(
      small
      v-model="value"
      @input="colorChanged($event)"
    )
    v-menu(
      offset-y 
      :close-on-content-click="false"
    )
      template(v-slot:activator="{ on, attrs }")
        .swatch(
          :style="{backgroundColor: value}"
          v-bind="attrs"
          v-on="on"  
        )
      .color-picker
        v-color-picker(
          :value="value"
          dot-size="25"
          mode="hexa"
          show-swatches
          swatches-max-height="200"
          @input="colorChanged($event)"
        )
</template>

<script>


export default {
	name: 'nio-color-picker',
	props: { 
		"name": { type: String, required: true },
		"value": { type: String, required: false },
		"label": { type: String, required: false }
	},
  data() {
    return {
     
    }
  },
  methods: {
    colorChanged(value) { 
      if (value.length === 7 && value[0] === '#' || (value.length === 6 && value.indexOf('#') === -1)) {
        if (value[0] !== '#') {
          value = '#' + value
        }
        this.$emit('colorChanged', {
          name: this.name, 
          value: value
        })
      }  
    }
  }
}
</script>

<style lang="sass" scoped>
  .color-control
    display: flex
    align-items: center
    height: 2.5rem
    margin-bottom: 0.5rem  
    & > * + *
       margin-left: 0.5rem
    .label
      width: 8.125rem
    .text-field
      width: 6.25rem !important
      margin-bottom: 0rem
    .swatch
      width: 2.5rem
      height: 2.5rem
      border-radius: 0.5rem
      border: 0.0625rem solid #DDD
</style>
