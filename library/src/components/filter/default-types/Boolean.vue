<template lang="pug">
  .nio-filter-properties.boolean
    NioFilterProperty(
      :description="description"
      :options="filter.options ? filter.options : defaultOptions"
      :customOptionLoading="customOptionLoading"
      :joinOption="filter.joinOption"
      v-bind:value.sync="filter.value"
    )
      template(v-slot:custom-option)
        .boolean-custom
          .heading.nio-h5.text-primary-darker Choose value
          .description.nio-p.text-primary-dark Set which boolean value you want to include.
          .controls
            NioRadioGroup(v-model="filter.customOption.value")
              NioRadioButton(:value="true" label="true")
              NioRadioButton(:value="false" label="false")
</template>

<script>

import NioFilterProperty from '../FilterProperty'
import NioRadioGroup from '../../../components/RadioGroup'
import NioRadioButton from '../../../components/RadioButton'

export default {
  name: 'nio-filter-properties-boolean',
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
        },
        {
          label: 'Custom',
          value: 'custom',
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
  components: { NioFilterProperty, NioRadioGroup, NioRadioButton }
}
</script>

<style lang="sass" scoped>
</style>