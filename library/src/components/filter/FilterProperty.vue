<template lang="pug">
  .nio-filter-property
    .heading-description
      .heading.nio-h5.text-primary-darker(v-if="heading") {{ heading }}
      .description.nio-p.text-primary-dark(:class="{'centered': !heading}") {{ description }}
    .options
      .option.nio-p.nio-bold.text-primary-dark(
        v-for="option in computeOptions"
        :class="{'selected': value === option.value, 'custom-selected': value === 'custom', 'join-selected': value === 'join' }"
        @click="update(option.value)"
      ) {{ option.label }}
        .option-selected-pointer(v-if="(value === 'custom' && option.value === 'custom') || (value === 'join' && option.value === 'join')")
    .custom-option(
      v-if="value === 'custom'"
    )  
      .option-content.loading(v-if="customOptionLoading")
        v-progress-circular.progress(size="40" indeterminate color="#1438F5")
      .option-content(v-else)
        slot(name="custom-option")
    .join-option(
      v-if="value === 'join' && joinableDatasets"
    )  
      .option-content.loading(v-if="joinOptionLoading")
        v-progress-circular.progress(size="40" indeterminate color="#1438F5")
      .option-content(v-else)
        slot(name="join-option")
</template>

<script>

export default {
  name: 'nio-filter-property',
  props: {
    "heading": { type: String, required: false },
    "description": { type: String, required: true },
    "options": { type: Array, required: true },
    "value": { type: String, required: true },
    "customOptionLoading": { type: Boolean, required: false, default: false },
    "joinOptionLoading": { type: Boolean, required: false, default: false },
    "joinableDatasets": { type: Array, required: false}
  },
  data: () => ({
    
  }),	
  model: {
    prop: "value",
    event: "update"
  },
  computed: {
    computeOptions() {
      if (this.joinableDatasets && this.joinableDatasets.length > 0) {
        return this.options
      } else {
        return this.options.filter(option => option.value !== 'join')
      }
    }
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