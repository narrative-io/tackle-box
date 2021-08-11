<template lang="pug">
  .nio-filter-properties.boolean
    NioFilterProperty(
      :description="description"
      :options="filter.options ? filter.options : defaultOptions"
      :customOptionLoading="false"
      v-bind:value.sync="filter.value"
    )
</template>

<script>

import NioFilterProperty from '../FilterProperty'

export default {
  name: 'nio-filter-properties-object',
  props: {
    "filter": { type: Object, required: true },
    "customOptionLoading": { type: Boolean, required: false, default: false }
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
          label: 'Include all values',
          value: 'default',
        },
        {
          label: "Include if present",
          value: 'ifPresent',
        }
      ]
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
  },
  watch: {
    filter: {
      deep: true,
      handler() {
        this.updateValue()
      }
    }
  },
  components: { NioFilterProperty }
}
</script>

<style lang="sass" scoped>
</style>