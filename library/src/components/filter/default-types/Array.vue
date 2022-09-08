<template lang="pug">
  .nio-filter-properties.boolean
    NioFilterProperty(
      v-bind:value.sync="filter.value"
      :description="description"
      :options="filter.options ? filter.options : defaultOptions"
      :join-option="filter.joinOption"
      :custom-option-loading="false"
    )
</template>

<script>

import NioFilterProperty from '../FilterProperty'
import NioFilterJoinOption from '../join/JoinOption'

export default {
  name: 'nio-filter-properties-object',
  components: { NioFilterProperty, NioFilterJoinOption },
  props: {
    "filter": { type: Object, required: true },
    "customOptionLoading": { type: Boolean, required: false, default: false },
    "summary": { type: Boolean, required: false, default: false }
  },
  data: () => ({
    description: 'Select the data to include'
  }),	
  computed: {
    defaultOptions() {
      if (!this.filter) {
        return []
      }
      return [
        {
          label: 'Optional Attribute',
          value: 'default',
        },
        {
          label: "Required Attribute",
          value: 'ifPresent',
        }
      ]
    }
  },
   watch: {
    filter: {
      deep: true,
      handler() {
        this.updateValue()
      }
    }
  },
  mounted() {
    this.updateValue()
  },
  methods: {
    updateValue() {
      const options = this.filter.options ? this.filter.options : this.defaultOptions
      this.$emit('valueChanged', [options.find(option => option.value === this.filter.value).label])
    }
  }
}
</script>

<style lang="sass" scoped>
</style>