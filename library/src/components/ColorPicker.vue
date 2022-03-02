<template lang="pug">
  .nio-color-picker
    NioTextField.text-field(
      v-model="localModel"
      :label="label"
      @input="colorChanged($event)"
    )
    v-menu(
      :close-on-content-click="false"
      offset-y 
    )
      template(v-slot:activator="{ on, attrs }")
        .swatch(
          v-bind="attrs"
          v-on="on" 
          :style="{backgroundColor: model}"      
        )
      .color-picker
        v-color-picker(
          v-model="pickerModel"
          dot-size="25"
          mode="hexa"
          swatches-max-height="200"
          show-swatches
          @input="colorChanged($event)"
        )
</template>

<script>

import NioTextField from './TextField'

export default {
  name: 'nio-color-picker',
  components: { NioTextField },
  props: { 
    "model": { type: String, required: true },
    "label": { type: String, required: false }
  },
  data() {
    return {
      localModel: null,
      pickerModel: null
    }
  },
  model: {
    prop: "model",
    event: "update"
  },
  watch: {
    model(val) {
      this.localModel = val
    },
    localModel(value) {
      if (value.length === 7 && value[0] === '#' || (value.length === 6 && value.indexOf('#') === -1)) {
        if (value[0] !== '#') {
          value = '#' + value
        }
        this.pickerModel = value
      }
    }
  },
  mounted() {
    this.localModel = this.model
  },
  methods: {
    colorChanged(value) { 
      if (value.length === 7 && value[0] === '#' || (value.length === 6 && value.indexOf('#') === -1)) {
        if (value[0] !== '#') {
          value = '#' + value
        }
        this.$emit('update', value)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  .nio-color-picker
    display: flex
    align-items: center
    height: 3.375rem
    margin-bottom: 0rem  
    & > * + *
       margin-left: 1rem
    .label
      width: 8.125rem
    .text-field
      width: 6.25rem !important
      margin-bottom: 0rem
    .swatch
      width: 3.375rem
      height: 3.375rem
      border-radius: 0.5rem
      border: 0.0625rem solid #DDD
</style>
