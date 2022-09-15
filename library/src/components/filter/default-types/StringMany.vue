<template lang="pug">
  .nio-filter-properties.string
    NioFilterProperty(
      v-bind:value.sync="filter.value"
      :description="description"
      :options="filter.options ? filter.options : defaultOptions"
      :custom-option-loading="customOptionLoading"
      :join-option="filter.joinOption"
      :summary="summary"
    )
      template(v-slot:custom-option)
        .string-many-custom(:class="{'summary': summary}")
          .manual-entry-only(
            v-if="filter.customOption && filter.customOption.config.manualEntryOnly"
          )
            NioRadioGroup(
              v-if="filter.customOption.value.listType"
              v-model="filter.customOption.value.listType"
            )
              NioRadioButton(
                value="include" 
                label="Include"
              )
              NioRadioButton(
                value="exclude" 
                label="Exclude"
              )
            .tags-field(v-if="summary")
              NioTagsField(
                v-model="filter.customOption.value.manualEntry"
                :disabled="true"
                :max-height="500"
                :check-scroll-id="panelIdempotency"
                label="Specified values"
              )
            .textarea(v-else)       
              NioTextarea(
                v-model="filter.customOption.value.manualEntry"
              )
              .instructions.nio-p.text-primary-dark Enter each value on a separate line {{ summary }}
          NioTabs(
            :tabs="tabs"
            v-model="activeTab"
            v-else
          )
            template(v-slot:list)
              NioSlatTable(
                v-if="filter.customOption.config.list.items.length > 0 && filter.customOption.config.list.columns.length > 0 && filter.customOption.config.list.searchableProps"     				
                :items="filter.customOption.config.list.items"
                :columns="filter.customOption.config.list.columns"
                :default-selection="initialListItems"
                :searchable-props="filter.customOption.config.list.searchableProps"
                pagination
                multi-select		
                search-header
                dense-rows
                @selectionChanged="listSelectionChanged($event)"
              )
                template(v-slot:custom-header-element)
                  NioRadioGroup(
                    v-if="filter.customOption.value.listType"
                    v-model="filter.customOption.value.listType"
                  )
                    NioRadioButton(
                      value="include" 
                      label="Include"
                    )
                    NioRadioButton(
                      value="exclude" 
                      label="Exclude"
                    )
            template(v-slot:manual)
              NioRadioGroup(
                v-if="filter.customOption.value.listType"
                v-model="filter.customOption.value.listType"
              )
                NioRadioButton(
                  value="include" 
                  label="Include"
                )
                NioRadioButton(
                  value="exclude" 
                  label="Exclude"
                )
              .textarea      
                NioTextarea(
                  v-model="filter.customOption.value.manualEntry"
                )
                .instructions.nio-p.text-primary-dark Enter each value on a separate line

</template>

<script>

import NioFilterProperty from '../FilterProperty'
import NioTabs from '../../Tabs'
import NioSlatTable from '../../table/SlatTable'
import NioRadioGroup from '../../RadioGroup'
import NioRadioButton from '../../RadioButton'
import NioTextarea from '../../Textarea'
import NioTagsField from '../../TagsField'

export default {
  name: 'nio-filter-properties-string-many',
  components: { 
    NioFilterProperty, 
    NioTabs, 
    NioSlatTable, 
    NioRadioGroup, 
    NioRadioButton, 
    NioTextarea,
    NioTagsField
  },
  props: {
    "filter": { type: Object, required: true },
    "customOptionLoading": { type: Boolean, required: false, default: false },
    "summary": { type: Boolean, required: false, default: false },
    "panelIdempotency": { type: String, required: false, default: null }
  },
  data: () => ({
    initialListItems: [],
    description: 'Select the data to include',
    tabs: [
      {
        name: 'list',
        label: 'Select from list'
      },
      {
        name: 'manual',
        label: 'Manual entry'
      }
    ],
    activeTab: 'list'
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
    if (this.filter.customOption && !this.filter.customOption.config.manualEntryOnly) {
      this.initialListItems = this.filter.customOption.value.items.length ? this.filter.customOption.value.items.map(item => item.id) : []
    }
    this.updateValue()
  },
  methods: {
    listSelectionChanged(val) {
      this.filter.customOption.value.items = val
    },
    updateValue() {
      const options = this.filter.options ? this.filter.options : this.defaultOptions
      this.$emit('valueChanged', [options.find(option => option.value === this.filter.value).label])
    }
  }
}
</script>

<style lang="sass" scoped>
</style>