<template lang="pug">
    v-textarea.nio-textarea(
      solo
      :model="model"
      :value="value"
      @input="$emit('update', $event)"
      v-bind="$attrs"
      v-on="$listeners" 
    )
</template>

<script>
  export default {
    name: 'nio-textarea',
    props: {
      "model": { required: true },
    },
    model: {
      prop: "model",
      event: "update"
    },
    data: () => ({
      value: ''
    }),
    mounted() {	
      this.value = this.model
      this.$emit('mounted') 
    },
    destroyed() {
      this.$emit('destroyed')
    }
  }
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_textarea'  
</style>
