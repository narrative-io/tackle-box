<template lang="pug">
  v-btn.nio-button(
    @click="click"
    :ripple="false" 
    :class="[`nio-button-${size}`, `nio-button-${variant}`, {'nio-button-caps': caps}]"
  )
    slot
</template>

<script>
  import { VBtn } from 'vuetify/lib'
  
  export default {
    name: 'nio-button',
    props: {
      "variant": { type: String, required: false, default: "primary" },
      "size": { type: String, required: false, default: "extra-large"},
      "caps": { type: Boolean, required: false, default: false }
    },
    methods: {
      click() {
        this.$emit('click')
      }
    },
    components: { VBtn }
  }
</script>

<style lang="sass">
  @import '../styles/mixins/_button'  
</style>