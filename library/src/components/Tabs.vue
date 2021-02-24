<template lang="pug">
  .nio-tabs
    v-tabs(
      v-model="activeTab"
      @change="change($event)"
    ) 
      v-tab(
        v-for="tab in tabs"
        :key="getTabIndex(tab)"
      ) {{ tab }}
    v-divider  
    v-tabs-items(v-model="activeTab")
      v-tab-item(
        v-for="tab in tabs"
        :key="getTabIndex(tab)"
      )
        slot(:name="tab")   
</template>

<script>
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
      getTabIndex(tabName) {
        return this.tabs.indexOf(tabName)
      }
    },
    mounted() {	
      this.activeTab = this.model
      this.$emit('mounted')
    },
    destroyed() {
      this.$emit('destroyed')
    }
  }
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_tabs'  
</style>
