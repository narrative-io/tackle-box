<template lang="pug">
  .nio-filter-properties.frequency
    NioFilterProperty(
      :description="description"
      :options="filter.options ? filter.options : defaultOptions"
      v-bind:value.sync="filter.value"
    )
      template(v-slot:custom-option)
        .frequency-custom
          .heading.nio-h5.text-primary-darker(v-if="customTitle") {{ customTitle }}
          .description.nio-p.text-primary-dark(v-if="customDescription") {{ customDescription }}
          .frequency-section
            .label.nio-p.text-primary-dark {{ filter.customOption.config.text ? filter.customOption.config.text : 'Buy once every' }} 
            .selection
              .fields
                NioTextField(
                  v-model="filter.customOption.value[0]"
                  :value="filter.customOption.value[0]"
                  :min="1"
                  type="number"
                  solo
                )
                NioSelect(
                  v-model="filter.customOption.value[1]"
                  :items="filter.customOption.config.periodOptions"
                  :value="filter.customOption.value[1]"
                  item-text="label"
                  item-value="value" 
                )
          .supporting-option-section(v-if="filter.customOption.supportingOption")
            .label.nio-p.text-primary-dark {{ filter.customOption.supportingOption.config.text ? filter.customOption.supportingOption.config.text : 'Receive a single record for IDs that has' }}
            NioSelect.selection(
              multiple
              v-if="filter.customOption.supportingOption.config.items.length > 0"
              v-model="filter.customOption.supportingOption.value" 
              :items="filter.customOption.supportingOption.config.items"
              :label="filter.customOption.supportingOption.config.selectLabel ? filter.customOption.supportingOption.config.selectLabel : 'Select'"
              item-text="label"
              item-value="value" 
              selection-pills
            )
</template>

<script>

import NioFilterProperty from '../FilterProperty'
import NioSelect from '../../Select'
import NioTextField from '../../TextField'

export default {
  name: 'nio-filter-properties-frequency',
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
    },
    customTitle() {
      return this.filter.customOption && this.filter.customOption.heading ? this.filter.customOption.heading : null
    },
    customDescription() {
      return this.filter.customOption && this.filter.customOption.description ? this.filter.customOption.description : null
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
  components: { NioFilterProperty, NioSelect, NioTextField }
}
</script>

<style lang="sass" scoped>
</style>