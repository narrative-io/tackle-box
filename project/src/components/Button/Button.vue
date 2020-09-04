<template lang="pug">
  v-btn.nio-button.extra-large(
    :ripple="false" 
    :class="[size, variant, {caps: caps}]"
  )
    slot
</template>

<script>
  import { VBtn } from 'vuetify/lib'
	console.log("button main")
	
	export default {
    name: 'nio-button',
    props: {
      "variant": { type: String, required: false, default: "primary" },
      "size": { type: String, required: false, default: "extra-large" },
      "caps": { type: Boolean, required: false, default: false }
		},
		mounted() {
			console.log("mounted")
		},
    components: { VBtn }
  }
</script>

<style lang="sass">
  @import '../../styles/global/_variables.sass'

  .nio-button
    display: block
  
    ::v-deep .v-btn__content
      z-index: 1

    font-weight: 600
    font-size: 0.75rem
    color: #ffffff
    box-shadow: none
    border-radius: 2.5rem	
    letter-spacing: 0.6px

    // $variant:
    &.primary
      &.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined)
        background-color: $c-primary
        color: $c-white
        border: 1px solid $c-primary      
        &:focus
          border: 1px solid $c-primary   
        &:not(.v-btn--text):not(.v-btn--outlined):focus:before
            opacity: 0    
      &:hover
        &.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined)
          background-color: $c-primary-dark
          border: 1px solid $c-primary-dark !important
      &:disabled.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined)	
        opacity: 0.5 !important
        background-color: $c-primary !important
        color: $c-white !important
        border: 1px solid rgba($c-primary, 0.5) !important
        pointer-events: none
        cursor: initial
      &:active
        background-color: $c-primary-darker !important
        border: 1px solid $c-primary-darker !important
    &.secondary
      &.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined)
        background-color: $c-white
        border: 1px solid $c-primary-light
        color: $c-primary
        &:focus
          border: 1px solid $c-primary    
          background-color: $c-canvas
          color: $c-primary-dark
        &:not(.v-btn--text):not(.v-btn--outlined):focus:before
          opacity: 0  
      &:hover
        &.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined)
          background-color: $c-canvas
          color: $c-primary-dark
          border: 1px solid rgba($c-primary-light, 0.5)
      &:disabled.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined)	
        opacity: 0.5 !important
        background-color: $c-canvas !important
        color: $c-primary !important
        border: 1px solid rgba($c-primary-light, 0.5) !important
        pointer-events: none
        cursor: initial
      &:active
        background-color: $c-white !important
        border: 1px solid $c-primary-light   !important 
        color: $c-primary !important
    &.selected
      pointer-events: none
      border: none
      &.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined)
        background-color: $c-primary-darker
        color: $c-white
    &.error
      &.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined)
        background-color: $c-white
        border: 1px solid $c-error
        color: $c-error
        &:focus
          background-color: lighten($c-error, 80)
          color: $c-error
        &:not(.v-btn--text):not(.v-btn--outlined):focus:before
          opacity: 0
      &:hover
        &.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined)
          background-color: darken($c-white, 5)
          color: lighten($c-error, 5)
          border: 1px solid lighten($c-error, 5)
      &:disabled.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined)	
        opacity: 0.5 !important
        border: 1px solid rgba($c-error, 0.5) !important
        pointer-events: none
        cursor: initial
      &:active
        background-color: lighten($c-error, 90) !important
        border: 1px solid $c-error   !important 
        color: $c-error !important

    // $size:
    &.extra-large 
      &.v-btn:not(.v-btn--round).v-size--default
        padding: 0rem 30px
        font-size: 24px
        height: 52px
    &.large
      &.v-btn:not(.v-btn--round).v-size--default
        padding: 0rem 28px
        font-size: 20px
        height: 44px
    &.normal
      &.v-btn:not(.v-btn--round).v-size--default
        padding: 0rem 20px
        font-size: 16px
        height: 36px
    &.small
      &.v-btn:not(.v-btn--round).v-size--default
        padding: 0rem 14px
        font-size: 14px
        height: 28px
    &.extra-small
      &.v-btn:not(.v-btn--round).v-size--default
        padding: 0rem 10px
        font-size: 12px
        height: 24px
    // $caps
    text-transform: none  
    &.caps
      text-transform: uppercase

</style>