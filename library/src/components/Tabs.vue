<template lang="pug">
  .nio-tabs
    v-tabs(
      v-model="activeTab"
      @change="change($event)"
    ) 
      v-tab(
        v-for="tab in tabs"
        :key="getTabIndex(tab)"
      ) 
        .nio-h5 {{ tab.label }}
    NioDivider(horizontal-solo-emphasis)
    v-tabs-items(v-model="activeTab")
      v-tab-item(
        v-for="tab in tabs"
        :key="getTabIndex(tab)"
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
    activeTab: 0
  }),
  computed: {
    computedModel() {
      return this.model
    }
  },
  methods: {
    change(val) {
      this.$emit('update', this.tabs[val])
    },
    getTabIndex(tab) {
      return this.tabs.indexOf(tab)
    }
  },
  mounted() {	
    this.activeTab = this.model
    this.$emit('mounted')
  },
  destroyed() {
    this.$emit('destroyed')
  },
  components: { NioDivider }
}
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_tabs'  
</style>
