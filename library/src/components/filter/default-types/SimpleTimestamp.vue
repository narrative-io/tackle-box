<template lang="pug">
  .nio-filter-properties.event-timestamp
    NioFilterProperty(
      :title="filter.text.title ? filter.text.title : '' "
      :description="filter.text.description ? filter.text.description : ''"
      :options="defaultOptions"
      v-bind:value.sync="filter.value"
    )
      template(v-slot:custom-option)
        .date-range-custom
          .nio-p.text-primary-dark Select the data to include
          NioDateField(
            v-model="filter.customOption.value[0]"
            :min="startMinDate"
            :max="startMaxDate"
          )
          .nio-p.text-primary-dark to
          NioDateField(
            v-model="filter.customOption.value[1]"
            :min="stopMinDate"
            :max="stopMaxDate"
          )
        .validation-error.nio-p-small.text-error(v-if="!valid") Start date must be later than stop date
</template>

<script>

import NioFilterProperty from '../FilterProperty'
import NioDateField from '../../DateField'

export default {
  name: 'nio-filter-properties-simple-timestamp',
  props: {
    "filter": { type: Object, required: true }
  },
  data: () => ({
    valid: true
  }),	
  computed: {
    defaultOptions() {
      if (!this.filter) {
        return []
      }
      return [
				{
					label: `All ${this.filter.name}s`,
					value: 'default',
				},
				{
					label: "Include if present",
					value: 'ifPresent',
				},
				{
					label: 'Custom',
					value: 'custom',
				}
			] 
    },
    startMinDate() {
      return this.filter.customOption.config ? this.filter.customOption.config.startMin : undefined 
    },
    startMaxDate() {
      return this.filter.customOption.config ? this.filter.customOption.config.startMax : undefined 
    },
    stopMinDate() {
      return this.filter.customOption.config ? this.filter.customOption.config.stopMin : undefined 
    },
    stopMaxDate() {
      return this.filter.customOption.config ? this.filter.customOption.config.stopMax : undefined 
    }
  },
  methods: {
    validate() {
      if (this.filter.value === 'custom') {
        if (Date.parse(this.filter.customOption.value[0]) >= Date.parse(this.filter.customOption.value[1])) {
          this.setValid(false)
        } else {
          this.setValid(true)
        }
      } else {
        this.setValid(true)
      }
    },
    setValid(val) {
      if (val) {
        this.valid = true
        this.filter.valid = true
      } else {
        this.valid = false
        this.filter.valid = false
      }
    },
    updateValue() {
      this.$emit('valueChanged', [
        this.defaultOptions.find(option => option.value === this.filter.value).label
      ])
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
  mounted() {
    this.updateValue()
  },
  components: { NioFilterProperty, NioDateField }
}
</script>

<style lang="sass" scoped>
</style>