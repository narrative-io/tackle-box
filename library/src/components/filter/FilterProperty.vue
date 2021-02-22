<template lang="pug">
  .nio-filter-property
    .title-description
      .title.nio-h5.text-primary-darker(v-if="title") {{ title }}
      .description.nio-p.text-primary-dark(:class="{'centered': !title}") {{ description }}
    .options
      .option.nio-p.nio-bold.text-primary-dark(
        v-for="option in options"
        :class="{'selected': value === option.value, 'custom-selected': value === 'custom' }"
        @click="update(option.value)"
      ) {{ option.label }}
        .custom-selected-pointer(v-if="value === 'custom' && option.value === 'custom'")
    .custom-option(
      v-if="value === 'custom'"
    )  
      .option-content
        slot(name="custom-option")  
</template>

<script>

export default {
  name: 'nio-filter-property',
  props: {
    "title": { type: String, required: false },
    "description": { type: String, required: true },
    "options": { type: Array, required: true },
    "value": { type: String, required: true }
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