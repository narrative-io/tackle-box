<template lang="pug">
  .nio-filter-properties.simple-timestamp
    NioFilterProperty(
      :description="description"
      :options="filter.options ? filter.options : defaultOptions"
      v-bind:value.sync="filter.value"
    )
      template(v-slot:custom-option)
        .simple-timestamp-custom
          .nio-p.text-primary-dark Select the data to include
          .timestamps
            .start(
              :class="{'disabled': !filter.customOption.value.start.enabled}"
            )
              .controls
                NioCheckbox(
                  v-model="filter.customOption.value.start.enabled"
                  label="Set a start date"
                ) 
                //- NioCheckbox.inclusive(
                //-   v-model="filter.customOption.value.start.inclusive"
                //-   label="Inclusive"
                //- )
              NioDateField(
                v-model="filter.customOption.value.start.timestamp"
                :min="startMinDate"
                :max="startMaxDate"
              )
            .end(
              :class="{'disabled': !filter.customOption.value.end.enabled}"
            )
              .controls
                NioCheckbox(
                  v-model="filter.customOption.value.end.enabled"
                  label="Set an end date"
                ) 
                //- NioCheckbox.inclusive(
                //-   v-model="filter.customOption.value.end.inclusive"
                //-   label="Inclusive"
                //- )
              NioDateField(
                v-model="filter.customOption.value.end.timestamp"
                :min="startMinDate"
                :max="startMaxDate"
              )
          .result.nio-p.text-primary-dark
            span(
              v-if="!filter.customOption.value.start.enabled && !filter.customOption.value.end.enabled"
            ) Include all timestamps
            span(
              v-if="filter.customOption.value.start.enabled && !filter.customOption.value.end.enabled"
            ) Include timestamps on or after {{ filter.customOption.value.start.timestamp }}
            span(
              v-if="!filter.customOption.value.start.enabled && filter.customOption.value.end.enabled"
            ) Include timestamps on or before {{ filter.customOption.value.end.timestamp }}
            span(
              v-if="filter.customOption.value.start.enabled && filter.customOption.value.end.enabled"
            ) Include timestamps from {{ filter.customOption.value.start.timestamp }} to {{ filter.customOption.value.end.timestamp }} (inclusive)
        .validation-error.nio-p-small.text-error(v-if="!valid") Start date must be later than stop date
</template>

<script>

import NioFilterProperty from '../FilterProperty'
import NioDateField from '../../DateField'
import NioCheckbox from '../../Checkbox'

export default {
  name: 'nio-filter-properties-simple-timestamp',
  props: {
    "filter": { type: Object, required: true }
  },
  data: () => ({
    valid: true,
    description: 'Select the data to include'
  }),	
  computed: {
    defaultOptions() {
      if (!this.filter) {
        return []
      }
      return [
        {
          label: 'Include all values',
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
        if (Date.parse(this.filter.customOption.value.start.timestamp) >= Date.parse(this.filter.customOption.value.end.timestamp)) {
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
  components: { NioFilterProperty, NioDateField, NioCheckbox }
}
</script>

<style lang="sass" scoped>
</style>