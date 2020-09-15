<template lang="pug">
  v-text-field.nio-text-field(
    :label="label" 
    outlined 
    v-on="$listeners" 
    @input="$emit('update', $event)"
    :value="value" 
  )
</template>

<script>
  
  export default {
    name: 'nio-text-field',
    props: {
      "value": { required: true },
      "label": { type: String, required: false, default: "" },
    },
    model: {
      prop: "value",
      event: "update"
    }
  }
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_text-field'  
</style>