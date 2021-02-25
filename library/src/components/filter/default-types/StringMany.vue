<template lang="pug">
  .nio-filter-properties.string-many {{ activeTab }}
    NioFilterProperty(
      :description="description"
      :options="filter.options ? filter.options : defaultOptions"
      v-bind:value.sync="filter.value"
    )
      template(v-slot:custom-option)
        .string-many-custom
          NioTabs(
            :tabs="tabs"
            v-model="activeTab"
          )
            template(v-slot:list)
              NioSlatTable(
                multi-select		
                dense-rows				
                v-if="filter.customOption.config.list.items.length > 0 && filter.customOption.config.list.columns.length > 0"
                :items="filter.customOption.config.list.items"
                :columns="filter.customOption.config.list.columns"
                :defaultSelection="initialListItems"
                pagination
                @selectionChanged="listSelectionChanged($event)"
              )
                template(v-slot:custom-header-element)
                  NioRadioGroup(v-model="filter.customOption.value.listType")
                    NioRadioButton(value="include" label="Include")
                    NioRadioButton(value="exclude" label="Exclude")
            template(v-slot:manual)
              NioRadioGroup(v-model="filter.customOption.value.listType")
                NioRadioButton(value="include" label="Include")
                NioRadioButton(value="exclude" label="Exclude")
              NioTextarea(
                v-model="test"
              )
</template>

<script>

import NioFilterProperty from '../FilterProperty'
import NioTabs from '../../Tabs'
import NioSlatTable from '../../table/SlatTable'
import NioRadioGroup from '../../RadioGroup'
import NioRadioButton from '../../RadioButton'
import NioTextarea from '../../Textarea'

export default {
  name: 'nio-filter-properties-string-many',
  props: {
    "filter": { type: Object, required: true },
  },
  data: () => ({
    initialListItems: [],
    test: 'a',
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
    this.initialListItems = this.filter.customOption.value.items.length ? this.filter.customOption.value.items.map(item => item.id) : []
  },
  methods: {
    listSelectionChanged(val) {
      this.filter.customOption.value.items = val
    }
  },
  watch: {
    filter: {
      deep: true,
      handler() {
        const options = this.filter.options ? this.filter.options : this.defaultOptions
        this.$emit('valueChanged', [options.find(option => option.value === this.filter.value).label])
      }
    }
  },
  components: { NioFilterProperty, NioTabs, NioSlatTable, NioRadioGroup, NioRadioButton, NioTextarea }
}
</script>

<style lang="sass" scoped>
</style>