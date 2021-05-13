<template lang="pug">
  .nio-tags-field(:id="elementId")
    v-combobox(
      outlined 
      flat
      multiple
      :label="label"
      :model="model"
      @input="$emit('update', $event)"
      v-bind="$attrs"
      v-on="$listeners"
      ref="nio-tags-field-ref"
    )
      template(v-slot:selection="{ item, index }" v-if="truncateResults")
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
      "model": { required: true }
    },
    data: () => ({
      elementId: null,
      truncateResults: false,
      selectionsVisible: null
    }),
    model: {
      prop: "model",
      event: "update"
    },
    mounted() {	
      this.elementId = makeRandomId()
      this.value = this.model
      this.$emit('mounted') 
    },
    methods: {
     
    },
    watch: {
      model() {
        const selectionsHeight = document.querySelector(`#${this.elementId} .v-select__selections`).offsetHeight
        if (selectionsHeight > 180) {
          if (!this.truncateResults) {
            this.truncateResults = true
            this.selectionsVisible = this.model.length - 1
          }
        } else {
          this.truncateResults = false
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

  // 180px
</style>


