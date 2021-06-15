<template lang="pug">
    .nio-date-field(v-on="$listeners")
      v-menu(
        v-model="datepickerVisible"
        :close-on-content-click="false"
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
            :label="$attrs.label ? $attrs.label : 'Select date'"
            v-model="localModel"
            v-on="on"
            append
            iconName="utility-chevron-down"
            iconColor="#4F64AF"
            v-bind="$attrs"
          )
        v-date-picker(
          full-width
          locale="en-in"
          :min="min"
          :max="max"
          :value="localModel"
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
    "min": { required: false },
    "max": { required: false }
  },
  model: {
    prop: "model",
    event: "update"
  },
  data: () => ({
    datepickerVisible: false,
    datepickerWidth: 300,
    localModel: null
  }),
  methods: {
    handleDateInput(val) {
      this.$emit('update', val)
    },
    textFieldResize(val) {
      this.datepickerWidth = val
    }
  },
  mounted() {	
    this.localModel = this.model
    const resizeObserver = new ResizeObserver((val) => {
      this.textFieldResize(val[0].contentRect.width)
    })
    resizeObserver.observe(this.$refs['nio-date-ref'].$vnode.elm)
    this.$emit('mounted')
  },
  watch: {
    model(val) {
      this.localModel = val
    }
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

