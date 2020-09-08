<template lang="pug">
  v-btn.nio-button(
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
    components: { VBtn }
  }
</script>

<style lang="sass">
  @import '@/styles/mixins/_button.sass'

  .nio-button
    +nio-button

    &.nio-button-primary
      +nio-button-primary
    &.nio-button-secondary
      +nio-button-secondary
    &.nio-button-selected
      +nio-button-selected
    &.nio-button-error
      +nio-button-error   

    &.nio-button-extra-large
      +nio-button-extra-large
    &.nio-button-large
      +nio-button-large
    &.nio-button-normal
      +nio-button-normal
    &.nio-button-small
      +nio-button-small
    &.nio-button-extra-small
      +nio-button-extra-small

    &.nio-button-caps
      +nio-button-caps           
      
</style>