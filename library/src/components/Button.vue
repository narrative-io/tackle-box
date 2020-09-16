<template lang="pug">
  v-btn.nio-button(
    :ripple="false" 
    :class="[`nio-button-${size}`, `nio-button-${variant}`, {'nio-button-caps': caps}]"
    v-bind="$attrs"
    v-on="$listeners" 
  )
    slot
</template>

<script>
  
  export default {
    name: 'nio-button',
    props: {
      "variant": { type: String, required: false, default: "primary" },
      "size": { type: String, required: false, default: "extra-large"},
      "caps": { type: Boolean, required: false, default: false }
    }
  }
</script>

<style lang="sass">
  @import '../styles/mixins/_button'  
</style>