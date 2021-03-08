<template lang="pug">
  .nio-filter-properties.string-limited
    NioFilterProperty(
      :description="description"
      :options="filter.options ? filter.options : defaultOptions"
      v-bind:value.sync="filter.value"
    )
      template(v-slot:custom-option)
        .string-limited-custom
          .left
            NioSelect(
              multiple
              v-if="filter.customOption.left.config.items.length > 0"
              v-model="filter.customOption.left.value" 
              :items="filter.customOption.left.config.items"
              :label="'Select'"
              item-text="label"
              item-value="value" 
              selection-pills
            )
            .validation-error.nio-p-small.text-error(v-if="!leftValid") You must choose at least 1 value to map from
          NioCheckbox(v-model="filter.customOption.mapping.value" :label="filter.customOption.mapping.label ? filter.customOption.mapping.label : 'Map to:'") 
          .right
            NioSelect(
              multiple
              v-if="filter.customOption.right.config.items.length > 0"
              v-model="filter.customOption.right.value" 
              :items="filter.customOption.right.config.items"
              :label="'Select'"
              :disabled="!filter.customOption.mapping.value"
              item-text="label"
              item-value="value" 
              selection-pills
            )
            .validation-error.nio-p-small.text-error(v-if="!rightValid && leftValid") You must choose at least 1 value to map to
</template>

<script>

import NioFilterProperty from '../FilterProperty'
import NioSelect from '../../Select'
import NioCheckbox from '../../Checkbox'

export default {
  name: 'nio-filter-properties-string-limited-mapping',
  props: {
    "filter": { type: Object, required: true },
  },
  data: () => ({
    description: 'Select the data to include',
    leftValid: true,
    rightValid: true
  }),	
  computed: {
    defaultOptions() {
      if (!this.filter) {
        return []
      }
      return [
        {
          label: `All ${this.filter.name}s`,
          value: 'default'
        },
        {
          label: "Include if present",
          value: 'ifPresent'
        },
        {
          label: 'Custom',
          value: 'custom'
        }
      ]
    }
  },
  mounted() {
    this.updateValue()
  },
  methods: {
    validate() {
      if (this.filter.customOption.mapping.value) {
        this.leftValid = !this.filter.customOption.left.value.length ? false : true
        this.rightValid = !this.filter.customOption.right.value.length ? false : true
      } else {
        this.leftValid = true
        this.rightValid = true
      }
      if (!this.leftValid || !this.rightValid) {
        this.filter.valid = false
      } else {
        this.filter.valid = true
      }
    },
    updateValue() {
      const options = this.filter.options ? this.filter.options : this.defaultOptions
      this.$emit('valueChanged', [options.find(option => option.value === this.filter.value).label])
      this.validate()
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
  components: { NioFilterProperty, NioSelect, NioCheckbox }
}
</script>

<style lang="sass" scoped>
</style>