<template lang="pug">
  .nio-tags-field
    v-combobox(
      outlined 
      flat
      @input="update"
      :model="model"
      v-bind="$attrs"
      v-on="$listeners"
      ref="nio-tags-field-ref"
    )
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
     update(event) {
       console.log(event)
       $emit('update', event)
     }
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
