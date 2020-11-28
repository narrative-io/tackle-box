<template lang="pug">
    v-select.nio-select(
      :class="{ small: smallAttr }"
      :model="model"
      :menu-props="{contentClass: 'nio-select-menu', offsetY: true, nudgeBottom: 10  }"
      outlined
      :attach="attach ? node : undefined"
      v-bind="$attrs"
      v-on="$listeners"
      @input="$emit('update', $event)"
      ref="nio-select-ref"
      :value="model"
    )
      template(v-slot:append)
        svg(style="width:24px;height:24px" viewBox="0 0 24 24")
          path(fill="#425290" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z")
      template(v-for="(index, name) in $scopedSlots" v-slot:[name]="data")
        slot(:name="name" v-bind="data")    
</template>

<script>
  export default {
    name: 'nio-select',
    props: {
      "model": { required: false },
      "rules": { required: false },
    },
    model: {
      prop: "model",
      event: "update"
    },
    data: () => ({
      node: null,
      smallAttr: false,
      attach: false
    }),
    methods: {
      applyHelperAttributes() {
        const attributes = this.$el.attributes
        if (attributes.getNamedItem('small')) {
          this.smallAttr = true
        }
        if (attributes.getNamedItem('attach-to-parent')) {
          this.attach = true
        }
      }  
    },
    mounted() {	
      this.applyHelperAttributes()
      this.$emit('mounted')
      this.node = this.$refs['nio-select-ref'].$vnode.elm
    },
    destroyed() {
      this.$emit('destroyed')
    }
  }
</script>

<style lang="sass">
  @import '../styles/mixins/_menu'
  
  .v-menu__content.nio-select-menu
    +nio-menu
</style>

<style lang="sass" scoped>
  @import '../styles/mixins/_select'  
</style>

