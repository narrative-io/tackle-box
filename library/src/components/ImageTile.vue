<template lang="pug">
  v-img.nio-image-tile(
    :class="[size]"
    :width="sizes[size]"
    :height="sizes[size]"
    :style="{background: imgBackground}"
    aspect-ratio="1"
    v-bind="$attrs"
    v-on="$listeners" 
  ) 
    template(v-slot:placeholder)
      slot(name="nio-image-placeholder")
</template>

<script>
 
  export default {
    name: 'nio-image-tile',
    data: () => ({
      sizes: {
        'extra-small': 32,
        'small': 48,
        'normal': 64,
        'large': 96
      }
    }),
    props: {
      "size": { type: String, required: false, default: "normal" },
      "imgBackground": { type: String, required: false }
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
