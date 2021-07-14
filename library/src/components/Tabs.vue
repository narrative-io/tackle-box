<template lang="pug">
  .nio-tabs
    v-tabs(
      v-model="localModel"
      @change="change($event)"
    ) 
      v-tab(
        v-for="(tab, index) in tabs"
        :key="index"
      ) 
        .nio-h5 {{ tab.label }}
    NioDivider(horizontal-solo-emphasis)
    v-tabs-items(
      v-model="localModel"
    )
      v-tab-item(
        v-for="(tab, index) in tabs"
        :key="index"
      )
        slot(:name="tab.name")   
</template>

<script>

import NioDivider from './Divider'

export default {
  name: 'nio-tabs',
  props: {
    "model": { required: true },
    "tabs": { type: Array, required: true }
  },
  model: {
    prop: "model",
    event: "update"
  },
  data: () => ({
    localModel: 0
  }),
  methods: {
    change(val) {
      this.$emit('update', val)
    }
  },
  mounted() {	
    this.localModel = this.model
    this.$emit('mounted')
  },
  destroyed() {
    this.$emit('destroyed')
  },
  watch: {
    model(val) {
      this.localModel = val
    }
  },
  components: { NioDivider }
}
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_tabs'  
</style>
