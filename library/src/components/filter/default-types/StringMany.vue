<template lang="pug">
  .nio-filter-properties.string-many
    NioFilterProperty(
      :description="description"
      :options="filter.options ? filter.options : defaultOptions"
      v-bind:value.sync="filter.value"
    )
      template(v-slot:custom-option)
        NioTabs(
          :tabs="tabs"
          v-model="activeTab"
        )
          template(v-slot:list)

          template(v-slot:manual)
        
</template>

<script>

import NioFilterProperty from '../FilterProperty'
import NioTabs from '../../Tabs'

export default {
  name: 'nio-filter-properties-string-many',
  props: {
    "filter": { type: Object, required: true },
  },
  data: () => ({
    description: 'Select the data to include',
    tabs: [
      {
        name: 'lsit',
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
  watch: {
    filter: {
      deep: true,
      handler() {
        const options = this.filter.options ? this.filter.options : this.defaultOptions
        this.$emit('valueChanged', [options.find(option => option.value === this.filter.value).label])
      }
    }
  },
  components: { NioFilterProperty, NioTabs }
}
</script>

<style lang="sass" scoped>
</style>