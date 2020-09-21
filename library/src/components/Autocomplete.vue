<template lang="pug">
    v-select.nio-select(
      :model="model"
      :menu-props="{ offsetY: true, nudgeBottom: 10  }"
      :attach="node"
      outlined
      v-bind="$attrs"
      v-on="$listeners"
      @input="$emit('update', $event)"
      ref="nio-select-ref"
    )
      template(v-slot:append)
        svg(style="width:24px;height:24px" viewBox="0 0 24 24")
          path(fill="#425290" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z")
      template(v-for="(index, name) in $scopedSlots" v-slot:[name]="data")
        slot(:name="name" v-bind="data")    
</template>

<script>
  export default {
    name: 'nio-autocomplete',
    props: {
      "model": { required: false },
      "rules": { required: false },
    },
    model: {
      prop: "model",
      event: "update"
    },
    data: () => ({
      node: null
    }),
    methods: {
      
    },
    mounted() {	
      this.$emit('mounted')
      this.node = this.$refs['nio-select-ref'].$vnode.elm
    },
    destroyed() {
      this.$emit('destroyed')
    }
  }
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_select'  
</style>

