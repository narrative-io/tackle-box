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
      .option-content.loading(v-if="customOptionLoading")
        v-progress-circular.progress(size="40" indeterminate color="#1438F5")
      .option-content(v-else)
        slot(name="custom-option")
</template>

<script>

export default {
  name: 'nio-filter-property',
  props: {
    "heading": { type: String, required: false },
    "description": { type: String, required: true },
    "options": { type: Array, required: true },
    "value": { type: String, required: true },
    "customOptionLoading": { type: Boolean, required: false, default: false }
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