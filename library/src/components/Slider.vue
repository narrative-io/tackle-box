<template lang="pug">
  v-slider.nio-slider(
    :min="min"
    :max="max"
    
  )
   
</template>

<script>


export default {
  name: 'nio-slider',
  props: {
    "model": { required: true },
    "min": { type: Number, required: false, default: null },
    "max": { type: Number, required: false, default: null }
  },
  data: () => ({

  }),		
  model: {
    prop: "model",
    event: "update"
  },
  methods: {
  
  }
}
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_slider'  
</style>