<template lang="pug">
  v-img.nio-image-tile(
    :class="[size]"
    :width="sizes[size]"
    :height="sizes[size]"
    v-bind="$attrs"
    v-on="$listeners" 
  )
    template(v-slot:placeholder)
      .image-placeholder HELLO
        .top
        .bottom
    template(v-for="(index, name) in $scopedSlots" v-slot:[name]="data")
      slot(:name="name" v-bind="data") 
</template>

<script>
 
  export default {
    name: 'nio-image-tile',
    data: () => ({
      sizes: {
        'small': 32,
        'normal': 64,
        'large': 96
      }
    }),
    props: {
      "size": { type: String, required: false, default: "normal" }
    },
    mounted() {	
      this.$emit('mounted')
    },
    destroyed() {
      this.$emit('destroyed')
    }
  }
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_image-tile'  
</style>
