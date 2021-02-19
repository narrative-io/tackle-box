<template lang="pug">
  v-slider.nio-slider(
    v-bind="$attrs"
    v-on="$listeners" 
    :value="model"
    @input="$emit('update', $event)"
  )
</template>

<script>


export default {
  name: 'nio-slider',
  props: {
    model: { required: true },
    value: { required: false }
  },
  model: {
    prop: "model",
    event: "update"
  },
  mounted() {
    if (!this.value) {
      this.$emit('update', this.model)
    }
  }
}
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_slider'  
</style>