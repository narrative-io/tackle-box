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
            v-if="filter.customOption.config.items.length > 0"
            v-model="filter.customOption.value" 
            :items="filter.customOption.config.items"
            :label="'Select'"
            item-text="label"
            item-value="value" 
            selection-pills
          )
</template>

<script>

import NioFilterProperty from '../FilterProperty'
import NioSelect from '../../Select'

export default {
  name: 'nio-filter-properties-string-limited-mapping',
  props: {
    "filter": { type: Object, required: true },
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
    }
  },
  components: { NioFilterProperty, NioSelect }
}
</script>

<style lang="sass" scoped>
</style>