<template lang="pug">
  .nio-filter-property
    .title-description
      .title.nio-h5.text-primary-darker(v-if="title") {{ title }}
      .description.nio-p.text-primary-dark(:class="{'centered': !title}") {{ description }}
    .options
      .option.nio-p.nio-bold.text-primary-dark(
        v-for="option in options"
        :class="{'selected': value.name === option.value.name}"
        @click="update(option.value)"
      ) {{ option.label }}
</template>

<script>

export default {
  name: 'nio-filter-property',
  props: {
    "title": { type: String, required: false },
    "description": { type: String, required: true },
    "options": { type: Array, required: true },
    "value": { type: Object, required: true }
  },
  data: () => ({
    
  }),	
  model: {
    prop: "value",
    event: "update"
  },
  methods: {
    update(value) {
      this.$emit('update:value', value)
    }
  }
}
</script>

<style lang="sass" scoped>
  @import '@/styles/mixins/filter/_filter-property'  
</style>