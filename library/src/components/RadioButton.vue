<template lang="pug">
    v-radio.nio-radio-button(
      ref="nio-radio-button-ref"
      v-bind="$attrs"
      v-on="$listeners" 
      :ripple="false"
    )
      template(
        v-for="(index, name) in $scopedSlots" 
        v-slot:[name]="data"
      )
        slot(
          v-bind="data"
          :name="name" 
        )
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
