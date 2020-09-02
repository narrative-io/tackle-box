<template lang="pug">
  v-btn.nio-button.extra-large(:ripple="false") Extra-large 
</template>

<script>
  import { VBtn } from 'vuetify/lib'
  
  export default {
    name: 'nio-button',
    components: { VBtn }
  }
</script>

<style lang="sass">
  @import '../../styles/global/_variables.sass'
  .button
    color: $c-primary
</style>