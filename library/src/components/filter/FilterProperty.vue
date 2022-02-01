<template lang="pug">
  .nio-filter-property {{ hasJoinableDatasets }}
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
      v-if="value === 'join' && hasJoinableDatasets"
    )  
      .option-content
        NioFilterJoinOption(
          :joinOption="joinOption"
        )
</template>

<script>

import NioFilterJoinOption from './join/JoinOption'

export default {
  name: 'nio-filter-property',
  props: {
    "heading": { type: String, required: false },
    "description": { type: String, required: true },
    "options": { type: Array, required: true },
    "value": { type: String, required: true },
    "customOptionLoading": { type: Boolean, required: false, default: false },
    "joinOption": { type: Object, required: false}
  },
  data: () => ({
    
  }),	
  model: {
    prop: "value",
    event: "update"
  },
  computed: {
    computeOptions() {
      if (this.hasJoinableDatasets) {
        return this.options
      } else {
        return this.options.filter(option => option.value !== 'join')
      }
    },
    hasJoinableDatasets() {
      return this.joinOption && this.joinOption.config && this.joinOption.config.datasets && this.joinOption.config.datasets.length > 0
    }
  },
  mounted() {
    console.log(this.joinOption)
  },
  methods: {
    update(value) {
      this.$emit('update:value', value)
    }
  },
  components: { NioFilterJoinOption }
}
</script>

<style lang="sass" scoped>
  @import '@/styles/mixins/filter/_filter-property'  
</style>