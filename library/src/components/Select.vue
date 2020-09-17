<template lang="pug">
    v-select.nio-select(
      :model="model"
      :menu-props="{ offsetY: true, nudgeBottom: 10  }"
      outlined
      v-bind="$attrs"
      v-on="$listeners"
      @input="$emit('update', $event)"
    )
      template(v-slot:append)
        svg(style="width:24px;height:24px" viewBox="0 0 24 24")
          path(fill="#425290" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z")
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

    }),
    methods: {
      
    },
    mounted() {	
      this.$emit('mounted')
    },
    destroyed() {
      this.$emit('destroyed')
    }
  }
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_select'  
</style>

