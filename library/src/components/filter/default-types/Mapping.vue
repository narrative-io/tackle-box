<template lang="pug">
  .nio-filter-properties.string-limited
    NioFilterProperty(
      v-bind:value.sync="filter.value"
      :description="description"
      :options="filter.options ? filter.options : defaultOptions"
      :custom-option-loading="customOptionLoading"
      :summary="summary"
    )
      template(v-slot:custom-option)
        .string-limited-custom
          .left
            NioSelect(
              v-if="filter.customOption.left.config.items.length > 0"
              v-model="filter.customOption.left.value" 
              :value="filter.customOption.left.value"
              :items="filter.customOption.left.config.items"
              :label="filter.customOption.left.config.selectLabel ? filter.customOption.left.config.selectLabel : 'Select'"
              item-text="label"
              item-value="value"
              item-disabled="disabled"
              selection-pills
              keep-alive
              multiple
            )
            .validation-error.nio-p-small.text-error(v-if="!leftValid") {{ filter.customOption.mapping.value ? 'You must choose at least 1 value to map from' : 'You must select at least 1 value' }} 
          NioCheckbox(v-model="filter.customOption.mapping.value" :label="filter.customOption.mapping.label ? filter.customOption.mapping.label : 'Map to:'") 
          .right
            NioSelect(
              v-if="filter.customOption.right.config.items.length > 0"
              v-model="filter.customOption.right.value" 
              :value="filter.customOption.right.value"
              :items="filter.customOption.right.config.items"
              :label="filter.customOption.right.config.selectLabel ? filter.customOption.right.config.selectLabel : 'Select'"
              :disabled="!filter.customOption.mapping.value"
              item-text="label"
              item-value="value"
              item-disabled="disabled"
              selection-pills
              multiple
            )
            .validation-error.nio-p-small.text-error(v-if="!rightValid && leftValid") You must choose at least 1 value to map to
</template>

<script>

import NioFilterProperty from '../FilterProperty'
import NioSelect from '../../Select'
import NioCheckbox from '../../Checkbox'

export default {
  name: 'nio-filter-properties-mapping',
  components: { NioFilterProperty, NioSelect, NioCheckbox },
  props: {
    "filter": { type: Object, required: true },
    "customOptionLoading": { type: Boolean, required: false, default: false },
    "summary": { type: Boolean, required: false, default: false }
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
          label: 'Optional Attribute',
          value: 'default'
        },
        {
          label: "Required Attribute",
          value: 'ifPresent'
        },
        {
          label: 'Custom',
          value: 'custom'
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
    validate() {
      this.leftValid = !this.filter.customOption.left.value.length ? false : true
      if (this.filter.customOption.mapping.value) {
        this.rightValid = !this.filter.customOption.right.value.length ? false : true
      } else {
        this.rightValid = true
      }
      if (!this.leftValid || !this.rightValid) {
        this.filter.valid = false
      } else {
        this.filter.valid = true
      }
    },
    updateValue() {
      if (this.filter.customOption.mapping.mutuallyExclusive) {
        this.filter.customOption.left.config.items.map(item => {
          const matchingItem = this.filter.customOption.right.value.find(val => val === item.value)
          if (matchingItem) {
            item.disabled = true
          } else {
            item.disabled = false
          }
        })
        this.filter.customOption.right.config.items.map(item => {
          const matchingItem = this.filter.customOption.left.value.find(val => val === item.value)
          if (matchingItem) {
            item.disabled = true
          } else {
            item.disabled = false
          }
        })
      }
      const options = this.filter.options ? this.filter.options : this.defaultOptions
      this.$emit('valueChanged', [options.find(option => option.value === this.filter.value).label])
      this.validate()
    }
  }
}
</script>

<style lang="sass" scoped>
</style>