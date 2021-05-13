<template lang="pug">
  .nio-tags-field
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

export default {
    name: 'nio-tags-field',
    props: {
      "label": { type: String, required: false, default: 'Add tags'},
      "model": { required: true }
    },
    data: () => ({
      
    }),
    model: {
      prop: "model",
      event: "update"
    },
    methods: {
     
    },
    mounted() {	
      this.value = this.model
      this.$emit('mounted') 
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
