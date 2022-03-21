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
        NioTooltip(
          v-if="option.tooltip"
          :message="option.tooltip"
          :open-delay="250"
          content-class="nio-filter-option-tooltip"
          nudge-top
          open-on-hover
        )
        .option-selected-pointer(v-if="(value === 'custom' && option.value === 'custom') || (value === 'join' && option.value === 'join')")
    .custom-option(
      v-if="value === 'custom'"
    )  
      .option-content.loading(v-if="customOptionLoading")
        v-progress-circular.progress(
          size="40" 
          color="#1438F5"
          indeterminate 
        )
      .option-content(v-else-if="filter && $scopedSlots[`filter-properties-custom-${filter.name}`]")
        slot(:name="`filter-properties-custom-${filter.name}`" v-bind="filter")
      .option-content(v-else)
        slot(name="custom-option")
    .join-option(
      v-if="value === 'join' && hasJoinableDatasets"
    )  
      .option-content
        NioFilterJoinOption(
          :join-option="joinOption"
        )
</template>

<script>

import NioFilterJoinOption from './join/JoinOption'
import NioTooltip from '../Tooltip'

export default {
  name: 'nio-filter-property',
  components: { NioFilterJoinOption, NioTooltip },
  props: {
    "filter": { type: Object, required: false },
    "heading": { type: String, required: false },
    "description": { type: String, required: true },
    "options": { type: Array, required: true },
    "value": { type: String, required: true },
    "customOptionLoading": { type: Boolean, required: false, default: false },
    "joinOption": { type: Object, required: false}
  },
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
  methods: {
    update(value) {
      this.$emit('update:value', value)
    }
  }
}
</script>

<style lang="sass">
  .nio-filter-option-tooltip
    width: 272px !important
    min-width: 272px !important
</style>

<style lang="sass" scoped>
  @import '@/styles/mixins/filter/_filter-property'  
</style>