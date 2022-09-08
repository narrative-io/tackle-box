<template lang="pug">
  .nio-filter-properties.string-limited-include-exclude
    NioFilterProperty(
      v-bind:value.sync="filter.value"
      :description="description"
      :options="filter.options ? filter.options : defaultOptions"
      :custom-option-loading="customOptionLoading"
      :join-option="filter.joinOption"
    )
      template(v-slot:custom-option)
        .string-limited-custom
          .list-type(v-if="filter.customOption.value.listType")
            NioRadioGroup(
              v-model="filter.customOption.value.listType" 
              :value="filter.customOption.value.listType"
            )
              NioRadioButton(
                value="include" 
                label="Include"
              )
              NioRadioButton(
                value="exclude" 
                label="Exclude"
              )
          .filter-selection    
            .custom-text(
              v-if="filter.customOption.value.listType"
            )
              .inclusion(
                v-if="filter.customOption.value.listType === 'include'"
              )
                .heading.nio-h5.text-primary-darker Inclusion list
                .description.nio-p.text-primary-dark {{ listTypeDescription }}
              .exclusion(
                v-if="filter.customOption.value.listType === 'exclude'"
              )
                .heading.nio-h5.text-primary-darker Exclusion list
                .description.nio-p.text-primary-dark {{ listTypeDescription }}
            NioAutocomplete(
              v-if="filter.customOption.config.items.length > 0 && filter.customOption.config.searchable"
              v-model="filter.customOption.value.items" 
              :items="filter.customOption.config.items"
              :label="filter.customOption.config.selectLabel ? filter.customOption.config.selectLabel : 'Select'"
              :multiple="filter.customOption.config.multiple"
              item-text="label"
              item-value="value"
              selection-pills
            )
              template(v-slot:selection="{ item, index }" v-if="filter.customOption.config.multiple")
                span.v-select__selection(v-if="index === 0") 
                  NioPill(
                    selected-value
                  ) {{ item.label ? item.label : item }}
                span.v-select__selection(v-if="index === 1")
                  NioPill(
                    selected-value
                  ) {{ item.label ? item.label : item }}
                span.v-select__selection.more(v-if="index === 2 && filter.customOption.value.items.length === 3") (+{{ filter.customOption.value.items.length - 2 }} other)
                span.v-select__selection.more(v-if="index === 2 && filter.customOption.value.items.length > 3 ") (+{{ filter.customOption.value.items.length - 2 }} others)
            NioSelect(
              v-if="filter.customOption.config.items.length > 0 && !filter.customOption.config.searchable"
              v-model="filter.customOption.value.items" 
              :items="filter.customOption.config.items"
              :label="filter.customOption.config.selectLabel ? filter.customOption.config.selectLabel : 'Select'"
              :multiple="filter.customOption.config.multiple"
              item-text="label"
              item-value="value"
              selection-pills
            )
              template(v-slot:selection="{ item, index }" v-if="filter.customOption.config.multiple")
                span.v-select__selection(v-if="index === 0") 
                  NioPill(
                    selected-value
                  ) {{ item.label ? item.label : item }}
                span.v-select__selection(v-if="index === 1")
                  NioPill(
                    selected-value
                  ) {{ item.label ? item.label : item }}
                span.v-select__selection.more(v-if="index === 2 && filter.customOption.value.items.length === 3") (+{{ filter.customOption.value.items.length - 2 }} other)
                span.v-select__selection.more(v-if="index === 2 && filter.customOption.value.items.length > 3 ") (+{{ filter.customOption.value.items.length - 2 }} others)
</template>

<script>

import NioFilterProperty from '../FilterProperty'
import NioSelect from '../../Select'
import NioAutocomplete from '../../Autocomplete'
import NioRadioGroup from '../../RadioGroup'
import NioRadioButton from '../../RadioButton'
import NioPill from '../../Pill'

export default {
  name: 'nio-filter-properties-string-limited',
  components: { NioFilterProperty, NioSelect, NioAutocomplete, NioRadioGroup, NioRadioButton, NioPill },
  props: {
    "filter": { type: Object, required: true },
    "customOptionLoading": { type: Boolean, required: false, default: false },
    "summary": { type: Boolean, required: false, default: false }
  },
  data: () => ({
    description: 'Select the data to include'
  }),	
  computed: {
    listTypeDescription() {
      const listType = this.filter.customOption.value.listType
      if (listType === 'include') {
        return this.filter.customOption.config.text && this.filter.customOption.config.text.include ? this.filter.customOption.config.text.include : 'Select the values to include'
      } else {
        return this.filter.customOption.config.text && this.filter.customOption.config.text.exclude ? this.filter.customOption.config.text.exclude : 'Select the values to exclude'
      }
    },
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
    updateValue() {
      const options = this.filter.options ? this.filter.options : this.defaultOptions
      this.$emit('valueChanged', [options.find(option => option.value === this.filter.value).label])
    }
  }  
}
</script>

<style lang="sass" scoped>
</style>