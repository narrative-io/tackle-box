<template lang="pug">
  v-expansion-panels.nio-expansion-panels(
    v-bind="$attrs"
    v-on="$listeners" 
    v-model="model"
    :multiple="multiple"
  )
    slot
</template>

<script>

export default {
  name: 'nio-expansion-panels',
  props: {
    "multiple": { type: Boolean, required: false, default: true },
  },
  data: () => ({
    model: []
  }),
  mounted() {	
    this.$emit('mounted')
  },
  destroyed() {
    this.$emit('destroyed')
  },
  methods: {
  
  }
}
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_expansion-panels'  
</style>

