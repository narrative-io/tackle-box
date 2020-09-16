<template lang="pug">
  .component-content
    nio-text-field.text-field(v-model="model" :label="'Type text'" :placeholder="'You should type something funny...'")
    .result You typed: {{ model }}
</template>

<script>

export default {
  data: () => ({
    model: ""
  })
}	
</script>

<style lang="sass" scoped>
  @import '../../../../../src/styles/mixins/_text-field.sass'
  .component-content
    padding: 0px 0px 40px 0px // TODO refactor this to global scope for all pages
    .text-field
      max-width: 300px
</style>