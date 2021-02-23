<template lang="pug">
    .nio-date-field
      v-menu(
        v-model="datepickerVisible"
        :close-on-content-click="false"
        lazy
        transition="scale-transition"
        bottom
        nudge-bottom="60"
        :min-width="datepickerWidth"
        :max-width="datepickerWidth"
      )
        template(v-slot:activator="{ on }")
          NioTextField(
            ref="nio-date-ref"
            readonly
            label="From Date"
            :value="fromDatepicker"
            v-model="fromDatepicker"
            v-on="on"
            append
            iconName="utility-chevron-down"
            iconColor="#4F64AF"
          )
        v-date-picker(
          full-width
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
    datepickerWidth: 300
  }),
  computed: {
    fromDatepicker() {
      const options = { timeZone: 'UTC', year: 'numeric', month: 'short', day: 'numeric' }
      const date = new Date(this.model)
      return date.toLocaleDateString(undefined, options)
    },
  },
  methods: {
    handleDateInput(val) {
      this.$emit('update', val)
    },
    textFieldResize(val) {
      this.datepickerWidth = val
    }
  },
  mounted() {	
    const resizeObserver = new ResizeObserver((val) => {
      this.textFieldResize(val[0].contentRect.width)
    })
    resizeObserver.observe(this.$refs['nio-date-ref'].$vnode.elm)
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

