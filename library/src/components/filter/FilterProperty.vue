<template lang="pug">
  .nio-filter-property
    .heading-description
      .heading.nio-h5.text-primary-darker(v-if="heading") {{ heading }}
      .description.nio-p.text-primary-dark(:class="{'centered': !heading}") {{ description }}
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
    "heading": { type: String, required: false },
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