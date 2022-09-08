<template lang="pug">
  .nio-filter-properties.binary
    NioFilterProperty(
      v-bind:value.sync="filter.value"
      :description="description"
      :options="filter.options ? filter.options : defaultOptions"
      :custom-option-loading="customOptionLoading"
      :join-option="filter.joinOption"
    )
      template(v-slot:custom-option)
        //- .binary-custom
          //- .heading.nio-h5.text-primary-darker Choose value
          //- .description.nio-p.text-primary-dark Set which boolean value you want to include.
          //- .controls
</template>

<script>

import NioFilterProperty from '../FilterProperty'

export default {
  name: 'nio-filter-properties-binary',
  components: { NioFilterProperty },
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
        },
        // {
        //   label: 'Custom',
        //   value: 'custom',
        // }
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