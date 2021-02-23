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
          v-text-field(
            label="From Date"
            prepend-icon="event"
            readonly
            :value="fromDatepicker"
            v-on="on"
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
  components: { }
}
</script>

<style lang="sass" scoped>
  @import '../styles/mixins/_date-field'  
</style>

