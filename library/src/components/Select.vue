<template lang="pug">
    v-select.nio-select(
      :model="model"
      outlined
      v-bind="$attrs"
      v-on="$listeners"
      @input="$emit('update', $event)"
    )
      slot
</template>

<script>
  export default {
    name: 'nio-select',
    props: {
      "model": { required: false },
      "rules": { required: false },
    },
    model: {
      prop: "model",
      event: "update"
    },
    data: () => ({

    }),
    methods: {
      
    },
    mounted() {	
      this.$emit('mounted')
    },
    destroyed() {
      this.$emit('destroyed')
    }
  }
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_select'  
</style>

