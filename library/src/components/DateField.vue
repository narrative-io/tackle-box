<template lang="pug">
    .nio-date-field
      v-menu(
        v-model="datepickerVisible"
        :close-on-content-click="false"
        lazy
        transition="scale-transition"
        offset-y
      )
        template(v-slot:activator="{ on }")
          NioTextField(
            label="From Date"
            :value="fromDatepicker"
            v-model="fromDatepicker"
            v-on="on"
            iconName="utility-chevron-down"
            iconColor="#4F64AF"
          )
        v-date-picker(
          locale="en-in"
          :min="minDate"
          :max="maxDate"
          :value="model"
          no-title
          @input="handleDateInput($event)"
        )  
</template>

<script>

import NioTextField from './TextField'

export default {
  name: 'nio-date-field',
  props: {
    "model": { required: false },
    "minDate": { required: false },
    "maxDate": { required: false }
  },
  model: {
    prop: "model",
    event: "update"
  },
  data: () => ({
    datepickerVisible: false,
  }),
  computed: {
    fromDatepicker() {
      return this.model
    },
  },
  methods: {
    applyHelperAttributes() {
      const attributes = this.$el.attributes
      // if (attributes.getNamedItem('append')) {
      //   this.appendAttr = true
      // }	
    },
    handleDateInput(val) {
      this.$emit('update', val)
    }
  },
  mounted() {	
    this.applyHelperAttributes()
    this.$emit('mounted')
  },
  destroyed() {
    this.$emit('destroyed')
  },
  components: { NioTextField }
}
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_date-field'  
</style>

