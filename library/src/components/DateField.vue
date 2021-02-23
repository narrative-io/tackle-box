<template lang="pug">
    .nio-date-field
      v-menu(
        v-model="datepickerVisible"
        :close-on-content-click="false"
        lazy
        transition="scale-transition"
        :attach="node"
        top
        left
        nudgeBottom="12"
        
      )
        template(v-slot:activator="{ on }")
          NioTextField(
            readonly
            label="From Date"
            :value="fromDatepicker"
            v-model="fromDatepicker"
            v-on="on"
            append
            iconName="utility-chevron-down"
            ref="nio-date-field-ref"
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
    node: null,
    datepickerVisible: false
  }),
  computed: {
    fromDatepicker() {
      const options = { year: 'numeric', month: 'short', day: 'numeric' }
      const date = new Date(this.model)
      return date.toLocaleDateString(undefined, options)
    },
  },
  methods: {
    applyHelperAttributes() {
      const attributes = this.$el.attributes
      // if (attributes.getNamedItem('attach-to-parent')) {
      //   this.attach = true
      // }
    },
    handleDateInput(val) {
      this.$emit('update', val)
    }
  },
  mounted() {	
    this.applyHelperAttributes()
    this.node = this.$refs['nio-date-field-ref'].$vnode.elm
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

