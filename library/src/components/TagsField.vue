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
      template(v-slot:selection="{ item, index }" v-if="!truncateResults")
        .pill-wrapper
          NioPill(
            selected-value
          ) {{ item }}
      template(v-slot:selection="{ item, index }" v-if="truncateResults")
        span.v-select__selection(v-if="index === 0") {{ item }}
        span.v-select__selection(v-if="index === 1") , {{ item }}
        span.v-select__selection(v-if="index === 2 && model.length === 3")  , (+{{ model.length - 2 }} other)
        span.v-select__selection(v-if="index === 2 && model.length > 3 ")  , (+{{ model.length - 2 }} others)
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
      truncateResults: false
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
        if (selectionsHeight > 68) {
          this.truncateResults = true
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


