<template lang="pug">
    v-tabs.nio-tabs(
      :value="model"
      :model="computedModel"
      @change="change($event)"
    ) 
      slot
</template>

<script>
  export default {
    name: 'nio-tabs',
    props: {
      "model": { required: true },
    },
    model: {
      prop: "model",
      event: "update"
    },
    data: () => ({
    }),
    computed: {
      computedModel() {
        return this.model
      }
    },
    methods: {
      change(val) {
        this.$emit('update', val)
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
