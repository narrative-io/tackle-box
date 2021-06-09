<template lang="pug">
  .nio-tags-field(:id="elementId" :class="{'no-items': !items}")
    v-combobox(
      outlined 
      flat
      multiple
      :label="label"
      v-model="tempModel"
      :items="items ? items : []"
      @input="updateModel($event)"
      @paste="onPaste"
      v-bind="$attrs"
      v-on="$listeners"
      ref="nio-tags-field-ref"
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
            selected-value
            append-icon
            iconName="utility-times"
            :iconColor="clearIconColor()"
            @appendClicked="clear(index)"
          ) {{ item }}
</template>

<script>

import NioPill from './Pill'
import { makeRandomId } from '@/modules/helpers'
import { getThemeColor } from '@/modules/app/theme/theme'

export default {
    name: 'nio-tags-field',
    props: {
      "label": { type: String, required: false, default: 'Add tags'},
      "model": { required: true },
      "items": { required: false, default: null}
    },
    data: () => ({
      elementId: null,
      truncateSelections: false,
      selectionsVisible: null,
      tempModel: []
    }),
    model: {
      prop: "model",
      event: "update"
    },
    mounted() {	
      this.elementId = makeRandomId()
      this.tempModel = this.model
      this.checkHeight()
      this.addPasteListener()
      this.$emit('mounted') 
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
        if (val) {
          this.$emit('update', val)
          this.tempModel = val && val.length ? val : []
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
      onPaste(e) { 
          function unique(value, index, self) {
            return self.indexOf(value) === index;
          }
          var clipboardData, pastedData;
          e.stopPropagation();
          e.preventDefault();
          clipboardData = e.clipboardData || window.clipboardData;
          pastedData = clipboardData.getData('Text');
          const splitValue = pastedData.split(',').map(val => val.trim())
          this.updateModel([...this.tempModel, ...splitValue].filter(unique))
      },
      clear(index) {
        this.tempModel.splice(index, 1)
        this.updateModel(this.tempModel)
      }
    },
    watch: {
      model(val) {
        this.updateTempModel(val)
      }
    },
    destroyed() {
      this.$emit('destroyed')
    },
    components: { NioPill }
  }
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_tags-field'
</style>


