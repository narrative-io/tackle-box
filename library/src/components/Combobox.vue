<template lang="pug">
  .nio-combobox
    .input-elements
      .input-element-wrapper(
        v-for="(element, index) of localModel"
      )
        template(v-if="isTextElement(element)")
          input(
            v-if="isTextElement(element)"
            v-model="localModel[index]"
            type="text"
            @input="handleCusrsorChange($event, index)" 
            @click="handleCusrsorChange($event, index)"
            @keyup="handleCusrsorChange($event, index)"
            :style="{ width: `${Math.max(localModel[index].length, 1)}ch`}"
          )
          v-menu(v-if="items")
            template(v-slot:activator="{ on, attrs }")
              NioButton(
                normal-icon 
                iconName="utility-plus"
                v-bind="attrs"
                v-on="on"
                @click="showTagOptions"
              )
            v-list
              v-list-item(
                v-for="(item, index) in items"
                :key="index"
              ) {{ item.label }}
        template(v-else)
          NioPill(
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
    "items": { type: Array, required: false },
  },
  model: {
    prop: "model"
  },
  data: () => ({
    localModel: [''],
    cursor: {
      index: 0,
      position: 0 
    },
    testIndex: 0
  }),
  watch: {
    localModel(val) {

    },
    cursorPosition(val) {
      console.log(val)
    }
  },
  methods: {
    showTagOptions() {

    },
    addTagElement() {
      const newElement = {
        label: String(this.testIndex),
        value: "stuff"
      }
      if (this.cursor.position === 0 ) {
        this.localModel.splice(this.cursor.index, 0, newElement)
      } else if (this.cursor.position === this.localModel[this.cursor.index].length) {
        this.localModel.splice(this.cursor.index + 1, 0, newElement)
        this.localModel.splice(this.cursor.index + 2, 0 , '')
      } else {
        const charsBeforeBreak = this.localModel[this.cursor.index].substring(0, this.cursor.position)
        const charsAfterBreak = this.localModel[this.cursor.index].substring(this.cursor.position)
        this.localModel.splice(this.cursor.index, 1, charsBeforeBreak)
        this.localModel.splice(this.cursor.index + 1, 0, newElement)
        this.localModel.splice(this.cursor.index + 2, 0, charsAfterBreak)
      }
      this.testIndex++
    },
    isTextElement(element) {
      if (element.label) {
        return false
      }
      return true
    },
    handleCusrsorChange(event, index) {
      this.cursor = {
        index: index,
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
