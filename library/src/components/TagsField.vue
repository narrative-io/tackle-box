<template lang="pug">
  .nio-tags-field
    v-text-field(
      outlined 
      flat
      @keydown="keyPressed($event)"
      v-model="currentEntry"
      v-bind="$attrs"
      v-on="$listeners"
      ref="nio-tags-field-ref"
    )
    .tags 
      NioPill(
        tag
        v-for="tag of model"
      ) {{ tag }}
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
      currentEntry: ''
    }),
    model: {
      prop: "model",
      event: "update"
    },
    methods: {
      keyPressed(event) {
        console.log(event.key)
        console.log(this.currentEntry.length)
        if (event.key === 'Enter' && this.currentEntry.length > 0) {
          this.model.push(this.currentEntry)
          this.currentEntry = ''
        }
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
