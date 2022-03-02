<template lang="pug">
    .nio-date-field(v-on="$listeners")
      v-menu(
        v-model="datepickerVisible"
        :close-on-content-click="false"
        :min-width="datepickerWidth"
        :max-width="datepickerWidth"
        transition="scale-transition"
        nudge-bottom="60"
        bottom
      )
        template(v-slot:activator="{ on }")
          NioTextField(
            ref="nio-date-ref"
            v-model="localModel"
            v-on="on"
            v-bind="$attrs"
            :label="$attrs.label ? $attrs.label : 'Select date'"
            icon-name="utility-chevron-down"
            icon-color="#4F64AF"
            readonly
            append
            @click:append="showDatepicker"
          )
        v-date-picker(
          :value="localModel"
          :min="min"
          :max="max"
          locale="en-in"
          no-title
          full-width
          @input="handleDateInput($event)"
        )  
</template>

<script>

import NioTextField from './TextField'

export default {
  name: 'nio-date-field',
  components: { NioTextField },
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
  watch: {
    model(val) {
      this.localModel = val
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
  destroyed() {
    this.$emit('destroyed')
  },
  methods: {
    handleDateInput(val) {
      this.$emit('update', val)
    },
    textFieldResize(val) {
      this.datepickerWidth = val
    },
    showDatepicker() {
      this.datepickerVisible = true
    }
  }
}
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_date-field'  
</style>

