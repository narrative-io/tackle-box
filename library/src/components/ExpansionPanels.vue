<template lang="pug">
  v-expansion-panels.nio-expansion-panels(
    v-bind="$attrs"
    v-on="$listeners" 
    v-model="tempModel"
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
    tempModel: null
  }),
  model: {
    prop: "model",
    event: "update"
  },
  mounted() {	
    this.tempModel = this.model
    this.$emit('mounted')
  },
  destroyed() {
    this.$emit('destroyed')
  },
  methods: {
  
  },
  watch: {
    tempModel(val) {
      this.$emit('update', this.tempModel)
    }
  }
}
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_expansion-panels'  
</style>

