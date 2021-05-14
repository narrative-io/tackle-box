<template lang="pug">
  .nio-tags-field(:id="elementId" :class="{'no-items': !items}")
    v-combobox(
      outlined 
      flat
      multiple
      :label="label"
      :model="model"
      :items="items ? items : []"
      @input="$emit('update', $event)"
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
      template(v-slot:selection="{ item, index }" v-else)
        .pill-wrapper
          NioPill(
            selected-value
          ) {{ item }}
</template>

<script>

import NioPill from './Pill'
import { makeRandomId } from '@/modules/helpers'

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
      selectionsVisible: null
    }),
    model: {
      prop: "model",
      event: "update"
    },
    mounted() {	
      this.elementId = makeRandomId()
      this.$emit('mounted') 
    },
    watch: {
      model() {
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


