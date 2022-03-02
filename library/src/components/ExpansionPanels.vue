<template lang="pug">
  v-expansion-panels.nio-expansion-panels(
    v-model="tempModel"
    v-bind="$attrs"
    v-on="$listeners" 
    :multiple="multiple"
  )
    slot
</template>

<script>

export default {
  name: 'nio-expansion-panels',
  props: {
    "multiple": { type: Boolean, required: false, default: true },
    "model": { required: false }
  },
  data: () => ({
    tempModel: []
  }),
  model: {
    prop: "model",
    event: "update"
  },
  watch: {
    tempModel(val) {
      this.$emit('update', this.tempModel)
    },
    model(val) {
      this.tempModel = val
    }
  },
  mounted() {	
    this.tempModel = this.model
    this.$emit('mounted')
  },
  destroyed() {
    this.$emit('destroyed')
  }
}
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_expansion-panels'  
</style>

