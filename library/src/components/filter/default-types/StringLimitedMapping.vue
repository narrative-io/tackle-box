<template lang="pug">
  .nio-filter-properties.string-limited
    NioFilterProperty(
      :description="description"
      :options="filter.options ? filter.options : defaultOptions"
      v-bind:value.sync="filter.value"
    )
      template(v-slot:custom-option)
        .string-limited-custom
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
          NioCheckbox(v-model="includeMapping" :label="filter.customOption.label ? filter.customOption.label : 'Map to:'") 
          NioSelect(
            multiple
            v-if="filter.customOption.right.config.items.length > 0"
            v-model="filter.customOption.right.value" 
            :items="filter.customOption.right.config.items"
            :label="'Select'"
            :disabled="!includeMapping"
            item-text="label"
            item-value="value" 
            selection-pills
          )
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
    includeMapping: false
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
    },
    includeMapping(val) {
      if (val === false) {
        this.filter.customOption.right.value = []
      }
    }
  },
  components: { NioFilterProperty, NioSelect, NioCheckbox }
}
</script>

<style lang="sass" scoped>
</style>