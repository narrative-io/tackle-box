<template lang="pug">
  v-btn.nio-button(
    :ripple="false" 
    :class="[size, variant, {caps: caps}]"
  )
    slot
</template>

<script>
  import { VBtn } from 'vuetify/lib'
  
  export default {
    name: 'nio-button',
    props: {
      "variant": { type: String, required: false, default: "primary" },
      "size": { type: String, required: false},
      "caps": { type: Boolean, required: false, default: false }
		},
    components: { VBtn }
  }
</script>

<style lang="sass">
  @import '@/styles/mixins/_button.sass'

  .nio-button
    +nio-button

    &.primary
      +nio-button-primary
    &.secondary
      +nio-button-secondary
    &.selected
      +nio-button-selected
    &.error
      +nio-button-error   

    &.extra-large
      +nio-button-extra-large
    &.large
      +nio-button-large
    &.normal
      +nio-button-normal
    &.small
      +nio-button-small
    &.extra-small
      +nio-button-extra-small

    &.caps
      +nio-button-caps           
      
</style>