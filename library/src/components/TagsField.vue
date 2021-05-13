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
      template(v-slot:selection="{ item, index }")
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
      elementId: null
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
        const el = document.querySelector('');
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


