<template lang="pug">
  v-text-field.nio-text-field(:label="label" outlined @input="updateValue($event)")
</template>

<script>
  
  export default {
    name: 'nio-text-field',
    props: {
      "label": { type: String, required: false, default: "" },
    },
    methods: {
      updateValue: function (value) {
        this.$emit('input', value)
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_text-field'  
</style>