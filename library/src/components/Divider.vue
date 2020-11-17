<template lang="pug">
  .nio-divider(
    :class="{'nio-horizontal': horizontal, 'nio-vertical': vertical, 'nio-emphasis': emphasis, 'nio-segmented': segmented}"
  )
    .segments(
      v-if="segmented"
    )
      .start
      .text.nio-h6.text-primary-dark OR
      .end
</template>

<script>
  export default {
    name: 'nio-divider',
    data: () => ({
      segmented: false,
      horizontal: null,
      vertical: null,
      emphasis: false
    }),
    mounted() {	
      this.applyHelperAttributes()
      this.$emit('mounted')
    },
    destroyed() {
      this.$emit('destroyed')
    },
    methods: {
      applyHelperAttributes() {
        const attributes = this.$el.attributes
        if (attributes.getNamedItem('horizontal-solo')) {
          this.horizontal = true     
        }
        if (attributes.getNamedItem('vertical-solo')) {
          this.vertical = true
        }
        if (attributes.getNamedItem('horizontal-solo-emphasis')) {
          this.horizontal = true
          this.emphasis = true
        }
        if (attributes.getNamedItem('vertical-solo-emphasis')) {
          this.vertical = true
          this.emphasis = true
        }
        if (attributes.getNamedItem('horizontal-or')) {
          this.horizontal = true
          this.segmented = true
        } 
        if (attributes.getNamedItem('vertical-or')) {
          this.vertical = true
          this.segmented = true
        }
      }   
    }
  }
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_divider'  
</style>

