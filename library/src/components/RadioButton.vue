<template lang="pug">
    v-radio.nio-radio-button(
      :ripple="false"
      v-bind="$attrs"
      v-on="$listeners" 
      ref="nio-radio-button-ref"
    )
      template(v-for="(index, name) in $scopedSlots" v-slot:[name]="data")
        slot(:name="name" v-bind="data")
      slot     
</template>

<script>
  export default {
    name: 'nio-radio-button',
    mounted() {	
      this.$emit('mounted')
    },
    destroyed() {
      this.$emit('destroyed')
    }
  }
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_radio-button'  
</style>
