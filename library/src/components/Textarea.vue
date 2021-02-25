<template lang="pug">
    v-textarea.nio-textarea(
      solo
      :model="model"
      @input="$emit('update', $event)"
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
      
    }),
    mounted() {	
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
