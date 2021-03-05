<template lang="pug">
  .nio-filter-properties.string-limited
    NioFilterProperty(
      :description="description"
      :options="filter.options ? filter.options : defaultOptions"
      v-bind:value.sync="filter.value"
    )
      template(v-slot:custom-option)
        .string-limited-custom
          .list-type
            NioRadioGroup(v-model="filter.customOption.value.listType" :value="filter.customOption.value.listType")
              NioRadioButton(value="include" label="Include")
              NioRadioButton(value="exclude" label="Exclude")
          .filter-selection    
            .custom-text(
              v-if="filter.customOption.config.text"
            )
              .inclusion(
                v-if="filter.customOption.config.text.include && filter.customOption.value.listType === 'include'"
              )
                .heading.nio-h5.text-primary-darker(v-if="filter.customOption.config.text.include.heading") {{ filter.customOption.config.text.include.heading }}
                .description.nio-p.text-primary-dark(v-if="filter.customOption.config.text.include.heading") {{ filter.customOption.config.text.include.description }}
              .inclusion(v-if="filter.customOption.config.text.exclude && filter.customOption.value.listType === 'exclude'")
                .heading.nio-h5.text-primary-darker(v-if="filter.customOption.config.text.exclude.heading") {{ filter.customOption.config.text.exclude.heading }}
                .description.nio-p.text-primary-dark(v-if="filter.customOption.config.text.exclude.heading") {{ filter.customOption.config.text.exclude.description }}	
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
import NioRadioGroup from '../../RadioGroup'
import NioRadioButton from '../../RadioButton'

export default {
  name: 'nio-filter-properties-string-limited',
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
  components: { NioFilterProperty, NioSelect, NioRadioGroup, NioRadioButton }
}
</script>

<style lang="sass" scoped>
</style>