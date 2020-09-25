<template lang="pug">
  v-btn.nio-button(
    :ripple="false" 
    :class="[`nio-button-${size}`, `nio-button-${variant}`, {'nio-button-caps': caps}]"
    v-bind="$attrs"
    v-on="$listeners" 
    ref="nio-button-ref"
  )
    slot
    template(v-for="(index, name) in $scopedSlots" v-slot:[name]="data")
      slot(:name="name" v-bind="data") 
</template>

<script>
  
  export default {
    name: 'nio-button',
    props: {
      "variant": { type: String, required: false, default: "primary" },
      "size": { type: String, required: false, default: "extra-large"},
      "caps": { type: Boolean, required: false, default: true }

    },
    methods: {
      applyHelperAttributes() {
        const attributes = this.$el.attributes
        if (attributes.getNamedItem('normal-primary')) {
          this.variant = 'primary'
          this.size = 'normal'
        }
      }
    },
    mounted() {
      this.applyHelperAttributes()
    }
  }
</script>

<style lang="sass">
  @import '../styles/mixins/_button'  
</style>