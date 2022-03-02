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
  components: { NioDivider },
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
  watch: {
    model(val) {
      this.localModel = val
    }
  },
  mounted() {	
    this.localModel = this.model
    this.$emit('mounted')
  },
  destroyed() {
    this.$emit('destroyed')
  },  
  methods: {
    change(val) {
      this.$emit('update', val)
    }
  }  
}
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_tabs'  
</style>
