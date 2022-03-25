<template lang="pug">
  .nio-combobox(
    @click="handleClick"
    :class="{active: active}"
    v-click-outside="handleClickOutside"
  )
    .input-elements-wrapper
      .input-elements
        .input-element-wrapper(
          v-for="(element, index) of localModel"
        )
          template(v-if="isTextElement(element)")
            input(
              :ref="`nio-combobox-input-${index}`"
              v-if="isTextElement(element)"
              v-model="localModel[index]"
              type="text"
              @input="handleCusrsorChange($event, index)" 
              @click="handleCusrsorChange($event, index)"
              @keyup="handleCusrsorChange($event, index)"
              :style="{ width: `${Math.max(localModel[index].length, 1)}ch`}"
            )
            v-menu(v-if="active && items && cursor.index === index")
              template(v-slot:activator="{ on, attrs }")
                NioButton(
                  normal-icon 
                  :style="{ left: `${Math.max(cursor.position, 1) + 2}ch`}"
                  iconName="utility-plus"
                  v-bind="attrs"
                  v-on="on"
                  @click="showTagOptions"
                )
              v-list
                v-list-item(
                  v-for="(item, index) in items"
                  :key="index"
                  @click="addTagElement(item)"
                ) {{ item.label }}
          template(v-else)
            NioPill(
              tag
            ) {{ element.label }}
    .outside-input-elements(@click="handleClickOutsideInputs")
      //- Leave for debugging
      //- .test index: {{cursor.index}} position: {{ cursor.position}} modelLength: {{ localModel.length}}
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
    active: false
  }),
  watch: {
    localModel(val) {
      let result = ''
      val.map(element => {
        element.value ? result += element.value : result += element
      })
      this.$emit('computedValueChanged', result)
    },
    cursorPosition(val) {

    }
  },
  methods: {
    showTagOptions() {

    },
    addTagElement(item) {
      const newElement = item
      if (this.cursor.position === 0 ) {
        this.localModel.splice(this.cursor.index, 0, '')
        this.localModel.splice(this.cursor.index + 1, 0, newElement)
        this.cursor.index = this.cursor.index + 2  
      } else if (this.cursor.position === this.localModel[this.cursor.index].length) {
        this.localModel.splice(this.cursor.index + 1, 0, newElement)
        this.localModel.splice(this.cursor.index + 2, 0 , '')
        this.cursor.index = this.cursor.index + 2  
      } else {
        const charsBeforeBreak = this.localModel[this.cursor.index].substring(0, this.cursor.position)
        const charsAfterBreak = this.localModel[this.cursor.index].substring(this.cursor.position)
        this.localModel.splice(this.cursor.index, 1, charsBeforeBreak)
        this.localModel.splice(this.cursor.index + 1, 0, newElement)
        this.localModel.splice(this.cursor.index + 2, 0, charsAfterBreak)
        this.cursor.index = this.cursor.index + 3  
      }
      this.$nextTick(() => {
        const inputElement = this.$refs[`nio-combobox-input-${this.cursor.index}`]
        if (inputElement[0]) {
          this.cursor.position = 0
          this.setCaretPosition(inputElement[0], this.cursor.position)
        }
      })
     
    },
    isTextElement(element) {
      if (element.value) {
        return false
      }
      return true
    },
    handleCusrsorChange(event, index) {
      this.active = true
      if (event instanceof KeyboardEvent && event.code === 'Backspace' && this.cursor.position === 0 && this.cursor.index > 0) {
        if (this.localModel[index].length === 0) {
          this.localModel.splice(index - 1, 2)
        } else {
          this.localModel.splice(index - 1, 1)
        }
        this.cursor.index = this.cursor.index - 1
        while (this.cursor.index > 0) {
          this.cursor.index = this.cursor.index - 1
          if (!this.localModel[this.cursor.index].value) {
            const inputElement = this.$refs[`nio-combobox-input-${this.cursor.index}`]
            if (inputElement[0]) {
              this.cursor.position = this.localModel[this.cursor.index].length
              this.setCaretPosition(inputElement[0], this.cursor.position)
            }
            break
          } 
        }
        if (this.localModel[this.cursor.index + 1] && !this.localModel[this.cursor.index + 1].value) {
          const position = this.localModel[this.cursor.index].length
          this.localModel[this.cursor.index] = this.localModel[this.cursor.index] + this.localModel[this.cursor.index + 1]
          this.localModel.splice(this.cursor.index + 1, 1)
          const inputElement = this.$refs[`nio-combobox-input-${this.cursor.index}`]
          if (inputElement[0]) {
            this.cursor.position = position
            setTimeout(() => {
              this.setCaretPosition(inputElement[0], this.cursor.position)
              
            }, 100);
          }
        }


      } else if (event instanceof KeyboardEvent && event.code === 'ArrowLeft' && this.cursor.position === 0 && this.cursor.index > 0) {
        this.cursor.index = this.cursor.index - 1
        while (this.cursor.index > 0) {
          if (!this.localModel[this.cursor.index].value) {
            break
          } else {
            this.cursor.index = this.cursor.index - 1
          }
        }
        const inputElement = this.$refs[`nio-combobox-input-${this.cursor.index}`]
        if (inputElement[0]) {
          this.cursor.position = this.localModel[this.cursor.index].length
          this.setCaretPosition(inputElement[0], this.cursor.position)
        }
      } else if (event instanceof KeyboardEvent && event.code === 'ArrowRight' && this.cursor.position === this.localModel[this.cursor.index].length && this.cursor.index < this.localModel.length - 1) {
        this.cursor.index++
        while (this.cursor.index < this.localModel.length) {
          if (this.localModel[this.cursor.index].value) {
            this.cursor.index++
          } else {
            break
          }
        }
        const inputElement = this.$refs[`nio-combobox-input-${this.cursor.index}`]
        if (inputElement[0]) {
          if (!this.localModel[this.cursor.index].value) {
            this.cursor.position = 0
            this.setCaretPosition(inputElement[0], this.cursor.position)
          }
        }
      } else {
        this.cursor = {
          index: index,
          position: event.target.selectionStart
        }
      }
    },
    handleClick() {
      setTimeout(() => {
        if (!this.active) {
          this.cursor = {
            index: this.localModel.length - 1,
            position: this.localModel[this.localModel.length - 1].length
          }
          const inputElement = this.$refs[`nio-combobox-input-${this.cursor.index}`]
          if (inputElement[0]) {
            this.setCaretPosition(inputElement[0], this.cursor.position)
          }
        }
        this.active = true
      }, 100)
    },
    handleClickOutside() {
      this.active = false
    },
    handleClickOutsideInputs() {
      this.cursor = {
        index: this.localModel.length - 1,
        position: this.localModel[this.localModel.length - 1].length
      }
      const inputElement = this.$refs[`nio-combobox-input-${this.cursor.index}`]
      if (inputElement[0]) {
        this.setCaretPosition(inputElement[0], this.cursor.position)
      }
    },
    setCaretPosition(elem, caretPos) {
      if (elem != null) {
        if(elem.createTextRange) {
          var range = elem.createTextRange();
          range.move('character', caretPos);
          range.select()
        }
        else {
          if(elem.selectionStart) {
            elem.focus()
            elem.setSelectionRange(caretPos, caretPos)
          }
          else {
            elem.focus()
          }
        }
      }
    }
  },
  mounted() {
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
