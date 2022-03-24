<template lang="pug">
  .nio-combobox
    .input-element-wrapper(
      v-for="(element, index) of localModel"
    )
      input(
        v-if="isTextElement(element)"
        v-model="localModel[index]"
        type="text"
        @input="handleCusrsorChange($event, index)" 
        @click="handleCusrsorChange($event, index)"
        @keyup="handleCusrsorChange($event, index)"
      )
      NioPill(
        v-else
        tag
      ) {{ element.label }}
    NioButton(
      normal-secondary
      @click="addTagElement"
    ) Add
    .test {{ localModel }}
</template>

<script>

import NioButton from './Button'
import NioPill from './Pill'

export default {
  name: 'nio-combobox',
  components: { NioButton, NioPill },
  props: {
    "model": { required: false },
  },
  model: {
    prop: "model"
  },
  data: () => ({
    localModel: [''],
    cursorPosition: {
      elementIndex: 0,
      position: 0 
    }
  }),
  watch: {
    localModel(val) {
      console.log(val)
    }
  },
  methods: {
    addTagElement() {
      this.localModel.push({
        label: "test",
        value: "stuff"
      })
    },
    isTextElement(element) {
      if (element.label) {
        return false
      }
      return true
    },
    handleCusrsorChange(event, index) {
      this.cursorPosition = {
        elementIndex: index,
        position: event.target.selectionStart
      }
    }
  },
  mounted() {
    // this.localModel = this.model
    this.$emit('mounted')
  },
  destroyed() {
    this.$emit('destroyed')
  }
}
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_combobox'
</style>
