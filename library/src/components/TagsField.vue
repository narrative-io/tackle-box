<template lang="pug">
  .nio-tags-field(
    :id="elementId" 
    :class="{'no-items': !items, 'disabled': disabled}"
    :style="{maxHeight: maxHeight ? maxHeight + 'px' : 'auto'}"
    :ref="ref"
  )
    v-combobox(
      ref="nio-tags-field-ref"
      v-model="tempModel"
      :search-input.sync="search"
      v-bind="$attrs"
      v-on="$listeners"
      :label="label"
      :items="items ? items : []"
      outlined 
      flat
      multiple
      @input="updateModel($event)"
      :disabled="disabled"
    )
      template(v-slot:append v-if="items")
        svg(style="width:24px;height:24px" viewBox="0 0 24 24")
          path(fill="#425290" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z")
      template(v-slot:append v-else)
      template(v-slot:selection="{ item, index }" v-if="truncateSelections")
        span.v-select__selection(v-if="index < selectionsVisible")
          .pill-wrapper
            NioPill(
              selected-value
            ) {{ item }}
        span.v-select__selection(v-if="index === selectionsVisible && model.length === selectionsVisible + 1") (+{{ model.length - selectionsVisible }} other)
        span.v-select__selection(v-if="index === selectionsVisible && model.length > selectionsVisible + 1") (+{{ model.length - selectionsVisible }} others)
      template(v-slot:selection="{ item, index, selected }" v-else)
        .pill-wrapper
          NioPill(
            :class="{'selected': selected}"
            :icon-color="clearIconColor()"
            icon-name="utility-times"
            selected-value
            append-icon
            @appendClicked="clear(index)"
          ) {{ item }}
    .validation-error
      .nio-p-small.text-error(v-if="integerError") Value must be of type Long (an integer)
      .nio-p-small.text-error(v-if="floatError") Value must be of type Double (a floating-point number)
</template>

<script>

import NioPill from './Pill'
import { makeRandomId } from '@/modules/helpers'
import { getThemeColor } from '@/modules/app/theme/theme'

export default {
    name: 'nio-tags-field',
    components: { NioPill },
    props: {
      "label": { type: String, required: false, default: 'Add tags'},
      "model": { required: true },
      "items": { required: false, default: null},
      "dataType": { required: false, default: 'string'},
      "maxHeight": { type: Number, required: false },
      "disabled": { type: Boolean, required: false, default: false }
    },
    data: () => ({
      elementId: null,
      truncateSelections: false,
      selectionsVisible: null,
      tempModel: [],
      integerError: false,
      floatError: false,
      search: null,
      height: null
    }),
    model: {
      prop: "model",
      event: "update"
    },
    computed: {
      ref() {
        return `nio-tags-field-${this.elementId}-ref`
      }
    },
    watch: {
      model(val) {
        this.updateTempModel(val)
        this.$nextTick(() => {
          this.height = this.$refs[this.ref].offsetHeight
          console.log(this.height)
          console.log(this.maxHeight)
          if (this.maxHeight && this.height === this.maxHeight) {
            this.$refs[this.ref].style.overflowY = 'scroll'
            
          }
        })
      }
    },
    mounted() {	
      this.elementId = makeRandomId()
      this.tempModel = this.model
      this.checkHeight()
      this.addPasteListener()
      this.$emit('mounted') 
    },
    destroyed() {
      this.$emit('destroyed')
    },
    methods: {
      clearIconColor() {
        return getThemeColor('primaryLight')
      },
      checkHeight() {
        this.$nextTick(() => {
          const selectionsHeight = document.querySelector(`#${this.elementId} .v-select__selections`).offsetHeight
          if (selectionsHeight > 180) {
            if (!this.truncateSelections) {
              this.truncateSelections = true
              this.selectionsVisible = this.model.length - 1
            }
          } else {
            this.truncateSelections = false
            this.selectionsVisible = null
          }
        })
      },
      updateTempModel(val) {
        this.tempModel = val
      },
      updateModel(val) {
        let tempModelCopy = [...this.tempModel]
        const integerRegex = /^\d+$/
        const floatRegex = /^[+-]?\d+(\.\d+)?$/    
    
        if (val) {
          const lastVal = val[val.length - 1]
          switch (this.dataType) {
            case 'string':
              break;
            case 'long':
              if (!integerRegex.test(lastVal)) {
                tempModelCopy = tempModelCopy.filter(modelVal => modelVal !== lastVal)
                this.integerError = true
              } else {
                this.integerError = false
              }
              break;
            case 'double':
              if (!floatRegex.test(lastVal)) {
                tempModelCopy = tempModelCopy.filter(modelVal => modelVal !== lastVal)
                this.floatError = true
              } else {
                this.floatError = false
                if (integerRegex.test(lastVal)) {
                  tempModelCopy = tempModelCopy.filter(modelVal => modelVal !== lastVal)
                  if (!tempModelCopy.includes(lastVal + '.0')) {
                    tempModelCopy.push(lastVal + '.0')
                  }
                }
              }
              break;
            default:
              break;
          }
          this.tempModel = tempModelCopy && tempModelCopy.length ? tempModelCopy : []
          this.$emit('update', tempModelCopy)
        }
      },
      addPasteListener() {
        this.$nextTick(() => {
          const input = document.querySelector(`#${this.elementId} .v-select__selections input`)
          input.addEventListener("paste", (event) => {
            this.onPaste(event)
          })
        })
      },
      unique(value, index, self) {
        return self.indexOf(value) === index;
      },
      clear(index) {
        this.tempModel.splice(index, 1)
        this.updateModel(this.tempModel)
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_tags-field'
</style>


