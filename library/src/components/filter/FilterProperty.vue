<template lang="pug">
  .nio-filter-property
    .title-description(:class="{'centered': !title}")
      .title.nio-h5.text-primary-darker(v-if="title") {{ title }}
      .description.nio-p.text-primary-dark {{ description }}
    .options
      .option.nio-p.nio-bold.text-primary-dark(v-for="option in options" @click="optionClicked(option)") {{ option.label }}
</template>

<script>

export default {
  name: 'nio-filter-property',
  props: {
    "title": { type: String, required: false },
    "description": { type: String, required: true },
    "options": { type: Array, required: true }
  },
  data: () => ({
    
  }),	
  methods: {
    optionClicked(option) {
      this.$emit('optionClicked', option)
    }
  }
}
</script>

<style lang="sass" scoped>
  @import '@/styles/mixins/filter/_filter-property'  
</style>